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
  

  // #3 
  const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          console.log(i);
        }
      }
    }
    
multiplesOfThreeOrFive();

 // //multiplesOfThree()

 const untilNum = (num1) =>{
    for( let i= 1; i <= num1; i++)
    console.log(i)
  }

  untilNum(10)
  