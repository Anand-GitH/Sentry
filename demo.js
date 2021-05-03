function dividend(numerator, denominator) {
	
	  var quotient = numerator / denominator;
  
      if(isFinite(quotient)){
	   return quotient;
      }
      else{
	   throw new Error(numerator + " / " + denominator);
      }
} 