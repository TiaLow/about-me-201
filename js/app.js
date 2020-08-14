
'use strict';

/* ===============================================+====================== PLAN FOR TUES JUNE 2

Take user's name input, thank them by name for visiting site, display back in last message.

- 5 prompts, yes or no questions, use if else statements

1. Do you know Tia?
  if yes, console.log and then alert "cool"
  if no, console.log and then alert "bummer"

2. Is Tia from WA?

3. Does Tia not have a twin brother? (testing logic on this one!)

4. Is Tia short for a longer name?

5. Is Tia a black belt in Taekwondo?

++++++++++++++++++++++++++++++++++++++=================================== PLAN ENDS HERE, QUESTIONS BELOW*/

//----------------------------------------------------------------------- Prompt for user name

// eslint-disable-next-line no-unused-vars
function startGame(){

  var correctGuesses = 0;

  var userName = prompt('Hello! What is your name?');

  alert(userName + ', thanks for visiting my site! I\'d like to ask you 7 questions.');

  // -------------------------------------------------------------------- 1. Know Tia?

  function questionKnowTia() {

    var knowTiaBeforeLowercase = prompt('Do you know Tia?');

    var knowTia = knowTiaBeforeLowercase.toLowerCase();

    if(knowTia === 'yes' || knowTia === 'y' || knowTia === 'ya' || knowTia === 'yeah' ){
      alert('Neat! I have more questions.');
      correctGuesses++;
    } else {
      alert('Bummer! Next question.');
    }

  }

  questionKnowTia();

  // -------------------------------------------------------------------- 2. Tia from WA?

  function questionFromWa() {

    var tiaFromWa = prompt('Do you think Tia is from Washington?');

    if(tiaFromWa === 'no' || tiaFromWa ==='No' || tiaFromWa==='NO' || tiaFromWa==='n' || tiaFromWa==='N' ){
      alert('That\'s incorrect, try again!');
    } else if (tiaFromWa === 'yes' || tiaFromWa ==='YES' || tiaFromWa === 'Yes' || tiaFromWa === 'y' || tiaFromWa === 'Y' ){
      alert('Booyah! Born and raised!');
      correctGuesses++;
    } else {
      alert('I\'m sorry, I didn\'t understand your input of ' + tiaFromWa + '. Oh well let\'s move on.');
    }

  }

  questionFromWa();

  // -------------------------------------------------------------------- 3. Tia have twin bro?

  function questionTwinBro() {

    var tiaHaveBrother = prompt('Does Tia not have a twin brother?');

    if(tiaHaveBrother === 'NO' || tiaHaveBrother === 'No' || tiaHaveBrother === 'no' || tiaHaveBrother === 'N' || tiaHaveBrother === 'n'){
      alert('Your answer of ' + tiaHaveBrother + ' is correct because you\'re right, Tia DOES have a twin brother.');
      correctGuesses++;
    } else if(tiaHaveBrother !== 'NO' || tiaHaveBrother !== 'No' || tiaHaveBrother !== 'no'){
      alert('You answered ' + tiaHaveBrother + ' which is something other than \'no\' so it is incorrect.');
    }

  }

  questionTwinBro();

  // -------------------------------------------------------------------- 4. Tia short for something?

  function questionTiaName() {

    var tiaIsShortName = prompt('Do you think the name \'Tia\' is short for something?');
    var tiaShortName = tiaIsShortName.toLowerCase();

    if(tiaShortName === 'yes' || tiaShortName === 'y' || tiaShortName === 'ya' || tiaShortName === 'yeah'){
      alert('You said ' + tiaShortName + ' and that is incorrect.');
    } else if(tiaShortName === 'no' || tiaShortName === 'n'){
      alert('Righto! Your answer of ' + tiaShortName + ' is correct.');
      correctGuesses++;
    } else{
      alert('You gave me \'' + tiaShortName + '\' and that just doesn\'t make sense. Moving on to the next question!');
    }

  }

  questionTiaName();

  // --------------------------------------------------------------------- 5. Tia black belt in TKD?

  function questionBlackBelt() {

    var tiaTKDBeforeLowerCase = prompt('Alright you think you know Tia do ya? Is Tia a black belt in Tae Kwon Do?');
    var tiaTKD = tiaTKDBeforeLowerCase.toLowerCase();

    if(tiaTKD === 'yes' || tiaTKD === 'y'){
      alert('Correct! Roundhouse kick booyahhhhh!');
      correctGuesses++;
    } else if (tiaTKD === 'no' || tiaTKD === 'n'){
      alert('Nice try grasshopper! She\'s a black belt.');
    } else {
      alert('Maybe you typed some version of yes or no and I just haven\'t accounted for all possiblities, but we\'re gonna keep it movin here.');
    }
  }

  questionBlackBelt();

  alert(userName + ', thank you for answering these questions, I have a few more. Stick with me!');



  /* =============================================================================== PLAN FOR WEDS JUNE 3

- add 6th question to game that takes in number input by prompting to guess a number. indicate through alert if too high or too low. give user 4 opportunities to get correct. after all attempts exhausted, tell user correct answer. consider using loop of some sort.

- add 7th question that has multiple correct answers stored in array (guessing game w many possibilities). give user 6 attempts to guess, guesses will end once user guesses a correct answer or they run out of attempts. display all possible correct answers to user. consider using loop.

- user wants to know final score. keep track of total number of correct answers. at the end tell them how many they got correct out of the 7 questions asked.

- use console.logs, add additional css, look back at stretch goals if you have time

===================================================================================== END OF PLAN */

  // ------------------------------------------------------------------------------- 6. Tia's age, get 4 guesses.

  function questionTiaAge(){

    for (var i = 0; i < 4; i++){
      var tiaAge = prompt('How old do you think I am?');

      if (tiaAge === '32'){
        alert ('Ding ding ding! You guessed it.');
        correctGuesses++;
        break;
      } else if (tiaAge > 32){
        alert ('You guessed too high! Try again my friend.');
      } else if (tiaAge < 32){
        alert ('Guessed too low, guess again.');
      }
    }

    alert ('If you didn\'t guess correctly, I am 32 years old.');

  }

  questionTiaAge();

  //----------------------------------------------------------------------- 7. Tia's hobbies, get 6 tries. Show all correct answers.

  function questionTiaHobbies() {

    var tiaHobbyArray = ['reading' , 'skiing' , 'cooking' , 'gardening' , 'hiking' , 'learning'];
    var numberGuesses = 0;

    for (var a = 0; a < 6; a++){

      var tiaHobby = prompt('I have heaps of hobbies! What do you think one of them is?').toLowerCase();

      if (tiaHobby === tiaHobbyArray[0] || tiaHobby === tiaHobbyArray[1] || tiaHobby === tiaHobbyArray[2] || tiaHobby === tiaHobbyArray[3] || tiaHobby === tiaHobbyArray[4] || tiaHobby === tiaHobbyArray[5]){
        alert('Chyeah! Good guess!');
        correctGuesses++;
        break;
      }

      else {
        alert('Try again.');
        numberGuesses++;
        console.log(numberGuesses);
      }

      if (numberGuesses === 6){
        alert('Nice try, but you didn\'t guess correctly. Some of my hobbies are reading, skiing, cooking, gardening, hiking, and learning.');
        break;
      }

    }

  }

  questionTiaHobbies();

  //============================================== 8. final score of correct guesses, used correctGuess++

  alert('Thanks for playing. You answered 7 questions and got ' + correctGuesses + ' correct. Great!');

}
