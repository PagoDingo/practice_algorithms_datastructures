function solution (roman) {
    var romans = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    }
    
    var subtractiveRomans = {
      "IV": 4,
      "IX": 9,
      "XL": 40,
      "XC": 90,
      "CD": 400,
      "CM": 900
    }
      
    var total = 0
    var string = roman
  
    for (var i = 0; i < string.length; ++i){
      //add subtractive roman nums;
      if (string.slice(i,i+2) in subtractiveRomans){
        
        subtractiveRoman = string.slice(i,i+2)
        total += subtractiveRomans[subtractiveRoman]
  
        i++
        continue;
      }
      //add reg roman nums;
      total += romans[string[i]]
    }
  
    return total
}