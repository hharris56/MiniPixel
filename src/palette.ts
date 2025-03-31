const paletteHTML = `
<div class="flex flex-row items-center w-fit">
    <label>color</label>
    <input id="colorpicker" type="color" value="#FFFFFF" class="size-10 ml-2 rounded-full"></input>
</div>
<div class="flex flex-row items-center">
    <label>grid</label>
    <div id="toggle-grid" class="size-9 ml-2 border rounded-lg cursor-pointer select-none text-xl">y</div>
</div>
<div class="flex flex-row items-center">
    <label>size</label>
    <input id="dimension" type="number" value=10 max=20 min=1 class="size-10 ml-2 rounded-lg border text-center"></input>
</div>
`

export function setupPalette(element: HTMLDivElement, canvasCallback: () => void){
    // add html first so we can query
    element.innerHTML = paletteHTML

    // add listener for grid toggle
    const buttonRef = document.querySelector<HTMLDivElement>('#toggle-grid')
    buttonRef?.addEventListener('click', () => {
        if (buttonRef.innerText == 'y') buttonRef.innerText = 'n'
        else buttonRef.innerText = 'y'
        document.querySelectorAll('div.cell').forEach((c) => {
            c.classList.toggle('border')
        })
    })

    // add listener for dimension change
    const sizeRef = document.querySelector<HTMLDivElement>('#dimension')
    sizeRef?.addEventListener("change", () => {
        // reinitialize the canvas
        canvasCallback()
    })
}