// 1
// Grasshopper - Messi goals function
// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals;

// 2 
// Return Negative
// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
const makeNegative = num => num >= 0 ? -num : num;

// 3
// Grasshopper - Terminal game move function
// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
const move = (position, roll) => position + roll * 2; 


// 4
// Grasshopper - Personalized Message
// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`; 


// 5
// Keep Hydrated!
// https://www.codewars.com/kata/keep-hydrated-1/train/javascript
const litres = time => Math.floor(time / 2);



// 6
// Opposites Attract
// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
const lovefunc = (flower1, flower2) => !!((flower1 + flower2) % 2);
