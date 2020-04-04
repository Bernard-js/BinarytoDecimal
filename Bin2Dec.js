// the right way to represent a binary number in javascript 
// is by putting '0b' before the binary number itself
function baseConverter(binary){
    var string = binary.toString()
    if(string.length > 8){
        return 'error! the binary number must be 8-bit length' ;
    } else {
        var binaryString = '0b' + string;
        var binaryNumber = Number(binaryString);
        if(isNaN(binaryNumber)){
            return 'error! your input is not a binary number'
        } else {
            return binaryNumber;
        } 
    }
}

