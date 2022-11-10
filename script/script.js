/* ▒▒▒▒▒▒▒▒▒▒ GENERAL / CONSOLE LOG                                         ▒▒▒▒▒▒▒▒▒▒ */

console.log('BMW - Timeline');
console.log("Made with ♥ by Coen Janssen");
console.log("Latest update: 2022 11 10");






/* ▒▒▒▒▒▒▒▒▒▒ DIALOG                                                       ▒▒▒▒▒▒▒▒▒▒ */


const dialog = document.querySelector("#dialog");

const openDialogButton = document.querySelector("#openDialog");

openDialogButton.addEventListener("click", () => dialog.showModal());

dialog.addEventListener('close', () => 
console.log(dialog.returnValue ));






/* ▒▒▒▒▒▒▒▒▒▒ TRAFFIC LIGHT                                                ▒▒▒▒▒▒▒▒▒▒ */


var TrafficLightG = document.querySelector('#Green');
var TrafficLightR = document.querySelector('#Red');

// alle auto's
var Movement = document.querySelectorAll('ol li button');

// de auto die als eerste bij het stoplicht is
var frontCar = document.querySelector('ol li:nth-of-type(6) button');

// de andere auto's
var otherCars = document.querySelectorAll('ol li:nth-of-type(-n + 5) button');

// DOM Manipulation (functions) //
function ChangeGreenLight() {
    TrafficLightG.checked = true;
    console.log('Set the traffic light to green.')
    TrafficLightR.checked = false;

    PlayPauseButton.classList.add("pause");

    Movement.forEach(item => {
        item.classList.add("play");
    })
}

function ChangeRedLight() {
    TrafficLightR.checked = true;

    console.log('Set the traffic light to red.')

    TrafficLightG.checked = false;

    PlayPauseButton.classList.remove("pause");

    // als de eerste auto bij het stoplicht is die auto stoppen
    // daarna alle andere auto's laten stoppen

    frontCar.addEventListener("animationiteration", stopFrontCar);

    function stopFrontCar(e) {
        // checken of de button (de hele auto) en niet een van de wielen klaar is met een animatie

        if (e.target.nodeName.toLowerCase() == "button") {
            // de eerste auto dan stoppen
            frontCar.classList.remove("play");
            frontCar.removeEventListener("animationiteration", stopFrontCar);

            // en dan ook de andere auto's laten stoppen
            otherCars.forEach(otherCar => {
                otherCar.addEventListener("animationiteration", stopOtherCar);
            })
        }
    }

    function stopOtherCar(e) {
        if (e.target.nodeName.toLowerCase() == "button") {
            e.target.classList.remove("play");
            e.target.removeEventListener("animationiteration", stopOtherCar);
        }
    }
}

// EventListeners //
TrafficLightG.addEventListener('change', ChangeGreenLight);
TrafficLightR.addEventListener('change', ChangeRedLight);
// change ipv click






/* ▒▒▒▒▒▒▒▒▒▒ TRAFFIC LIGHT                                                ▒▒▒▒▒▒▒▒▒▒ */


// Declaration HTML elements //
var PlayPauseButton = document.querySelector('main article section button');

// DOM Manipulation (functions) //
function toggleCars() {
    PlayPauseButton.classList.toggle("pause");


    if (PlayPauseButton.classList.contains("pause")) {
        ChangeGreenLight(); // stoplicht op groen - auto gaan rijden
    } else {
        ChangeRedLight(); // stoplicht op rood - auto gaan stoppen
    }
}

// Credits naar Joost // 

// EventListeners //
PlayPauseButton.addEventListener("click", toggleCars);





/* ▒▒▒▒▒▒▒▒▒▒ CAR LIGHTS                                                   ▒▒▒▒▒▒▒▒▒▒ */


var LightsButton = document.querySelector('main article:nth-of-type(2) section:nth-of-type(3) button')
var LightsCar1 = document.querySelector('ol li:nth-of-type(1) button img:nth-of-type(1)')
var LightsCar2 = document.querySelector('ol li:nth-of-type(2) button img:nth-of-type(1)')
var LightsCar3 = document.querySelector('ol li:nth-of-type(3) button img:nth-of-type(1)')
var LightsCar4 = document.querySelector('ol li:nth-of-type(4) button img:nth-of-type(1)')
var LightsCar5 = document.querySelector('ol li:nth-of-type(5) button img:nth-of-type(1)')
var LightsCar6 = document.querySelector('ol li:nth-of-type(6) button img:nth-of-type(1)')


function toggleLights() {
    LightsCar1.classList.toggle("light1")
    LightsCar2.classList.toggle("light2")
    LightsCar3.classList.toggle("light3")
    LightsCar4.classList.toggle("light4")
    LightsCar5.classList.toggle("light5")
    LightsCar6.classList.toggle("light6")
    LightsButton.classList.toggle("active")
    console.log('Turned on/off the lights of the cars.')
}

LightsButton.addEventListener('click', toggleLights)






/* ▒▒▒▒▒▒▒▒▒▒ CAR INFORMATION                                              ▒▒▒▒▒▒▒▒▒▒ */ 


var htmlH3 = document.querySelector('body main article:nth-of-type(1) h3');
var htmlH4 = document.querySelector('body main article:nth-of-type(1) h4');
var htmlP1 = document.querySelector('body main article:nth-of-type(1) p:nth-of-type(1)');
var htmlP2 = document.querySelector('body main article:nth-of-type(1) p:nth-of-type(2)');
var htmlP3 = document.querySelector('body main article:nth-of-type(1) p:nth-of-type(3)');
var htmlP4 = document.querySelector('body main article:nth-of-type(1) p:nth-of-type(4)');
var htmlP5 = document.querySelector('body main article:nth-of-type(1) p:nth-of-type(5)');
var htmlP6 = document.querySelector('body main article:nth-of-type(1) p:nth-of-type(6)');

// Functie // 
var auto1 = document.querySelector('body main ol li:nth-of-type(1) button');
var auto2 = document.querySelector('body main ol li:nth-of-type(2) button');
var auto3 = document.querySelector('body main ol li:nth-of-type(3) button');
var auto4 = document.querySelector('body main ol li:nth-of-type(4) button');
var auto5 = document.querySelector('body main ol li:nth-of-type(5) button');
var auto6 = document.querySelector('body main ol li:nth-of-type(6) button');


function clickCar1() {
    document.getElementsByName("auto-1");
    htmlH3.innerHTML = "BMW Isetta";
    htmlH3.dataset.jaar="1955 - 1962";
    htmlH3.dataset.soort="1-door Cabriolet";
    htmlH4.innerHTML = "De naam van deze iconische auto is Isetta, een door de Italiaanse firma ‘Iso SpA’ van Renzo Rivolta gebouwde auto welke bekend is onder de naam: ‘bubblecar’. De Isetta is een mini auto die zich kenmerkt door een enkele deur aan de voorkant en een kleine spoorbreedte achter. En is één van de meest compacte BMW’s ter wereld.";
    htmlP1.innerHTML = "150 cm";
    htmlP2.innerHTML = "Wheelbase";
    htmlP3.innerHTML = "229 cm";
    htmlP4.innerHTML = "Length";
    htmlP5.innerHTML = "134 cm";
    htmlP6.innerHTML = "Heigth";
}

function clickCar2() {
    document.getElementsByName("auto-2");
    htmlH3.innerHTML = "BMW Z1 (E30)";
    htmlH3.dataset.jaar="1989 - 1991";
    htmlH3.dataset.soort="Roadster";
    htmlH4.innerHTML = "Een in 1986 ontworpen Z1 auto door Harm Lagaaij. Deze BMW Z1 is een roadster van de Beierse autofabrikant BMW. Van deze auto, die in 1987 gepresenteerd werd, zijn tussen 1989 en 1991 precies 8.000 exemplaren geproduceerd. Leuk feitje: er werden slechts 38 modellen met rode binnenbekleding gemaakt, deze zijn dan ook het zeldzaamst.";
    htmlP1.innerHTML = "245 cm";
    htmlP2.innerHTML = "Wheelbase";
    htmlP3.innerHTML = "392 cm";
    htmlP4.innerHTML = "Length";
    htmlP5.innerHTML = "128 cm";
    htmlP6.innerHTML = "Heigth";
}

function clickCar3() {
    document.getElementsByName("auto-3");
    htmlH3.innerHTML = "BMW 3-Series (E46)";
    htmlH3.dataset.jaar="1997 - 2006";
    htmlH3.dataset.soort="Coupé";
    htmlH4.innerHTML = "Met dank aan zijn eerdere voorbijganger de E36, verving de E46 3-serie vanaf 1998 de oudere modellen. Nieuw aan deze E46 versie is de nieuw ontwikkelde neus en daklijn, daarnaast heeft deze ook een grotere wielbasis dan zijn voorganger. Daarnaast werden het aantal PK’s opgeschroeft van 150PK naar 170PK. Later is dit naar 204PK gegaan.";
    htmlP1.innerHTML = "272 cm";
    htmlP2.innerHTML = "Wheelbase";
    htmlP3.innerHTML = "449 cm";
    htmlP4.innerHTML = "Length";
    htmlP5.innerHTML = "137 cm";
    htmlP6.innerHTML = "Heigth";
}

function clickCar4() {
    document.getElementsByName("auto-4");
    htmlH3.innerHTML = "BMW 1-Series";
    htmlH3.dataset.jaar="2007 - 2011";
    htmlH3.dataset.soort="3-door Hatchback";
    htmlH4.innerHTML = "Naast een vertrouwde 3-serie was er ook vraag naar een compacte middenklasse van BMW, dit is hét instapmodel van de autofabrikant. In 2004 werd deze auto gelanceerd, als opvolger van de BMW 3-serie Compact. In maart 2007 kwam deze versie uit met een facelift en een driedeurs versie die hier onze tijdlijn weergeven wordt. ";
    htmlP1.innerHTML = "266 cm";
    htmlP2.innerHTML = "Wheelbase";
    htmlP3.innerHTML = "424 cm";
    htmlP4.innerHTML = "Length";
    htmlP5.innerHTML = "142 cm";
    htmlP6.innerHTML = "Heigth";
}

function clickCar5() {
    document.getElementsByName("auto-5");
    htmlH3.innerHTML = "BMW i8";
    htmlH3.dataset.jaar="2014 - 2020";
    htmlH3.dataset.soort="Coupé";
    htmlH4.innerHTML = "Moeten hybride auto’s een futuristische of aparte look hebben? Nee hoor. De BMW i8 ontworpen door Adrian van Hooydonk is een hybride auto, ontwikkeld door BMW. Het voertuig is een doorontwikkeling van een conceptmodel genaamd BMW Vision Efficient Dynamics uit 2009. Het voertuig is een plug-inhybride, met een vermogen van 362PK.";
    htmlP1.innerHTML = "280 cm";
    htmlP2.innerHTML = "Wheelbase";
    htmlP3.innerHTML = "469 cm";
    htmlP4.innerHTML = "Length";
    htmlP5.innerHTML = "129 cm";
    htmlP6.innerHTML = "Heigth";
}

function clickCar6() {
    document.getElementsByName("auto-6");
    htmlH3.innerHTML = "BMW i4";
    htmlH3.dataset.jaar="2021 - Present";
    htmlH3.dataset.soort="Liftback M";
    htmlH4.innerHTML = "In het jaar 2021 lanceerde BMW voor het eerst een volledig elektrische versie van de 4-serie Gran Coupé, de BMW i4. Deze auto is bijzonder door het krachtige vermogen van 544 PK en een actieradius van maar liefst 590 km. Deze elektrische auto kan een topsnelheid bereiken tot ongeveer 225 km/u en is bij de 100km/u in 4 tot 6 seconden.";
    htmlP1.innerHTML = "286 cm";
    htmlP2.innerHTML = "Wheelbase";
    htmlP3.innerHTML = "478 cm";
    htmlP4.innerHTML = "Length";
    htmlP5.innerHTML = "145 cm";
    htmlP6.innerHTML = "Heigth";
}


// EventListeners // 
auto1.addEventListener('click', clickCar1);
auto2.addEventListener('click', clickCar2);
auto3.addEventListener('click', clickCar3);
auto4.addEventListener('click', clickCar4);
auto5.addEventListener('click', clickCar5);
auto6.addEventListener('click', clickCar6);






/* ▒▒▒▒▒▒▒▒▒▒ HORN SOUND                                                   ▒▒▒▒▒▒▒▒▒▒ */


var ToeterButton = document.querySelector('main article:nth-of-type(2) section:nth-of-type(5) button')
ToeterButton.addEventListener("click", toeteren);

function toeteren() {
    console.log('Clicks the horn antisocially.');
    var audio = new Audio('./snd/car-horn.mp3');
    audio.play();
}






/* ▒▒▒▒▒▒▒▒▒▒ STONE                                                        ▒▒▒▒▒▒▒▒▒▒ */


var eiButton = document.querySelector('main article:nth-of-type(2) section:nth-of-type(6) button')
var vallendeSteen = document.querySelector('.stone')
var crashCar2 = document.querySelector('ol li:nth-of-type(2) button img:nth-of-type(1)')

function valmaar() {
    console.log('Oh no..');
    vallendeSteen.classList.add("vallen");

    setTimeout(() => {
        crashCar2.classList.add("crash")
        console.log("Crash in..");
      }, "1500")


    setTimeout(() => {
        vallendeSteen.classList.remove("vallen");
        crashCar2.classList.remove("crash")
        console.log("Delayed for 3 second.");
      }, "3000")

}

eiButton.addEventListener('click', valmaar)