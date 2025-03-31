import './style.css'

// need to keep track of mouse state
var mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}

// set cell color
function setColor(cell: HTMLDivElement, override: boolean = false){
    var colorRef = document.querySelector<HTMLInputElement>('#colorpicker')
    //@ts-ignore *sorry, had to be done*
    if (mouseDown || override) cell.style["background-color"] = colorRef?.value
}

export function setupCanvas(element: HTMLDivElement){
    // clear any existing
    element.innerHTML = ''

    // get size
    const sizeRef = document.querySelector<HTMLInputElement>('#dimension')
    const size = +(sizeRef?.value || 10)

    // populate canvas
    for (let i: number = 0; i < size; i++){
        // create row
        const rowRef = document.createElement('div')
        rowRef.className = "flex flex-row justify-center items-center w-full cursor-pointer"
        rowRef.style = `height:${1/size * 100}%;`
        rowRef.id = `row${i}`
        // create each cell in row
        for (let j: number = 0; j < size; j++){
            // create cell
            const cellRef = document.createElement('div')
            cellRef.className = `cell h-full border select-none`
            cellRef.style = `width:${1/size * 100}%;height:100%;`
            cellRef.id = `cell${i},${j}`
            // add onClick
            cellRef.addEventListener('mousedown', () => setColor(cellRef, true))
            cellRef.addEventListener('mouseover', () => setColor(cellRef))
            // add cell to row
            rowRef.appendChild(cellRef)
        }
        // add row to canvas
        element.appendChild(rowRef)
    }
}