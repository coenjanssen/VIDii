// JavaScript Document
console.log('BMW - Timeline');
console.log("Made with ♥ by Coen Janssen");




//** PLAY - PAUSE BUTTON **//

// Declaration HTML elements //
var PlayPauseButton = document.querySelector('main article section button img');

// DOM Manipulation (functions) //
function ChangeIcon() {
    var PlayPauseButton = document.querySelector("main article section button img");
    PlayPauseButton.classList.toggle("PlayPause");
    console.log('Changed the Play/Pause icon')

    if (PlayPauseButton.classList.contains("PlayPause") == true) {
        ChangeGreenLight()
    } else {
        ChangeRedLight()
    }
  }

// Credits: naar Joost // 

// EventListeners //
PlayPauseButton.addEventListener("click", ChangeIcon);


//** TRAFFIC LIGHT **/

// Declaration HTML elements //
var TrafficLightG = document.querySelector('#Green');
var TrafficLightR = document.querySelector('#Red');
var Movement = document.querySelectorAll('ol li button');
var Rotation1 = document.querySelectorAll('ol li button img:nth-of-type(2)');
var Rotation2 = document.querySelectorAll('ol li button img:nth-of-type(3)');

// DOM Manipulation (functions) //
function ChangeGreenLight() {
    TrafficLightG.checked = true;
    console.log('Go')
    TrafficLightR.checked = false;

    PlayPauseButton.classList.add("PlayPause");

    Movement.forEach(item => {
        item.classList.add("play");
    })

    // Rotation1.forEach(item => {
    //     item.classList.add("play");
    // })

    // Rotation2.forEach(item => {
    //     item.classList.add("play")
    // })
}

function ChangeRedLight() {
    TrafficLightR.checked = true;

    
    console.log('Stop')
    
    TrafficLightG.checked = false;
    
    PlayPauseButton.classList.remove("PlayPause");
    // PlayPauseButton.classList.remove("play");
    
    Movement.forEach(item => {
        item.addEventListener("animationiteration", function(e) {



            console.log(e.target.type);

            // item.classList.remove("play");
        }, {once:true});
    })

    // Rotation1.forEach(item => {
    //     item.addEventListener("animationiteration", function() {
    //         item.classList.remove("play");
    //     });
        
    // })

    // Rotation2.forEach(item => {
    //     item.addEventListener("animationiteration", function() {
    //         item.classList.remove("play");
    //     });
    // })
}

// EventListeners //
TrafficLightG.addEventListener('click', ChangeGreenLight);
TrafficLightR.addEventListener('click', ChangeRedLight);

