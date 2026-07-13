const container = document.querySelector("#container");
let mouseDown = false;

container.addEventListener("mousedown", () => {
    mouseDown = true;
});

document.addEventListener("mouseup", () => {
    mouseDown = false;
});

// prevents the browser's default drag behaviour
document.addEventListener("dragstart", (e) => {
    e.preventDefault();
});

let mode = "black"

const blackButton = document.querySelector("#black");
const rainbowButton = document.querySelector("#rainbow");
const darkenButton = document.querySelector("#darken");

blackButton.addEventListener("click", () => {
    mode = "black";
});

rainbowButton.addEventListener("click", () => {
    mode = "rainbow";
});

darkenButton.addEventListener("click", () => {
    mode = "darken";
});

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function colourSquare(grid) {
    if(mode === "black")
    {
        grid.style.backgroundColor = "black";
    }

    else if(mode === "rainbow")
    {
        grid.style.backgroundColor = randomColor();
    }

    else if(mode === "darken")
    {
        let opacity = Number(grid.dataset.opacity);

        opacity += 0.1;

        grid.dataset.opacity = opacity;

        grid.style.backgroundColor = `rgba(0,0,0,${opacity})`;
    }
}

function createGrid(size) {
    const squareSize = 640 / size;

    for(let i = 0; i < (size*size); i++)
    {
        const grid = document.createElement("div")
        grid.classList.add("grid");

        grid.dataset.opacity = 0;

        grid.style.width = `${squareSize}px`;
        grid.style.height = `${squareSize}px`;
        grid.style.backgroundColor = "white";

        grid.addEventListener("mouseover", () => {
            if(mouseDown)
            {
                colourSquare(grid);
            }
        });

        grid.addEventListener("mousedown", () => {
            colourSquare(grid);
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

const reset = document.querySelector("#reset");

reset.addEventListener("click", () => {
    const squares = document.querySelectorAll(".grid");

    squares.forEach(square => {
        square.style.backgroundColor = "white";
        square.dataset.opacity = 0;
    });
});

const resize = document.querySelector("#resize");

resize.addEventListener("click", changeSize);

createGrid(16);