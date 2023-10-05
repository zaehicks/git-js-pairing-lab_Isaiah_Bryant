//Code your solutions in this file
// #1
const fiveToOneHundred = () => {
    for (let i = 5; i < 101; i++) {
        console.log(i)
    }
    
}
//fiveToOneHundred();



// #2
const multiplesOfThree = () =>{ 
    for (let i = 1; i <= 100; i++){
      if (i % 3 === 0) {
        console.log(i)
      }
    }
  };

  //multiplesOfThree()


  // #3 
  const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          console.log(i);
        }
      }
    }

//multiplesOfThreeOrFive();

// #4
 const untilNum = (num1) =>{
    for( let i= 1; i <= num1; i++)
    console.log(i)
  }

  //untilNum(10)

  // #5
const multiply = (num1, num2) => {
    return num1 * num2
}

//console.log(multiply(5, 2))


// #6
const add = (num1, num2) => {
    if(num1 === num2) {
    return (num1 + num2) * 3 
} else {
    return num1 + num2
}

} 

//console.log(add(6,6))


// #7
const isNegative = (num) => {
  return num < 0;
}

//console.log(isNegative(10))


// #9
const betweenTwentyAndFourty = (num) => {
  if (num >= 20 && num <= 40) {
    return true;
  } else {
    return false;
  }
}

//console.log(betweenTwentyAndFourty(40))

