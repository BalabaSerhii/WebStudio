function showAllProducts(){
    const products = document.getElementsByClassName('work-li');
    for(let i = 0; i < products.length; i++){
        products[i].style.display = 'block';
    }
}


 function filterProducts(category){
    const products = document.getElementsByClassName('work-li');
    for(let i = 0; i<products.length; i++){
        let product = products[i];
        if (product.getAttribute('data-category') === category){
            product.style.display = 'block';
        } else{
            product.style.display = 'none'
        }
    }
 }

 document.addEventListener('DOMContentLoaded',function(){
    const showAllProducts = document.getElementById('showAllBtn');
    showAllBtn.focus()
 })