const container = document.querySelector("#container");
let mouseDown = false;

document.addEventListener("mousedown", () => {
    mouseDown = true;
});

document.addEventListener("mouseup", () => {
    mouseDown = false;
});

// prevents the browser's default drag behaviour
document.addEventListener("dragstart", (e) => {
    e.preventDefault();
});

function createGrid(size) {
    const squareSize = 640 / size;

    for(let i = 0; i < (size*size); i++)
    {
        const grid = document.createElement("div")
        grid.classList.add("grid");

        grid.style.width = `${squareSize}px`;
        grid.style.heigth = `${squareSize}px`;

        grid.addEventListener("mouseover", () => {
            if(mouseDown)
            {
                grid.style.backgroundColor = "black";
            }
        });

        grid.addEventListener("mousedown", () => {
            grid.style.backgroundColor = "black";
        });
        
        container.appendChild(grid);
    }
}

function changeSize() {
    input = prompt("Change grid size (1 - 100)");
    let size = Number(input);

    if(Number.isNaN(size))
    {
        alert("Invalid");
    }
    
    else if(size < 1)
    {
        alert("Invalid");
    }

    else if(size > 100)
    {
        alert("Invalid");
    }

    else
    {
        container.innerHTML = "";
        createGrid(size);
    }
}

const resize = document.querySelector("#resize");

resize.addEventListener("click", changeSize);

createGrid(16);