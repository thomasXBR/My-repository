let sin30 = 0.5;
let sin45 = Math.sqrt(2)/2;
let sin60 = Math.sqrt(3)/2;

let cos30 = Math.sqrt(3)/2;
let cos45 = Math.sqrt(2)/2;
let cos60 = 0.5;

let tan30 = Math.sqrt(3)/3;
let tan45 = 1;
let tan60 = Math.sqrt(3);


//CALCULATE LENGTH GIVEN A NOTABLE ANGLE

function calculateHypHasOppAngle30() { 
  let catOp = Number(prompt("Opposite side length:")); 
  return catOp/sin30; 
} 

function calculateHypHasAdjAngle30() { 
  let catAdj = Number(prompt("Adjascent side length:")); 
  return catAdj/cos30; 
}

function calculateAdjHasOppAngle30() { 
  let catOp = Number(prompt("Opposite side length:")); 
  return catOp/tan30; 
}

function calculateOppHasAdjAngle30() { 
  let catAdj = Number(prompt("Adjacent side length:")); 
  return catAdj*tan30; 
} 

function calculateOppHasHypAngle30() { 
  let hip = Number(prompt("Hypotenuse length:")); 
  return hip*sin30; 
}

function calculateAdjHasHypAngle30() { 
  let  hip = Number(prompt("Hypotenuse length:")); 
  return hip*cos30; 
}


function calculateHypHasOppAngle45() {
  let catOp = Number(prompt("Opposite side length:"));
  return catOp/sin45;
}

function calculateHypHasAdjAngle45() {
  let catAdj = Number(prompt("Adjacent side length:"));
  return catAdj/cos45;
}

function calculateAdjHasOppAngle45() {
  let catOp = Number(prompt("Opposite side length:"));
  return catOp/tan45;
}

function calculateOppHasAdjAngle45() {
  let catAdj = Number(prompt("Adjacent side length:"));
  return catAdj*tan45;
}

function calculateOppHasHypAngle45() {
  let hip = Number(prompt("Hypotenuse:"));
  return hip*sin45;
}

function calculateAdjHasHypAngle45() {
  let hip = Number(prompt("Hypotenuse:"));
  return hip*cos45;
}


function calculateHypHasOppAngle60() {
  let catOp = Number(promprt("Opposite side length:"));
  return catOp/sin60;
}

function calculateHypHasAdjAngle60() {
  let catAdj = Number(prompt("Adjacent side length:"));
  return catAdj/cos60;
}

function calculateAdjHasOppAngle60() {
  let catOp = Number(prompt("Opposite side length:"));
  return catOp/tan60;
}

function calculateOppHasAdjAngle60() {
  let catAdj = Number(prompt("Adjacent side length:"));
  return catAdj*tan60;
}

function calculateOppHasHypAngle60() {
  let hip = Number(prompt("Hypotenuse:"));
  return hip*sin60;
}

function calculateAdjHasHypAngle60() {
  let hip = Number(prompt("Hypotenuse:"));
  return hip*cos60;
}

//CALCULATE SIN/COS/TAN

function calculateSin() {
  let catOp = Number(prompt("Opposite side length:"));
  let hip = Number(prompt("Hypotenuse:"));

  return catOp/hip;
}

function calculateCos() {
  let catAdj = Number(prompt("Adjacent side length:"));
  let hip = Number(prompt("Hypotenuse:"));

  return catAdj/hip;
}

function calculateTan() {
  let catOp = Number(prompt("Opposite side length:"));
  let catAdj = Number(prompt("Adjacent side length:"));

  return catOp/catAdj;
}

function calculateAngle(finalAnswer, xquestion) {
  let angleInRadians;

//DETERMINAR QUAL FUNÇÃO TRIGONOMÉTRICA INVERSA USAR
  if (xquestion === "sin") {
      angleInRadians = Math.asin(finalAnswer);
  } else if (ratioType === "cos") {
      angleInRadians = Math.acos(finalAnswer);
  } else if (ratioType === "tan") {
      angleInRadians = Math.atan(finalAnswer);
  } else {
      throw new Error("Invalid ratio type. Use 'sin', 'cos', or 'tan'.");
  }

  //RADIANS -> DEGREES CONVERTER
  const angleInDegrees = angleInRadians * (180 / Math.PI);

  return angleInDegrees;
}


console.log(`Opposite side = 'opp'
Adjacent side = 'adj'
Hypotenuse = 'hyp'
Sin = 'sen'
Cossine = 'cos'
Tangent = 'tan'`);

let xquestion = prompt("What would you like to calculate?");
let lengthType = prompt("What length do you already have? (If you are calculating sin/cos/tan skip this question)");
let angle = Number(prompt("What's the value of the theta(in degrees)? (if it's not notable skip this question)"));
let angleQuestion;
let angleValue;
let roundValue;
let finalAnswer;

if(xquestion === 'hyp' && lengthType === 'opp' && angle === 30) {
  finalAnswer = calculateHypHasOppAngle30();
  console.log(finalAnswer);
} else if (xquestion === 'hyp' && lengthType === 'adj' && angle === 30) {
  finalAnswer = calculateHypHasAdjAngle30();
  console.log(finalAnswer);
} else if (xquestion === 'adj' && lengthType === 'opp' && angle === 30) {
  finalAnswer = calculateAdjHasOppAngle30();
  console.log(finalAnswer);
} else if (xquestion === 'opp' && lengthType === 'adj' && angle === 30) {
  finalAnswer = calculateOppHasAdjAngle30();
  console.log(finalAnswer);
} else if (xquestion === 'opp' && lengthType === 'hyp' && angle === 30) {
  finalAnswer = calculateOppHasHypAngle30();
  console.log(finalAnswer);
} else if (xquestion === 'adj' === lengthType === 'hyp' && angle === 30) {
  finalAnswer = calculateAdjHasHypAngle30();
  console.log(finalAnswer);
}

else if (xquestion === 'hyp' && lengthType === 'opp' && angle === 45) {
  finalAnswer = calculateHypHasOppAngle45();
  console.log(finalAnswer);
} else if (xquestion === 'hyp' && lengthType === 'adj' && angle === 45) {
  finalAnswer = calculateHypHasAdjAngle45();
  console.log(finalAnswer);
} else if (xquestion === 'adj' && lengthType === 'opp' && angle === 45) {
  finalAnswer = calculateAdjHasOppAngle45();
  console.log(finalAnswer);
} else if (xquestion === 'opp' && lengthType === 'adj' && angle === 45) {
  finalAnswer = calculateOppHasAdjAngle45();
  console.log(finalAnswer);
} else if (xquestion === 'opp' && lengthType === 'hyp' && angle === 45) {
  finalAnswer = calculateOppHasHypAngle45();
  console.log(finalAnswer);
} else if (xquestion === 'adj' === lengthType === 'hyp' && angle === 45) {
  finalAnswer = calculateAdjHasHypAngle45();
  console.log(finalAnswer);
}

else if (xquestion === 'hyp' && lengthType === 'opp' && angle === 60) {
  finalAnswer = calculateHypHasOppAngle60();
  console.log(finalAnswer);
} else if (xquestion === 'hyp' && lengthType === 'adj' && angle === 60) {
  finalAnswer = calculateHypHasAdjAngle60();
  console.log(finalAnswer);
} else if (xquestion === 'adj' && lengthType === 'opp' && angle === 60) {
  finalAnswer = calculateAdjHasOppAngle60();
  console.log(finalAnswer);
} else if (xquestion === 'opp' && lengthType === 'adj' && angle === 60) {
  finalAnswer = calculateOppHasAdjAngle60();
  console.log(finalAnswer);
} else if (xquestion === 'opp' && lengthType === 'hyp' && angle === 60) {
  finalAnswer = calculateOppHasHypAngle60();
  console.log(finalAnswer);
} else if (xquestion === 'adj' === lengthType === 'hyp' && angle === 60) {
  finalAnswer = calculateAdjHasHypAngle60();
  console.log(finalAnswer);

} else if (xquestion === 'sin') {
  finalAnswer = calculateSin();
  let angleQuestion = prompt('Would you like to know the value of theta? y/n');
  if (angleQuestion === 'y') {
    angleValue = calculateAngle(finalAnswer, xquestion);
    let roundValue = prompt('Would you like to round up the value? y/n');
    if (roundValue === 'y') {
      console.log((`Theta(rounded value): `,Math.round(angleValue)));
    } else {
      console.log(`Theta: `,angleValue);
    }
  }
  console.log(`Sin: `,finalAnswer);

} else if (xquestion === 'cos') {
  finalAnswer = calculateCos();
  let angleQuestion = prompt('Would you like to know the value of theta? y/n');
  if (angleQuestion === 'y') {
    angleValue = calculateAngle(finalAnswer, xquestion);
    let roundValue = prompt('Would you like to round up the value? y/n');
    if (roundValue === 'y') {
      console.log((`Theta(rounded value): `,Math.round(angleValue)));
    } else {
      console.log(`Theta: `,angleValue);
    }
  }
  console.log(`Cos: `,finalAnswer);

} else if (xquestion === 'tan') {
  finalAnswer = calculateTan();
  let angleQuestion = prompt('Would you like to know the value of theta? y/n');
  if (angleQuestion === 'y') {
    angleValue = calculateAngle(finalAnswer, xquestion);
    let roundValue = prompt('Would you like to round up the value? y/n');
    if (roundValue === 'y') {
      console.log((`Theta(rounded value): `,Math.round(angleValue)));
    } else {
      console.log(`Theta: `,angleValue);
    }
  }
  console.log(`Tan: `,finalAnswer);
}

else {
  console.log("Invalid or insuficient values were incerted :/");
}