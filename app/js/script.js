var product = {
    id: 1,
    title: 'Fall Limited Edition Sneakers Fall Limited Edition Sneakers',
    price: 250,
    discount: 50
}
var cart = []


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
    getModal.classList.add('show')
    // getModal.style.display = 'flex'
    showSlide(lightboxIndex = n, cntx)
}

// Close Lightbox Modal
function closeModal(){
    const getModal = document.getElementById('lightbox-modal')
    getModal.classList.remove('show')
    // getModal.style.display = 'none'
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

// Increasing Quantity
var productQuantity = 0
function UpdateQuantity(n){
    const getQuantityValue = document.querySelector('.quantities .value')
    productQuantity += n
    if(productQuantity < 0) productQuantity = 0
    getQuantityValue.innerHTML = productQuantity
}

// Add Product To Cart
function addToCart(){
    const quantity = document.querySelector('.quantities .value').innerHTML
    const discount = product.discount / 100
    const priceAfterDiscount = product.price * discount
    const totalPrice = priceAfterDiscount * quantity
    
    const dataCart = {
        id: product.id,
        title: product.title,
        price: priceAfterDiscount,
        quantity: quantity,
        totalPrice: totalPrice
    }

    if(cart.length > 0){
        console.log('masuk if');
        cart.forEach((item,index)=>{
            if(item.id == product.id) cart[index] = dataCart
            else cart.push(dataCart)
        })
    }
    else{
        console.log('masuk else');
        cart.push(dataCart)
    }
    console.log(cart);
    updateCartUI()
}

updateCartUI()

function HapusCartItem(asu){
    cart = cart.filter(item=>{
        return !item.id.toString().includes(asu.toString())
    })
    updateCartUI()
}

function updateCartUI(){
    const basket = document.querySelector('.cart .basket')
    const btnCheckout = document.querySelector('.btn-checkout')

    if(cart.length == 0){
        basket.innerHTML = `
            <p>Your cart is empty</p>
        `
        btnCheckout.style.display = 'none'
    }
    else{
        cart.forEach(item => {
            basket.innerHTML = `
            <div class="cart_item">
                <div class="cart_item_image">
                    <img src="/images/image-product-1-thumbnail.jpg" alt="">
                </div>
                <div class="values">
                    <div class="item-title">${item.title}</div>
                    <span>$${item.price}</span>
                    <span>x ${item.quantity}</span>
                    <span class="odd">$${item.totalPrice}</span>
                </div>
                <svg class="btn-delete" width="14" onclick="HapusCartItem(${item.id})" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
            </div>
            `
        }) 
        btnCheckout.style.display = 'block'
    }
}