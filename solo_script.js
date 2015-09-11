// ! ! !
// Three Bugs

// function MockingbirdObject(name, )

var mockingAtticus = {
  title: "Atticus",
  empNumber: "2405",
  base: "47000",
  review: 3,
};

var mockingJem = {
  title: "Jem",
  empNumber: "62347",
  base: "63500",
  review: 4,
};

var mockingBoo = {
  title: "Boo",
  empNumber: "11435",
  base: "54000",
  review: 3,
};

var mockingScout = {
  title: "Scout",
  empNumber: "6243",
  base: "74750",
  review: 5,
};

// var arrayAtticus = ["Atticus", "2405", "47000", 3];
// var arrayJem = ["Jem", "62347", "63500", 4];
// var arrayBoo = ["Boo", "11435", "54000", 3];
// var arrayScout = ["Scout", "6243", "74750", 5];

var array = [mockingAtticus, mockingJem, mockingBoo, mockingScout];

// console.log(array[0].title);

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){

  // added [i] to move through the other array.
	array[i] = calculateSTI(array[i]);
 

  fancyArray = array[i].join("   ,   ");
 	newEl = document.createElement('li');
	newText = document.createTextNode(fancyArray);
	newEl.appendChild(newText);
	position.appendChild(newEl);
  
}



function calculateSTI(object){
  var newArray = [];

//sets the name
  newArray[0] = object.title;
  // console.log(newArray);

  var employeeNumber = object.empNumber;
  var baseSalary = object.base;
  var reviewScore = object.review;


  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = bonus;
  newArray[2] = parseInt(baseSalary) + (parseInt(baseSalary) * bonus);
  // console.log(newArray[2]);
  newArray[3] = Math.round(baseSalary * bonus);
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  

  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  // console.log(basePercent);
  // base percent should not have been '-1'
  return basePercent;

}



function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    // console.log(incomeAdjustment);
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}