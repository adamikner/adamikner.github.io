var button;

var newButton;

var fillArray = [];

var notesArray = ["c", "d", "e", "f", "g", "a", "b"];

var fillColor = "yellow";

var noteIndex = 0;

var section0 = 130;
var section1 = 210;
var section2 = 290;
var section3 = 370;
var section4 = 450;
var section5 = 530;
var section6 = 610;

var currentSection = 0;

var playPrevMills = 0;
var playInterval = 2000;
var playCounter = 0;

var game = false;
var checking = false;
var doneChecking = false;

var playerArray = [];

var lost = false;
var win = true;

var PlayCSound = false;
var CSoundPlayed = false;
var PlayDSound = false;
var DSoundPlayed = false;
var PlayESound = false;
var ESoundPlayed = false;
var PlayFSound = false;
var FSoundPlayed = false;
var PlayGSound = false;
var GSoundPlayed = false;
var PlayASound = false;
var ASoundPlayed = false;
var PlayBSound = false;
var BSoundPlayed = false;

var gameLength = 0;

var randomLetter;


function preload() {
    CSound = loadSound('sounds/C.mp3');
    DSound = loadSound('sounds/D.mp3');
    ESound = loadSound('sounds/E.mp3');
    FSound = loadSound('sounds/F.mp3');
    GSound = loadSound('sounds/G.mp3');
    ASound = loadSound('sounds/A.mp3');
    BSound = loadSound('sounds/B.mp3');
}

function setup() {
    var canvas = createCanvas(660, 450);
    canvas.parent('piano');
    
    button = createButton('Start');
    
    button.position(606, 450);
    button.parent('piano');
   
    
    button.mousePressed(startGame);
    
   

    newButton = createButton('New Game');
    newButton.position(330, 450);
    newButton.mousePressed(newGame);
    newButton.hide();

}

function draw() {
    background(117, 129, 242);

    if (game == true) {
        button.hide();
        newButton.hide();
        playerArray = [];

        var currentLetter = fillArray[playCounter];
        console.log(currentLetter);


        if (millis() - playPrevMills > playInterval) {
            playCounter++;
            playPrevMills = millis();

            if (playCounter >= fillArray.length) {
                playCounter = 0;
                game = false;
                checking = true;
            }
        }
    } else {
        //    
    }



    //White Keys

    fill(255);

    //C
    if (currentLetter == 'c') {
        fill(fillColor);
        PlayCSound = true;

    } else {
        fill(255);
        PlayCSound = false;
    }
    rect(50, 75, 80, 300);

    //D
    if (currentLetter == 'd') {
        fill(fillColor);
        PlayDSound = true;
    } else {
        fill(255);
        PlayDSound = false;
    }
    rect(130, 75, 80, 300);

    //E
    if (currentLetter == 'e') {
        fill(fillColor);
        PlayESound = true;
    } else {
        fill(255);
        PlayESound = false;
    }
    rect(210, 75, 80, 300);

    //F
    if (currentLetter == 'f') {
        fill(fillColor);
        PlayFSound = true;
    } else {
        fill(255);
        PlayFSound = false;
    }
    rect(290, 75, 80, 300);

    //G
    if (currentLetter == 'g') {
        fill(fillColor);
        PlayGSound = true;
    } else {
        fill(255);
        PlayGSound = false;
    }
    rect(370, 75, 80, 300);

    //A
    if (currentLetter == 'a') {
        fill(fillColor);
        PlayASound = true;
    } else {
        fill(255);
        PlayASound = false;
    }
    rect(450, 75, 80, 300);

    //B
    if (currentLetter == 'b') {
        fill(fillColor);
        PlayBSound = true;
    } else {
        fill(255);
        PlayBSound = false;
    }
    rect(530, 75, 80, 300);

    //Sounds//////////////////////////


    if (PlayCSound == true && CSoundPlayed == false) {
        PlayCSound = false;
        CSoundPlayed = true;
        CSound.play();

    } else if (PlayCSound == false && CSoundPlayed == true) {
        CSound.stop();
        CSoundPlayed = false;


    }

    if (PlayDSound == true && DSoundPlayed == false) {
        PlayDSound = false;
        DSoundPlayed = true;
        DSound.play();
        console.log("d");
    } else if (PlayDSound == false && DSoundPlayed == true) {
        DSound.stop();
        DSoundPlayed = false;


    }

    if (PlayESound == true && ESoundPlayed == false) {
        PlayESound = false;
        ESoundPlayed = true;
        ESound.play();
    } else if (PlayESound == false && ESoundPlayed == true) {
        ESound.stop();
        ESoundPlayed = false;

    }

    if (PlayFSound == true && FSoundPlayed == false) {
        PlayFSound = false;
        FSoundPlayed = true;
        FSound.play();
    } else if (PlayFSound == false && FSoundPlayed == true) {
        FSound.stop();
        FSoundPlayed = false;


    }

    if (PlayGSound == true && GSoundPlayed == false) {
        PlayGSound = false;
        GSoundPlayed = true;
        GSound.play();
    } else if (PlayGSound == false && GSoundPlayed == true) {
        GSound.stop();
        GSoundPlayed = false;


    }

    if (PlayASound == true && ASoundPlayed == false) {
        PlayASound = false;
        ASoundPlayed = true;
        ASound.play();
    } else if (PlayASound == false && ASoundPlayed == true) {
        ASound.stop();
        ASoundPlayed = false;


    }

    if (PlayBSound == true && BSoundPlayed == false) {
        PlayBSound = false;
        BSoundPlayed = true;
        BSound.play();
    } else if (PlayBSound == false && BSoundPlayed == true) {
        BSound.stop();
        BSoundPlayed = false;


    }




    //////////////////////////////////////////

    //Black Keys
    fill(0);
    rect(110, 75, 40, 210);
    rect(190, 75, 40, 210);
    rect(350, 75, 40, 210);
    rect(430, 75, 40, 210);
    rect(510, 75, 40, 210);

    //Text
    textSize(32);
    text("C", 80, 325, 400, 250);
    text("D", 160, 325, 400, 250);
    text("E", 240, 325, 400, 250);
    text("F", 320, 325, 400, 250);
    text("G", 400, 325, 400, 250);
    text("A", 480, 325, 400, 250);
    text("B", 560, 325, 400, 250);

    if (mouseX > 0 && mouseX <= section0) {

        currentSection = 0;

        if (checking == true) {
            fill(0, 0, 0, 125);
            rect(50, 75, 80, 300);
        }



    } else if (mouseX > section0 && mouseX <= section1) {
        currentSection = 1;

        if (checking == true) {
            fill(0, 0, 0, 125);
            rect(130, 75, 80, 300);
        }

    } else if (mouseX > section1 && mouseX <= section2) {
        currentSection = 2;
        if (checking == true) {
            fill(0, 0, 0, 125);
            rect(210, 75, 80, 300);
        }
    } else if (mouseX > section2 && mouseX <= section3) {
        currentSection = 3;
        if (checking == true) {
            fill(0, 0, 0, 125);
            rect(290, 75, 80, 300);
        }
    } else if (mouseX > section3 && mouseX <= section4) {
        currentSection = 4;
        if (checking == true) {
            fill(0, 0, 0, 125);
            rect(370, 75, 80, 300);
        }
    } else if (mouseX > section4 && mouseX <= section5) {
        currentSection = 5;
        if (checking == true) {
            fill(0, 0, 0, 125);
            rect(450, 75, 80, 300);
        }
    } else if (mouseX > section5 && mouseX <= width) {
        currentSection = 6;
        if (checking == true) {
            fill(0, 0, 0, 125);
            rect(530, 75, 80, 300);
        }
    }

    if (doneChecking == true && lost == true && win == false && game == false) {

        text("LOSE!", 295, 20, 400, 250);
        button.show();
        checking = false;


    }

    if (doneChecking == true && win == true && lost == false && game == false) {
        text("WIN!", 295, 20, 400, 250);
        button.show();
        checking = false;


    }

}


function startGame() {
    game = true;
    doneChecking = false;
    checking = false;
    lost = false;
    win = false;
    playerArray = [];
    fillArray = [];

    playPrevMills = millis();

    gameLength = int(random(1, 11));
    console.log(gameLength);

    for (var i = 0; i < gameLength; i++) {
        var randomLetter = 0;
        //console.log(notesArray[randomLetter]);
        if (i > 0) {
            console.log("in here");
            randomLetter = int(random(notesArray.length));
            while (fillArray[i - 1] == notesArray[randomLetter]) {
                randomLetter = int(random(notesArray.length));
                console.log("generate new number " + notesArray[randomLetter]);

            }

            fillArray.push(notesArray[randomLetter]);

        } else {
            randomLetter = int(random(notesArray.length));

            fillArray.push(notesArray[randomLetter]);
        }


    }

    console.log(fillArray);
}

function newGame() {

    console.log("New Game");
    doneChecking = false;
    lost = false;
    win = false;
    game = true;

    fillArray = [];

}


function mousePressed() {
    if (checking == true) {
        // you can start selecting keys

        if (currentSection == 0) {
            playerArray.push("c");
            CSound.play();
        } else if (currentSection == 1) {
            playerArray.push("d");
            DSound.play();
        } else if (currentSection == 2) {
            playerArray.push("e");
            ESound.play();
        } else if (currentSection == 3) {
            playerArray.push("f");
            FSound.play();
        } else if (currentSection == 4) {
            playerArray.push("g");
            GSound.play();
        } else if (currentSection == 5) {
            playerArray.push("a");
            ASound.play();
        } else if (currentSection == 6) {
            playerArray.push("b");
            BSound.play();
        }




        console.log(currentSection);
        console.log(playerArray);


        if (playerArray.length == fillArray.length) {

            //            for loop through fillArray vs playerArray


            for (var i = 0; i < fillArray.length; i++) {

                if (fillArray[i] != playerArray[i]) {
                    lost = true;
                    win = false;
                    break;
                } else {
                    win = true;
                    lost = false;

                }
            }

            doneChecking = true;
        }
    }

}