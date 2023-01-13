const rotateButtom = document.querySelector('.rotate-buttom')
const rotateButtomImg = document.querySelector('.rotate-buttom img')
const productImg = document.querySelector('.product-img')

function rotateProduct() {
  rotateButtom.classList.contains('close')
    ? ((rotateButtomImg.src = 'images/360buttom.svg'),
      (rotateButtomImg.alt = 'Botão para mostrar o gif do produto.'),
      rotateButtom.classList.remove('close'),
      rotateButtom.classList.add('open'),
      (productImg.src = 'images/sofá.svg'))

    : ((rotateButtomImg.src = 'images/closeButtom.svg'),
      (rotateButtomImg.alt = 'Botão para fechar o gif do produto.'),
      rotateButtom.classList.remove('open'),
      rotateButtom.classList.add('close'),
      (productImg.src = 'images/gif.gif'))
}
