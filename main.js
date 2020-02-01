let calculator = document.getElementById("calculator");
calculator.style.width = (screen.width)/4 + "px"
calculator.style.height = (screen.height)/2 + "px"

let keys = ["7","8","9","Clear","4","5","6","/","1","2","3","*","0",".","-","+"];
let iter = 0;
let Screen;

for(let i=0;i<6;i++)
{
    let row = document.createElement("div");
    row.classList.add("row");
    if (i==0)
    {
        row.id = "screen";
        Screen = row;
    }
    for(let j=0;j<4 && i>0 && i<5;j++)
    {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        let key = document.createElement("button");
        let number = false;
        /*for(let k=0;k<10;k++)
        {
            if(keys[iter]==k){
                key.classList.add("numbers");
                number = true;
            }
        }
        if(!number)
        {
            if(keys[iter]=="+" || keys[iter]=="-" || keys[iter]=="*" || keys[iter]=="/")
                key.classList.add("operators");
        }*/

        if(keys[iter]=="Clear")
        {
            key.id = "clear";
        }
        else 
            key.classList.add("expression");
        
        key.innerHTML = keys[iter++];
        key.classList.add("buttons");
        cell.appendChild(key);
        row.appendChild(cell);
        key.style.width = calculator.clientWidth/4 + "px";
        key.style.height = calculator.clientHeight/6 + "px";
    }

    if(i==5)
    {
        let equalButton = document.createElement("button");
        equalButton.innerHTML = "=";
        equalButton.id = "equalButton";
        equalButton.classList.add("buttons");
        equalButton.style.width = calculator.clientWidth + "px";
        equalButton.style.height = calculator.clientHeight/6 + "px";
        row.appendChild(equalButton);

    }

    calculator.appendChild(row);
    row.style.width = row.parentElement.clientWidth + "px";
    row.style.height = row.parentElement.clientHeight/6 + "px";
}


let numOfOperators = 0;
let lengthStr=0;
let arrOpIdx = new Array();
let arrOp = new Array();
arrOpIdx[0]=-1;
Screen.innerHTML = "";
let c = document.getElementById("clear");
c.addEventListener("click",clearFunction);
function clearFunction(e)
{
    Screen.innerHTML = "";
    numOfOperators = 0;
    lengthStr=0;
    arrOpIdx = new Array();
    arrOp = new Array();
    arrOpIdx[0]=-1;
}

let n = document.getElementsByClassName("expression");

for(let a = 0 ; a < n.length ; a++)
{
    n[a].addEventListener("click",writeFunction);
}


function writeFunction(e)
{
    Screen.innerHTML += e.target.innerHTML;
    if(e.target.innerHTML=="+" || e.target.innerHTML=="-" || e.target.innerHTML=="*" || e.target.innerHTML=="/")
    {
        arrOp[numOfOperators]=e.target.innerHTML;
        numOfOperators++;
        arrOpIdx[numOfOperators]=lengthStr;
        console.log(arrOp[numOfOperators-1]);
    }
    lengthStr++;
    
}

equalButton.addEventListener("click",operate);

function operate(e)
{
    let str = Screen.innerHTML;
    let result = "";
    arrOpIdx[numOfOperators+1]=str.length;
    console.log(str.length);
    console.log(arrOp);
    console.log(arrOpIdx);
    while(arrOp.findIndex(checkDivide)!=-1){

        let i=arrOp.findIndex(checkDivide);
        let j=i+1;//arrOpIdx length is one greater than arrOp 
        result = divide(str.substring(arrOpIdx[j-1]+1,arrOpIdx[j]),str.substring(arrOpIdx[j]+1,arrOpIdx[j+1]));
        let old = str.substring(arrOpIdx[j-1]+1,arrOpIdx[j+1]);
        str = str.replace(old,result);
        arrOp.splice(i,1);
        let k=1;
        arrOpIdx = new Array();
        arrOpIdx[0]=-1;
        for(let m=0;m<str.length;m++)
        {
            if(str.charAt(m)=="+" || str.charAt(m)=="-" || str.charAt(m)=="*" || str.charAt(m)=="/")
            {
                arrOpIdx[k++]=m;
            }
        }
        arrOpIdx[k+1]=str.length;
        console.log(arrOp);
        console.log(arrOpIdx);
        console.log(str);
    }

    while(arrOp.findIndex(checkMultiply)!=-1){

        let i=arrOp.findIndex(checkMultiply);
        let j=i+1;//arrOpIdx length is one greater than arrOp 
        result = multiply(str.substring(arrOpIdx[j-1]+1,arrOpIdx[j]),str.substring(arrOpIdx[j]+1,arrOpIdx[j+1]));
        let old = str.substring(arrOpIdx[j-1]+1,arrOpIdx[j+1]);
        str = str.replace(old,result);
        arrOp.splice(i,1);
        let k=1;
        arrOpIdx = new Array();
        arrOpIdx[0]=-1;
        for(let m=0;m<str.length;m++)
        {
            if(str.charAt(m)=="+" || str.charAt(m)=="-" || str.charAt(m)=="*" || str.charAt(m)=="/")
            {
                arrOpIdx[k++]=m;
            }
        }
        arrOpIdx[k+1]=str.length;
        console.log(arrOp);
        console.log(arrOpIdx);
        console.log(str);
    }

    while(arrOp.findIndex(checkAdd)!=-1){

        let i=arrOp.findIndex(checkAdd);
        let j=i+1;//arrOpIdx length is one greater than arrOp 
        result = add(str.substring(arrOpIdx[j-1]+1,arrOpIdx[j]),str.substring(arrOpIdx[j]+1,arrOpIdx[j+1]));
        let old = str.substring(arrOpIdx[j-1]+1,arrOpIdx[j+1]);
        str = str.replace(old,result);
        arrOp.splice(i,1);
        let k=1;
        arrOpIdx = new Array();
        arrOpIdx[0]=-1;
        for(let m=0;m<str.length;m++)
        {
            if(str.charAt(m)=="+" || str.charAt(m)=="-" || str.charAt(m)=="*" || str.charAt(m)=="/")
            {
                arrOpIdx[k++]=m;
            }
        }
        arrOpIdx[k+1]=str.length;
        console.log(arrOp);
        console.log(arrOpIdx);
        console.log(str);
    }

    while(arrOp.findIndex(checkSubtract)!=-1){

        let i=arrOp.findIndex(checkSubtract);
        let j=i+1;//arrOpIdx length is one greater than arrOp 
        result = subtract(str.substring(arrOpIdx[j-1]+1,arrOpIdx[j]),str.substring(arrOpIdx[j]+1,arrOpIdx[j+1]));
        let old = str.substring(arrOpIdx[j-1]+1,arrOpIdx[j+1]);
        str = str.replace(old,result);
        arrOp.splice(i,1);
        let k=1;
        arrOpIdx = new Array();
        arrOpIdx[0]=-1;
        for(let m=0;m<str.length;m++)
        {
            if(str.charAt(m)=="+" || str.charAt(m)=="-" || str.charAt(m)=="*" || str.charAt(m)=="/")
            {
                arrOpIdx[k++]=m;
            }
        }
        arrOpIdx[k+1]=str.length;
        console.log(arrOp);
        console.log(arrOpIdx);
        console.log(str);
    }

    Screen.innerHTML = str;



}


let all = document.getElementsByClassName("buttons");
for(let i=0; i < all.length; i++)
{
    all[i].addEventListener("mouseover",hoverFunction);
    all[i].addEventListener("mouseout",nonHoverFunction);
}

let bgcolor;
let bgImg;
let clr;
let bdClr;

function hoverFunction(e)
{
    bgcolor = e.target.style.backgroundColor;
    e.target.style.backgroundColor = "#5a5a5a";

    bgImg = e.target.style.backgroundImage;
    e.target.style.backgroundImage = "none";

    clr = e.target.style.color;
    e.target.style.color = "black";

    bdClr = e.target.style.borderColor;
    e.target.style.borderColor = "#343434";
}
function nonHoverFunction(e)
{
    e.target.style.backgroundColor = bgcolor;
    e.target.style.backgroundImage = bgImg;
    e.target.style.color = clr;
    e.target.style.borderColor = bdClr;
}


function add(a,b)
{
    let A = parseFloat(a);
    let B = parseFloat(b);
    return A+B;
}

function subtract(a,b)
{
    let A = parseFloat(a);
    let B = parseFloat(b);
    return A-B;
}

function multiply(a,b)
{
    let A = parseFloat(a);
    let B = parseFloat(b);
    return A*B;
}

function divide(a,b)
{
    let A = parseFloat(a);
    let B = parseFloat(b);
    if(B==0)
        return "Infinity";
    return A/B;
}


function checkDivide(a)
{
    return a=="/";
}

function checkMultiply(a)
{
    return a=="*";
}

function checkAdd(a)
{
    return a=="+";
}

function checkSubtract(a)
{
    return a=="-";
}
