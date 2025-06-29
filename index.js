let Dice1 = Math.random();
Dice1 = Math.floor(Dice1 * 6) + 1; // Generates a number between 1 and 6
console.log(Dice1);

let Dice2 = Math.random();
Dice2 = Math.floor(Dice2 * 6) + 1; // Generates a number between 1 and 6
console.log(Dice2);

if (Dice1 > Dice2) {
    console.log("Dice 1 is greater than Dice 2");
} else if (Dice1 < Dice2) {
    console.log("Dice 2 is greater than Dice 1");
} else {
    console.log("Both dice are equal");
} 

// Display the result in the HTML document
document.body.innerHTML = `<h1>Dice Game</h1>
<p>Dice 1: ${Dice1}</p>
<p>Dice 2: ${Dice2}</p>
<p>${Dice1 > Dice2 ? "Dice 1 is greater than Dice 2" : Dice1 < Dice2 ? "Dice 2 is greater than Dice 1" : "Both dice are equal"}</p>
`;



// add images of the dice
const diceImages = [
    './assests/dice-six-faces-one.svg',
    './assests/dice-six-faces-two.svg',
    './assests/dice-six-faces-three.svg',
    './assests/dice-six-faces-four.svg',
    './assests/dice-six-faces-five.svg',
    './assests/dice-six-faces-six.svg'
];

// Display the dice images
const diceImageContainer = document.createElement('div');
diceImageContainer.style.display = 'flex';
diceImageContainer.style.justifyContent = 'center';
diceImageContainer.style.marginTop = '20px';
diceImageContainer.style.gap = '20px';
diceImageContainer.style.flexWrap = 'wrap';

const dice1Image = document.createElement('img');
dice1Image.src = diceImages[Dice1 - 1];
dice1Image.alt = `Dice 1: ${Dice1}`;
dice1Image.style.width = '100px';
dice1Image.style.height = '100px';
diceImageContainer.appendChild(dice1Image);

const dice2Image = document.createElement('img');
dice2Image.src = diceImages[Dice2 - 1];
dice2Image.alt = `Dice 2: ${Dice2}`;
dice2Image.style.width = '100px';
dice2Image.style.height = '100px';
diceImageContainer.appendChild(dice2Image);

document.body.appendChild(diceImageContainer);

// add gap  
const gap = document.createElement('div');
gap.style.height = '50px';
diceImageContainer.appendChild(gap);


// Add a button to roll the dice again
const button = document.createElement('button');
button.innerText = 'Roll Dice Again';
button.onclick = function() {
    location.reload();
};

document.body.appendChild(button);
// Add a style to the body
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.textAlign = 'center';
document.body.style.backgroundColor = '#f4f4f4';
document.body.style.padding = '20px';
// Add a style to the h1
const h1 = document.querySelector('h1');
h1.style.color = '#333';
h1.style.fontSize = '2em';
// Add a style to the paragraphs
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
    p.style.fontSize = '1.5em';
    p.style.color = '#555';
});


// Add a style to the button
button.style.padding = '10px 20px';
button.style.marginTop = '20px';
button.style.fontWeight = 'bold';
button.style.fontSize = '1em';
button.style.backgroundColor = '#28a745';
button.style.color = '#fff';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
button.onmouseover = function() {
    this.style.backgroundColor = '#218838';
};
button.onmouseout = function() {
    this.style.backgroundColor = '#28a745';
};

