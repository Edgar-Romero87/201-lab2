'use strict';

var userName;

alert('Greetings Friends, welcome to Edgar\'s new web page');

//first question to know visitors name
function user(){
  userName = prompt('What is your name?');
  console.log('Prompt for username. User answered: ' + userName );
}

//second question if username wants try a game
function from(){
  var canYouGuess = prompt('Hola ' + userName + ' do you wanna guess where I am from?');
  if(canYouGuess.toLowerCase() === 'yes'){
    alert('great, I will help you with easie questions.');
  } else if(canYouGuess.toLowerCase() === 'no'){
    alert('Too bad, you have to do it');}
  prompt('Please answer with a yes or a no');
}

//third question if username know about tequila
function tequila(){
  var drinkedTequila = prompt('Have you ever try: Tequila?');
  if(drinkedTequila.toLowerCase() === 'yes'){
    alert('I hope it was just a taste hehe.');
  } else if(drinkedTequila.toLowerCase() === 'no'){
    alert('You should give it a try.');
  }
}

//fourth question about avocados
function guac(){
  var avocados = prompt('Do you like Avocados?');
  if(avocados.toLowerCase()=== 'yes'){
    alert('Good, where I am from produces most of it.');
  } else if(avocados.toLowerCase() === 'no'){
    alert('No guacamole for you my friend.');
  }
}

//fifth question about taco tuesdays
function food(){
  var tacos = prompt('Do you know what is great on Tuesdays?');
  if(tacos.toLowerCase() === 'yes'){
    alert('Oh yes, Tacos!');
  } else if(tacos.toLowerCase() === 'no'){
    alert('That is unacceptable');
  }
}

//sixth question about Mexico
function states(){
  var correctNumber = 32;
  for(var i = 0; i < 4; i ++){
    var guessingNumber = parseInt(prompt('Now, an small game, how many states are in Mexico? you have 5 opportunities'));
    if(guessingNumber === correctNumber){
      alert('You are correct');
      break;
      //correctAnswer ++;
    } else if(guessingNumber < correctNumber){
      alert('Sorry,too low, try again');
    } else if(guessingNumber > correctNumber){
      alert('Sorry, to high');
    }
    if( i === 3){
      alert('unfurtunely that was you final chance, Mexico has 32 states');
    }
  }
}


//sevent question
function notFromMexico(){
  var myFavCities= ['Seattle','Las vegas','New York','Mexico'];
  var isWrong = true;
  for(var j =0; j < 4; j ++){
    var city = prompt('Now, the last one I promise, name a city that you think is my one of my favorite ones, you have 4 opportunities');
    for(var i =0;i < myFavCities.length; i ++){
      if (city.toLowerCase() === myFavCities[i]){
        alert('Good Job');
        isWrong = false;
        break;
      }
    } if (isWrong === true){
      alert('Try again');
    } else {
      break;
    }
  }
}



user();
from();
tequila();
guac();
food();
states();
notFromMexico();
alert('Well ' + userName + ' I think is pretty clear now, I am from Italy hehe');
alert('Adios My friend');
//console.log(userName + ' guess where from ' + canYouGuess);
