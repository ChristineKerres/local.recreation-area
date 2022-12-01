/////Infobox
const openInfoboxButtons = document.querySelectorAll('[data-infobox-target]')
const closeInfoboxButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const blurLR = document.getElementById("blur-lr")
const blurTB = document.getElementById("blur-tb")

openInfoboxButtons.forEach(button =>{
    button.addEventListener('click', () => {
        const infobox = document.querySelector(button.dataset.infoboxTarget)
        openInfobox(infobox)
    })
})

overlay.addEventListener('click', () =>{
    const infoboxs = document.querySelectorAll('.infobox.active')
    infoboxs.forEach(infobox =>{
        closeInfobox(infobox)
    })
})

closeInfoboxButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const infobox = button.closest('.infobox')
        closeInfobox(infobox)
    })
})

function openInfobox(infobox){
    if (infobox == null) return
    infobox.classList.add('active')
    overlay.classList.add('active')
    blurLR.style.visibility = "visible";
    blurTB.style.visibility = "hidden";
}
function closeInfobox(infobox){
    if (infobox == null) return
    infobox.classList.remove('active')
    overlay.classList.remove('active')
    blurLR.style.visibility = "hidden";
    blurTB.style.visibility = "visible";
}

////Background-theraphy - Timeout

//////Telepathic touch////////////////////////////////////////////////////////////////////////////////////////////////
