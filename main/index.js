'use strict';

let highScoreValue = 0;

let actualNumber = Math.floor(Math.random() * 20) + 1;

const body = document.querySelector('body');

const displayActual = document.querySelector('.actual-no');

const input = document.querySelector('input');
const rightStart = function (message) {
  document.querySelector('.right-start').innerHTML = message;
};
const scoreValue = document.querySelector('.score');
console.log(scoreValue.innerHTML);
console.log(scoreValue.innerHTML);

const highScore = document.querySelector('.highscore');

// function for checking score

const checkScore = inp => {
  scoreValue.innerHTML > 1
    ? inp
      ? inp !== actualNumber
        ? (scoreValue.innerHTML--,
          rightStart(inp > actualNumber ? `📈 Too high` : `📉 Too low`))
        : (rightStart(`🎉 Correct Number`),
          ((body.style.backgroundColor = `#60b347`),
          (displayActual.style.width = `20rem`)),
          (displayActual.innerHTML = actualNumber),
          (highScoreValue = scoreValue.innerHTML),
          (highScore.innerHTML =
            highScoreValue > +highScore.innerHTML
              ? highScoreValue
              : highScore.innerHTML))
      : (rightStart(`⛔ No Number`), scoreValue.innerHTML--)
    : ((scoreValue.innerHTML = 0), rightStart(`No More chances Left.`));
};

//  Again button
document.querySelector('.btn-Again').addEventListener('click', function () {
  scoreValue.innerHTML = 20;
  actualNumber = Math.floor(Math.random() * 20) + 1;
  input.value = ' ';
  rightStart(`Start guessing...`);
  displayActual.innerHTML = `?`;
  body.style.backgroundColor = `#242424`;
  displayActual.style.width = `9.5rem`;
});

// Check button
document.querySelector('.btn-check').addEventListener('click', function () {
  let inp = Number(input.value);
  console.log(typeof inp);
  checkScore(inp);
});

// arrow buttons
// document.querySelector('.uparrow').addEventListener('click', function () {
//   input.value++;
//   console.log(input.value);
// });
// document.querySelector('.downarrow').addEventListener('mouseover', function () {
//   input.value--;
//   console.log(input.value);
// });
