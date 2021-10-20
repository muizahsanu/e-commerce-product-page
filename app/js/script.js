function ToggleSideBar(){
    const getNavSide = document.querySelector('.nav .nav_side')
    getNavSide.classList.toggle('show')
}

function ShowCart(){
    const getCart = document.querySelector('#navcart')
    const getOutsideCart = document.querySelector('#outside-cart')
    getCart.classList.toggle('show')
    getOutsideCart.classList.toggle('show')
}

// Init Lightbox On Main
var lightboxIndex = 1
showSlide(lightboxIndex, 'main')

// Function for preview image by clicking item image
function currentSlide(n, cntx){
    showSlide(lightboxIndex = n, cntx)
}

function plusSlide(n, cntx){
    showSlide(lightboxIndex += n, cntx)
}

// Open Lightbox Modal
function openModal(n, cntx){
    const getModal = document.getElementById('lightbox-modal')
    getModal.style.display = 'flex'
    showSlide(lightboxIndex = n, cntx)
}

// Close Lightbox Modal
function closeModal(){
    const getModal = document.getElementById('lightbox-modal')
    getModal.style.display = 'none'
}

// Slideshow function
function showSlide(n, cntx){
    const itemPreviews = document.querySelectorAll('.'+cntx+' .preview')
    const items = document.querySelectorAll('.'+cntx+' .item')

    // Validasi
    if(n > itemPreviews.length) lightboxIndex = 1
    if(n < 1) lightboxIndex = itemPreviews.length

    // Set the previews display to none
    for(let i = 0; i < itemPreviews.length; i++){
        itemPreviews[i].style.display = 'none'
    }

    // Reset the active item
    for(let i = 0; i < items.length; i++){
        items[i].classList.remove('active')
    }

    // Set preview item display to block (big image)
    // set item active class (small image) by index
    itemPreviews[lightboxIndex-1].style.display = 'block'
    items[lightboxIndex-1].classList.add('active')
}