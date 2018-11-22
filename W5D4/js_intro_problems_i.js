function madLib(verb, adj, noun) {
  return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`
}

// console.log(madLib('make', 'best', 'guac'));

// function isSubstring(searchString, subString) {
//   if (searchString.indexOf(subString) === -1) {
//     return false;
//   } else {
//     return true;
//   }
// }

function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

// console.log(isSubstring("time to program", "time"));
// console.log(isSubstring("Jump for joy", "joys"));

function fizzBuzz(array) {
  const result = []
  for(i = 0; i < array.length; i++) {
    if (array[i] % 15 === 0) {
      continue;
    } else if (array[i] % 3 === 0 || array[i] % 5 === 0) {
      result.push(array[i]);
    }
  }
  return result;
}

// console.log(fizzBuzz([1,15,4,3,9,45]));

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// console.log(isPrime(2));
// console.log(isPrime(10));
// console.log(isPrime(15485863));

function sumOfNPrimes(n) {
  const nPrimes = [];
  let potentialPrime = 2;
  function firstNPrimes() {
    while (nPrimes.length < n) {
      if (isPrime(potentialPrime)) {
        nPrimes.push(potentialPrime);
        potentialPrime += 1;
      } else {
        potentialPrime += 1;
      }
    }
  }

  firstNPrimes();
  let sum = 0;
  nPrimes.forEach(num => {
    sum += num;
  });

  return sum;
}

// console.log(sumOfNPrimes(4));
