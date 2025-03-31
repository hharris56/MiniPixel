import './style.css'
import typescriptLogo from '/typescript.svg'
import viteLogo from '/vite.svg'
import tailwindLogo from '/tailwind.svg'
import { setupCanvas } from './canvas.ts'
import { setupPalette } from './palette.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="w-screen h-screen flex flex-col items-center text-center">
    <h1 class="font-bold text-4xl mt-10">MINI PIXEL</h1>
    <p class="mb-10">a for-fun pixel editor</p>
    <div id="palette" class="flex flex-row items-center justify-evenly w-100 max-w-screen h-10 m-1">

    </div>
    <div id="canvas" class="flex flex-col justify-center items-center m-1 size-100 aspect-square max-w-screen max-h-screen">

    </div>
    <p class="mt-4">made using</p>
    <div class="flex flex-row">
      <img src="${viteLogo}" alt="Vite logo" class="size-10 m-4" />
      <img src="${typescriptLogo}" alt="TypeScript logo" class="size-10 m-4" />
      <img src="${tailwindLogo}" alt="Tailwind logo" class="size-10 m-4" />
    </div>
  </div>
`

function resetCanvas() {
  setupCanvas(document.querySelector<HTMLDivElement>('#canvas')!)
}

setupPalette(document.querySelector<HTMLDivElement>('#palette')!, resetCanvas)
resetCanvas()