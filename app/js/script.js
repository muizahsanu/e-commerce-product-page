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