let calculator = document.getElementById("calculator");
calculator.style.width = (screen.width)/4 + "px"
calculator.style.height = (screen.height)/2 + "px"

let keys = ["7","8","9","On","4","5","6","/","1","2","3","X","0",".","-","+"];
let iter = 0;

for(let i=0;i<6;i++)
{
    let row = document.createElement("div");
    row.classList.add("row");
    if (i==0)
    {
        row.id = "screen";
        row.innerHTML = "0";
    }
    for(let j=0;j<4 && i>0 && i<5;j++)
    {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        let key = document.createElement("button");
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



