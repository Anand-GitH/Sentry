function dividend(numerator, denominator) {
	
	  var quotient = numerator / denominator;
  
      if(isFinite(quotient)){
	   return quotient;
      }
      else{
	   return 0;
      }
}

function error() {
	var obj = {};
    obj.invalidFunction();	  
}