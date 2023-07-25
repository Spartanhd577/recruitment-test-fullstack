// Desde la siguiente matriz, invierta, pero mantenga los caracteres especiales en la misma posición.
// [n,2,&,a,l,9,$,q,47,i,a,j,b,z,%,8] 
// En este caso:
// & debe estar en la posición 2
// $ debe estar en la posición 6
// % debe estar en la posición 14
// La solución debe ser dinámica (si la posición del carácter especial cambió, manténgala igual).

function invertWithSpecialChars(arr) {
  const specialCharsPositions = [];
  const specialChars = [];
  
  // Separate special characters and their positions from the array
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string' && arr[i].length === 1 && !arr[i].match(/[a-zA-Z0-9]/)) {
      specialCharsPositions.push(i);
      specialChars.push(arr[i]);
    }
  }

  // Reverse the non-special characters in the array
  const nonSpecialChars = arr.filter(item => typeof item === 'string' && item.length === 1 && item.match(/[a-zA-Z0-9]/));
  const reversedNonSpecialChars = nonSpecialChars.reverse();
  
  // Merge the reversed non-special characters and the special characters back into the original array
  for (let i = 0; i < specialCharsPositions.length; i++) {
    const pos = specialCharsPositions[i];
    reversedNonSpecialChars.splice(pos, 0, specialChars[i]);
  }

  return reversedNonSpecialChars;
}

const inputArray = ['n', '2', '&', 'a', 'l', '9', '$', 'q', '47', 'i', 'a', 'j', 'b', 'z', '%', '8'];
const outputArray = invertWithSpecialChars(inputArray);
console.log(outputArray);
