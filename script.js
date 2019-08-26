/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;
  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
        ' height="' + this.size + '"' +
        ' src="' + this.image + '"' +
        ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }
  this.moveRight = function () {
    this.left += this.speed;
    console.log('ok: ' + this.left);
  }
  this.moveBottom = function () {
    this.top += this.speed;
    console.log('ok: ' + this.top);
  }
  this.moveLeft = function () {
    this.left -= this.speed;
    console.log('ok: ' + this.left);
  }
  this.moveTop = function () {
    this.top -= this.speed;
    console.log('ok: ' + this.top);
  }
}
let  hero = new Hero('pikachu.png', 0, 0, 200,100);
let maxWidth= window.innerWidth - hero.size;
let maxTop= window.innerHeight - hero.size;
function start() {

  if (hero.left < maxWidth && hero.top <= 0) {
    hero.moveRight(100);
  } else if (hero.left >= maxWidth && hero.top < maxTop) {
    hero.moveBottom(100);
  } else if (hero.left > 0 && hero.top > maxTop) {
    hero.moveLeft(100)
  } else if (hero.left <= 0 && hero.top > 0) {
    hero.moveTop(100);
  }

  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();