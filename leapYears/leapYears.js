const leapYears = function(year) {
  let leapyear;
  if (year%4===0){
    if (year%100===0 && year%400!==0){
      leapyear=false;
    } else {
      leapyear=true;
    }
  } else {
    leapyear=false;
  }
  return leapyear
}

module.exports = leapYears
