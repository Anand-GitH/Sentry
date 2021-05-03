function dividend(numerator, denominator) {
  var quotient = numerator / denominator;
  if (quotient !== quotient) { throw new Error(numerator + " / " + denominator); }
  return quotient;
} 