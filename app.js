const cards = document.querySelectorAll('.card');
for(let i = 0; i < cards.length; i++){
    cards[i].addEventListener('mousemove', startRotate)
    cards[i].addEventListener('mouseout', stopRotate)

  
}
function stopRotate(event){
    const cardItem  = this.querySelector('.card-item')
    cardItem.style.transform = 'rotate(0)'
}
function startRotate(event){
    const cardItem  = this.querySelector('.card-item')
    const halfHeight =  cardItem.offsetHeight/2;
    const halfWidth =  cardItem.offsetWidth/2;

    cardItem.style.transform = 'rotateX('+-(event.offsetY -  halfHeight)/5+'deg) rotateY('+(event.offsetX -  halfWidth)/5+'deg)'



}
startRotate()
stopRotate()
