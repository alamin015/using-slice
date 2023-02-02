
let arr = [1,5,6,55,66,23,22,33];

const res = arr.map((item,key) => {
  return (key);
});
console.log(res);



// function findLeapYear(arrOfYears){

//   let newArr = [];
//   let len = arrOfYears.length;
//   for(let i=0; i<len; i++){
//     let myValue = arrOfYears[i];
//     if((myValue % 400 ==0) || (myValue%4==0 && myValue%100 !==0)){
//       newArr.push(myValue);
//     }
//   }
//   return newArr;
// }
// console.log(findLeapYear([2016,2017,2018,2019,2020,2021,2022,2023,2024]));









// function add(a, b){
//     return a + b;
//   }
//   console.log(add("adam" + "eve"));


// function temperatureConverter(valNum) {
//   let temp = (valNum - 32)* (5/9);
//     return temp;
//   }

//  console.log(temperatureConverter(100));


// function average (arrOfMarks){

//    let sum = 0;
//    let len = arrOfMarks.length;
//    for(let i=0; i<len; i++){
//      sum += arrOfMarks[i];
//    }
//    let avg = (sum / len).toFixed(2);
//    return avg;
//  }

// console.log(average([120.25,30]));
// const solution = (letter)=> {
//   let myChar;
//   let lowerLetter = letter.toLowerCase();
//   switch(lowerLetter){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//       myChar = "VOWEL";
//       break;
//     default:
//       myChar = "CONSONANT";
//   }
//   return myChar;
// };




/*
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade
*/

// function findGrade(marks){

//   if(marks >=80){
//     return "A";
//   }else if(marks >= 60){
//     return "B";
//   }else if(marks >= 50){
//     return "C"
//   }else if(marks >= 40){
//     return "D";
//   }else {
//     return "F"
//   }
//   }




// function tallestFriend ( height ) {

//     let output = height[0];

//     let len = height.length;

//     for(let i=0; i<3; i++){
//       if(output < height[i]){
//         output = height[i];
//       }
//     }
//     return output;
//   }

// console.log(tallestFriend([90,45,222]));



