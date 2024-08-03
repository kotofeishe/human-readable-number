module.exports = function toReadable (number) {
    number = number.toString();
  if (number.length == 1) {
    return (countUnits(number));
  }
  else if ((number.length == 2 && number > 9 && number < 20) || (number.length == 2 && number[number.length - 1] == 0 )) {
    return (countTens(number));
  }
  else if (number.length == 2) {
    const ten = countTens(number);
    const unit = countUnits(number);
    return (`${ten} ${unit}`);
  }
  else if (number.length == 3) {    
        const argHundred = number[0];
        const hundred = countUnits(argHundred);
        const unit = countUnits(number);
        const ten = countTens(number);
            if (number[1]==0 && number [2]==0) {
                return(`${hundred} hundred`);
            }
            else if (number[1]==0) {
                return (`${hundred} hundred ${unit}`);
            }
            else if (number[2]==0) {
                return (`${hundred} hundred ${ten}`);
            }
            else if (number[1]==1) {
                return (`${hundred} hundred ${ten}`);
            }
   return (`${hundred} hundred ${ten} ${unit}`);
}
}

const countUnits = (number) => {
    number = number.toString();
    let units = number[number.length - 1];
    switch (units) {
        case '0': 
            units = 'zero';
            return(units);
        case '1': 
            units = 'one';
            return(units);
        case '2':
            units = 'two';
            return(units);
        case '3':
            units = 'three';
            return(units);
        case '4':
            units = 'four';
            return(units);
        case '5':
            units = 'five';
            return(units);
        case '6':
            units = 'six';
            return(units);
        case '7':
            units = 'seven';
            return(units);
        case '8':
            units = 'eight';
            return(units);
        case '9':
            units = 'nine';
            return(units);
      }
      return;
                }

 const countTens = (number) => {
    number = number.toString();
    let tens = number[number.length - 2];
    switch (tens) {
        case '1': 
            switch (number[number.length - 1]) {
                case '0':
                tens = 'ten';
                return(tens);
                case '1':
                tens = 'eleven';
                return(tens);
                case '2':
                tens = 'twelve';
                return(tens);
                case '3':
                tens = 'thirteen';
                return(tens);
                case '4':
                tens = 'fourteen';
                return(tens);
                case '5':
                tens = 'fifteen';
                return(tens);
                case '6':
                tens = 'sixteen';
                return(tens);
                case '7':
                tens = 'seventeen';
                return(tens);
                case '8':
                tens = 'eighteen';
                return(tens);
                case '9':
                tens = 'nineteen';
                return(tens);
            }
        case '2':
        tens = 'twenty'; 
        return(tens);
        case '3':
        tens = 'thirty'; 
        return(tens);
        case '4':
        tens = 'forty'; 
        return(tens);
        case '5':
        tens = 'fifty'; 
        return(tens);
        case '6':
        tens = 'sixty'; 
        return(tens);
        case '7':
        tens = 'seventy'; 
        return(tens);
        case '8':
        tens = 'eighty'; 
        return(tens);
        case '9':
        tens = 'ninety'; 
        return(tens);
    }
 }
    

/*console.log (toReadable(999)) ;*/
