console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1
function makeMiddleEarth() {
  // X create a section tag with an id of middle-earth
  // x inside, add each land as an article tag
  // x inside each article tag include an h1 with the name of the land
  // x  append middle-earth to your document body
  var midEarth = document.createElement("section");
  midEarth.id = 'middle-earth';

  for (var i =0; i<lands.length;i++) {
    var landArticle = document.createElement("article");
    var landHeader = document.createElement("h1");

    landHeader.append(lands[i]);
    landArticle.append(landHeader);
    midEarth.appendChild(landArticle);
  }
    body.appendChild(midEarth);
}
makeMiddleEarth();
// Part 2
function makeHobbits() {
  // give each hobbit a class of hobbit
  var hobbitList = document.createElement('ul');
  var theShire = document.querySelector("article");
  for (var i =0; i< hobbits.length;i++) {
  var hobbitItem = document.createElement('li');
    hobbitItem.append(hobbits[i]);
    hobbitItem.class = 'hobbit';
    hobbitList.append(hobbitItem);
  }
  theShire.appendChild(hobbitList);
}
makeHobbits();

// Part 3
function keepItSecretKeepItSafe() {
  var ring = document.createElement("div");
  ring.id = 'the-ring';
  ring.setAttribute ('class','magic-imbued-jewelry');
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  ring.addEventListener("click",nazgulScreech);
  var frodo = document.querySelector('li');
  frodo.appendChild(ring);
  // add the ring as a child of Frodo
}
keepItSecretKeepItSafe();

// Part 4
function makeBuddies() {
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside = document.createElement('aside');        
  var buddyList = document.createElement('ul');      
   nodeList = document.querySelectorAll("article");   //grabs array of articles (the shire,rivendell, and mordor)
   var riven = nodeList[1];                           //grabs [1] rivendell from above array and puts into riven variable
//console.log(aside);
  for(var i=0;i<buddies.length; i++){
    var buddyItem =document.createElement('li');    
    buddyItem.append(buddies[i]);                     //inserts each "buddy" into buddyItem li during loop
    buddyList.append(buddyItem);                      //inserts buddyItem into buddyList each loop
    }
  aside.append(buddyList);                            //inserts buddyList (ul) into aside
  riven.appendChild(aside);                           //inserts aside w/ ul into revendale article
}
makeBuddies();

// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
//  var arag = document.createTextNode('Aragorn');      //creates Aragorn as arag in text form within the document
  nodeList = document.querySelectorAll('li');         //obtains all list items
 // console.log(nodeList);
  nodeList[7].textContent='Aragorn';                  //changes #7 to Aragorn
  }
beautifulStranger();

// Part 6
function leaveTheShire() {
  //make a hobbit group 
  //append hobbits to Rivendell(an aside)
// var theShire = document.querySelectorAll('ul')[0]; //finds all inhabiting the shire as an unordered list
var allPeople = document.querySelectorAll('li');
var theShire= [];
for (var i = 0; i< 4;i++) {
  theShire[i]=allPeople[i];
}
console.log(theShire);
var rivendell = document.querySelectorAll('ul')[1];   //grabs rivendell's unordered list
console.log(rivendell);
for(i=0;i<theShire.length;i++){
  rivendell.append(theShire[i]);                      //itterates through theShire inhabitants and  appends them to rivendell
}
}
leaveTheShire();

// Part 7
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
