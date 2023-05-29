const mario = document.getElementById('mario');
const bomb = document.getElementById('bomb');
const but = document.getElementById('myBtn');
const scoreElement = document.getElementById('score');
const invideObj = document.getElementById('invise-bomb')
let score = 0;
var collisionCounter = {
  count: 0
};




but.addEventListener("click", jump);




function increaseScore(){
  score++;
  scoreElement.textContent = score;
  if(score === 5000){
    showDialog("Поздравляем!", "Вы пришли!!!", function() {
      document.location.reload();
    });
    
  }
}




function jump() {
  if (mario.classList != 'jump') {
    mario.classList.add('jump');
    setTimeout(function() {
      mario.classList.remove('jump');
    }, 300);
  }
}





// Функция, вызываемая при столкновении Марио с бомбой
function onBombCollision() {
  score++;
  console.log(`Количество столкновений с бомбами: ${counter}`);
}







let isAlive = setInterval(function() {
  let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue('top'));
  let bombLeft = parseInt(window.getComputedStyle(bomb).getPropertyValue('left'));
  if(bombLeft>0){
    increaseScore()
  }
  if(bombLeft < 45 && bombLeft > 0 && marioTop >= 120) {
    clearInterval(isAlive);
    alert('ЛОХ! ПОПРОБУЙ СНОВА!  ' + "ваш результат: " + score);
    document.location.reload();
  }
}, 10);





// Получаем элементы диалогового окна и кнопки
var dialog = document.getElementById("dialog");
var dialogOk = document.getElementById("dialog-ok");

// Показываем диалоговое окно
function showDialog(title, message, okCallback) {
  // Устанавливаем заголовок и сообщение
  var dialogHeader = dialog.querySelector(".dialog-header");
  var dialogBody = dialog.querySelector(".dialog-body");
  dialogHeader.innerHTML = title;
  dialogBody.innerHTML = message;

  // Устанавливаем обработчик события для кнопки
  dialogOk.onclick = function() {
    hideDialog();
    if (typeof okCallback === "function") {
      okCallback();
    }
  };

  // Показываем диалоговое окно
  dialog.style.display = "block";
}


function hideDialog() {
  dialog.style.display = "none";
}




