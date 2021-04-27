//get link for API
//document .ready function
//onclick for searching info
//be able to input users search in to API
//populate the data
//set a variable for the user input
//fetch the data
//async await to grab datga
//change the data to json data
//prevent default info from populating
//select the space data should populate to the DOM 
//************************************************************************************** */
$(() => {

  //get info from form
  //2 arguments for on submit
  //call function in form above to get pokedata
  $('form').on("submit", (event) => {
    event.preventDefault()

    //grab user inputs from html names and console log-either nName or ID
    const userInput = $('input[type="text"]').val()
    console.log(userInput);

    //EXTRA var keepType;
    // colorCnt;
    //get type of pokemone. 
    //type = pokemon id number. 
    //read through array of colors and change background to a color in array when type changes
    //BUG:code does does not recognize when type stays the same
    //array of colors created
    //function to change background created

    //create asynchronus  function that will wait 

    async function getPokeData() {
      //get user input by changing the "1" to a variable using back tic
      // console.log("inside async function")
      //declare variables for newColor function
      colorCnt = 0;
      
      //goes to pokemon api and retrieves data(not in json format)
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)

      //change to json data, wait annd then console log data
      const data = await response.json()
      //jquery to write to asign
      $("#pokeName").html(data.forms[0].name);
      $("#pokeType").html(data.types[0].type.name);
      $("#pokeNum").html(data.id);

      //assign current type to keep varialbe
      var lastType = " ";
      var keepType = data.types[0].type.name;
      console.log(keepType + " keeptype")
    
      // var pokeTypes = ["bug", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "grass",
      //   "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"]

      //loop throught the array types and change color
      //for(cntType=0; cntType <= pokeTypes.length; cntTypes++){
      
      if (keepType != lastType ) {
      //when submit is clicked, everything in the id info (onsubmit)background will change to color(red)
        $(".info").css("background-color", randomColors())

        console.log("lastType after color change" + lastType)
        console.log("keepType after color change" + keepType)
        lastType = keepType;
        console.log("lastType after assigned to keeptype" + lastType)
       
      }
      else {
        console.log("inside else")
        return;
      }
      

    }
    //call getpokedata function to enter poke' number/id
    getPokeData()

    var randomColors = () => {
      let red = Math.floor(Math.random() * 256);
      let purple = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      //"rgb(23,240,63") form and returns to above variable randomCoors()
      return "rgb(" + red + ", " + purple + "," + blue + ")"
      //it is standard to include the jquery outside of the javascript
    }
    //create array of colors
    // var pokeColor = ["red", "green", "tan", "turquoise", "violet", "blue", "orange", "yellow", "magenta", "pink",
    //   "brown", "purple", "white", "gold", "burgundy", "ivory", "gray", "lime"]

    // //function to change color of screen when "get poke data button pressed"
    // var newColor = () => {
    //   //loop through the array of colors
    //   for (i=1; i <= pokeColor.length; i++){
    //   //check last type and current type
    //   if (keepType == lastType)
    //     break;
    //   //increment color counter, console.log color cntl and get a color
    //   colorCnt += 1
    //   console.log("colorCnt")

    //   if (colorCnt >= pokeColor.length) {
    //     colorCnt = 0
    //   }
    //   //assign background color to current screen and return to get pokedata to set last type field
    //   document.getElementsByClassName("info").style = "background-color:" + pokeColor[colorCnt] + ";";
    //   console.log("after document get ")

    // }

    // }
  })
})



