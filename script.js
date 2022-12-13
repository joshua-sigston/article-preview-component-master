const btn = document.querySelectorAll('.share_btn')
const shareConsole = document.getElementById('share_console')

btn.forEach( item => {
    item.addEventListener('pointerdown', () => {
        console.log(btn)
        shareConsole.classList.toggle('reveal')
        shareConsole.classList.toggle('opacity')
    })
})
