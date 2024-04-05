/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function newCard() {
  let icons = ["&hearts;", "&spades;", "&clubs;", "&diams;"];
  let letter = ["J", "Q", "K", "A"];
  function randomIndex() {
    return Math.floor(Math.random() * 9 + 2);
  }
  function randomIndexIcons() {
    return Math.floor(Math.random() * 4 + 0);
  }
  function randomIndexLetters() {
    return Math.floor(Math.random() * 4 + 0);
  }

  let number = randomIndex();
  let numIcons = randomIndexIcons();
  let numLetter = randomIndexLetters();
  let NumBody = [number, letter[numLetter]];
  console.log(number);
  console.log(numIcons);
  console.log(numLetter);
  console.log(NumBody);
  function randomIndexNumBody() {
    return Math.floor(Math.random() * 2 + 0);
  }
  let showNum = randomIndexNumBody();
  console.log(NumBody[showNum]);
  document.querySelector(".textBody").innerHTML = NumBody[showNum];

  let choice = icons[numIcons];
  if (choice == "&hearts;" || choice == "&diams;") {
    document.querySelector(".diams").innerHTML = icons[numIcons].fontsize(10);
    document.querySelector(".diams").style.color = "red";
    document.querySelector(".iconFooter").innerHTML = icons[numIcons].fontsize(
      10
    );
    document.querySelector(".iconFooter").style.color = "red";
  } else if (choice == "&spades;" || choice == "&clubs;") {
    document.querySelector(".spades").innerHTML = icons[numIcons].fontsize(10);
    document.querySelector(".spades").style.color = "black";
    document.querySelector(".iconFooter").innerHTML = icons[numIcons].fontsize(
      10
    );
    document.querySelector(".iconFooter").style.color = "black";
  }

  document.querySelector("#btnNewGame").addEventListener("click", newCard);
};
