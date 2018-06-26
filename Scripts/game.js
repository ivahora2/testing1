//Name: Ishratben Rasidbhai Vahora
//Student ID: 300986257
//Date : JUne 25,2018
let app;
(function (app) {
  "use strict";

  // Game Variables
  let stage;
  let canvas;
  let helloLabel, diceNumber_1, diceNumber_2;
  let assetManager;
  let startButton, diceOne, diceTwo;
  var randomNumber_1, randomNumber_2;

  let manifest = [
    { id: "one", src: "/Assets/images/1.png" },
    { id: "two", src: "/Assets/images/2.png" },
    { id: "three", src: "/Assets/images/3.png" },
    { id: "four", src: "/Assets/images/4.png" },
    { id: "five", src: "/Assets/images/5.png" },
    { id: "six", src: "/Assets/images/6.png" },
    { id: "blank", src: "/Assets/images/blank.png" },
    { id: "StartButton", src: "/Assets/images/StartButton.png" }
  ];

  function Init() {
    console.log("App Initializing...");
    assetManager = new createjs.LoadQueue();
    assetManager.installPlugin(createjs.Sound);
    assetManager.on("complete", Start);
    assetManager.loadManifest(manifest);
  }


  /**
   * The Start function initializes the createjs Stage object,
   * sets the framerate and sets up the Main Game Loop to
   * trigger every frame
   *
   */
  function Start() {

    console.log("App Started...");
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);

    Main();
  }

  /**
   * This is the Main Game Loop it runs at 60 fps
   *
   */
  function Update() {
    stage.update();
  }

  /**
   *  This is the main function - place all your code here
   *
   */
  function Main() {
    console.log("Main Function...");


    // start button
    startButton = new createjs.Bitmap(assetManager.getResult("StartButton"));
    startButton.regX = startButton.getBounds().width * 0.5;
    startButton.regY = startButton.getBounds().height * 0.5;
    startButton.x = 320;
    startButton.y = 300;
    stage.addChild(startButton);




    //First Dice
    diceOne = new createjs.Bitmap(assetManager.getResult("blank"));
    diceOne.regX = diceOne.getBounds().width * 0.5;
    diceOne.regY = diceOne.getBounds().height * 0.5;
    diceOne.x = 200;
    diceOne.y = 150;
    stage.addChild(diceOne);

    //Second Dice
    diceTwo = new createjs.Bitmap(assetManager.getResult("blank"));
    diceTwo.regX = diceTwo.getBounds().width * 0.5;
    diceTwo.regY = diceTwo.getBounds().height * 0.5;
    diceTwo.x = 450;
    diceTwo.y = 150;
    stage.addChild(diceTwo);

    //Label for the dice_1 value
    diceNumber_1 = new createjs.Text("Blank", "20px Consolas", "#000000");
    diceNumber_1.regX = diceNumber_1.getBounds().width * 0.5;
    diceNumber_1.regY = diceNumber_1.getBounds().height * 0.5;
    diceNumber_1.x = 200;
    diceNumber_1.y = 300;
    stage.addChild(diceNumber_1);

    //Label for the dice_2 value
    diceNumber_2 = new createjs.Text("Blank", "20px Consolas", "#000000");
    diceNumber_2.regX = diceNumber_2.getBounds().width * 0.5;
    diceNumber_2.regY = diceNumber_2.getBounds().height * 0.5;
    diceNumber_2.x = 450;
    diceNumber_2.y = 300;
    stage.addChild(diceNumber_2);



    // start button listeners
    startButton.addEventListener("click", function () {
      console.log("Start Button Clicked");

      //Generating random numbers for dice
      randomNumber_1 = Math.floor((Math.random() * 6) + 1);
      randomNumber_2 = Math.floor((Math.random() * 6) + 1);

      //Selecting Dice one randomly
      switch (randomNumber_1) {
        case 1:
          diceOne = new createjs.Bitmap(assetManager.getResult("one"));
          stage.removeChild(diceNumber_1);
          diceNumber_1 = new createjs.Text("One", "20px Consolas", "#000000");
          break;

        case 2:
          diceOne = new createjs.Bitmap(assetManager.getResult("two"));
          stage.removeChild(diceNumber_1);
          diceNumber_1 = new createjs.Text("Two", "20px Consolas", "#000000");
          break;

        case 3:
          diceOne = new createjs.Bitmap(assetManager.getResult("three"));
          stage.removeChild(diceNumber_1);
          diceNumber_1 = new createjs.Text("Three", "20px Consolas", "#000000");
          break;

        case 4:
          diceOne = new createjs.Bitmap(assetManager.getResult("four"));
          stage.removeChild(diceNumber_1);
          diceNumber_1 = new createjs.Text("Four", "20px Consolas", "#000000");
          break;

        case 5:
          diceOne = new createjs.Bitmap(assetManager.getResult("five"));
          stage.removeChild(diceNumber_1);
          diceNumber_1 = new createjs.Text("Five", "20px Consolas", "#000000");
          break;

        case 6:
          diceOne = new createjs.Bitmap(assetManager.getResult("six"));
          stage.removeChild(diceNumber_1);
          diceNumber_1 = new createjs.Text("Six", "20px Consolas", "#000000");
          break;
      }

      //Selecting Dice two randomly
      switch (randomNumber_2) {
        case 1:
          diceTwo = new createjs.Bitmap(assetManager.getResult("one"));
          stage.removeChild(diceNumber_2);
          diceNumber_2 = new createjs.Text("One", "20px Consolas", "#000000");
          break;

        case 2:
          diceTwo = new createjs.Bitmap(assetManager.getResult("two"));
          stage.removeChild(diceNumber_2);
          diceNumber_2 = new createjs.Text("Two", "20px Consolas", "#000000");
          break;

        case 3:
          diceTwo = new createjs.Bitmap(assetManager.getResult("three"));
          stage.removeChild(diceNumber_2);
          diceNumber_2 = new createjs.Text("Three", "20px Consolas", "#000000");
          break;

        case 4:
          diceTwo = new createjs.Bitmap(assetManager.getResult("four"));
          stage.removeChild(diceNumber_2);
          diceNumber_2 = new createjs.Text("Four", "20px Consolas", "#000000");
          break;

        case 5:
          diceTwo = new createjs.Bitmap(assetManager.getResult("five"));
          stage.removeChild(diceNumber_2);
          diceNumber_2 = new createjs.Text("Five", "20px Consolas", "#000000");
          break;

        case 6:
          diceTwo = new createjs.Bitmap(assetManager.getResult("six"));
          stage.removeChild(diceNumber_2);
          diceNumber_2 = new createjs.Text("Six", "20px Consolas", "#000000");
          break;

      }

      //Adding DiceOne Image
      diceOne.regX = diceOne.getBounds().width * 0.5;
      diceOne.regY = diceOne.getBounds().height * 0.5;
      diceOne.x = 200;
      diceOne.y = 150;
      stage.addChild(diceOne);

      //Adding Dice Two Image
      diceTwo.regX = diceTwo.getBounds().width * 0.5;
      diceTwo.regY = diceTwo.getBounds().height * 0.5;
      diceTwo.x = 450;
      diceTwo.y = 150;
      stage.addChild(diceTwo);

      //Label for the dice_1 value  
      diceNumber_1.regX = diceNumber_1.getBounds().width * 0.5;
      diceNumber_1.regY = diceNumber_1.getBounds().height * 0.5;
      diceNumber_1.x = 200;
      diceNumber_1.y = 300;
      stage.addChild(diceNumber_1);


      //Label for the dice_2 value
      diceNumber_2.regX = diceNumber_2.getBounds().width * 0.5;
      diceNumber_2.regY = diceNumber_2.getBounds().height * 0.5;
      diceNumber_2.x = 450;
      diceNumber_2.y = 300;
      stage.addChild(diceNumber_2);


    });

    startButton.addEventListener("mouseover", function (event) {
      event.currentTarget.alpha = 0.7;
    });

    startButton.addEventListener("mouseout", function (event) {
      event.currentTarget.alpha = 1.0;
    });
  }

  window.addEventListener("load", Init);
})(app | (app = {}));
