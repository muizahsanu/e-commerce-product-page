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

var lightboxIndex = 1
showSlide(lightboxIndex)

function currentSlide(n){
    showSlide(lightboxIndex = n)
}

function showSlide(n){
    const itemPreviews = document.getElementsByClassName('previews')
    const items = document.getElementsByClassName('item')

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

    itemPreviews[lightboxIndex-1].style.display = 'block'
    items[lightboxIndex-1].classList.add('active')
}