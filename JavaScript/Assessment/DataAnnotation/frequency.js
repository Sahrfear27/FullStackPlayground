function digitFrequency(n) {
  let frequency_map = {};

  while (n > 0) {
    let digit = n % 10;

    if (!(digit in frequency_map)) {
      frequency_map[digit] = 1;
    } else {
      frequency_map[digit] += 1;
    }

    n = Math.floor(n / 10);
  }

  return frequency_map;
}

// Example usage:
console.log(digitFrequency(1123451));
// Output: { '1': 3, '2': 1, '3': 1, '4': 1, '5': 1 }
