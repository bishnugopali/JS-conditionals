//console.log(3===3 && false && 'chicken');
//output: false
//console.log(3===3 && true && 'chicken');
//output: chicken
//JS interprets results from left
//if it is true prints right


//console.log(3===3 || 'cow' || 'chicken');
//output: true
//console.log(3===4 || 'cow' ||chicken');
//output: cow
//JS interprets results from left 



//function isAdult(age) {
//  //short circuit statement
//  return age &&age>=18;
//  //returns true to console if >=18
//}


function countToFive(start=1){
 // start=start ||1; <- returns 1 if no value is passed
  for(var i=start; i<=5; i++){
    console.log(i);
  }
}

countToFive();
//it can't be used for 0 so use default value instead











