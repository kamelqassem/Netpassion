function getHostPortion(){

    
// initialize vars    
var mac = document.getElementById("mac").value.toUpperCase()
var eui = document.getElementById("eui")

/*Check if MAC is reserved*/
if (!isReservedMac(mac)) {
      const FFFE = "FFFE";
      // first half is the first 6 chars + FF
      var firstHalf = mac.substring(0, 7)  + FFFE.substring(0, 2)

      // Second half is the FE + the last hex digits
      var secondHalf = FFFE.substring(2) + mac.substring(7)
      
      var hexa = hexToBinary(firstHalf.charAt(1)) // 00(0)0 ---- 0123

            // extract the seventh bit
      var seventhBit = hexa.charAt(2)

            // invertion of the bit
      var invertedBit = (seventhBit === '0') ? '1' : '0'

      // replace original bit by inverted bit
      hexa = hexa.substring(0, 2) + invertedBit + hexa.substring(3);
      
      var binToHexa =  parseInt(hexa, 2).toString(16)
      
      firstHalf = firstHalf.substring(0, 1) + binToHexa + firstHalf.substring(2);

      var result = firstHalf + ":" + secondHalf

      eui.value = result.toUpperCase()
      
  }
  else{
    window.alert("MAC is reserved, invalid !")
  }
}


function isReservedMac(mac) {
  var countZeros = 0
  var countFs = 0

  for (var i = 0; i < mac.length; i++) {
    if (mac[i] === "0") {
      countZeros++
    } else if (mac[i] === "F") {
      countFs++
    }
  }

  if (countZeros == 12 || countFs == 12) {
    return true
  }
  return false
}

 function hexToBinary(digit) {
      
    var binary = ""

      switch (digit) {
        case "0":
          binary = "0000"
          break
        case "1":
          binary = "0001"
          break;
        case "2":
          binary = "0010"
          break
        case "3":
          binary = "0011"
          break
        case "4":
          binary = "0100"
          break
        case "5":
          binary = "0101"
          break
        case "6":
          binary = "0110"
          break
        case "7":
          binary = "0111"
          break
        case "8":
          binary = "1000"
          break
        case "9":
          binary = "1001"
          break
        case "A":
          binary = "1010"
          break
        case "B":
          binary = "1011"
          break
        case "C":
          binary = "1100"
          break
        case "D":
          binary = "1101"
          break
        case "E":
          binary = "1110"
          break
        case "F":
          binary = "1111"
          break
        default:
          return "Invalid  input"
      }
    
    return binary
  }