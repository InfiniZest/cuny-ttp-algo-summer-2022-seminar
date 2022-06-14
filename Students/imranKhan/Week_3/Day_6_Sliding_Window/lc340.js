// Problem Statement #

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0;
  let substring = "";
  let maxLength = 0;
  let length = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++)
  {
    if (length > maxLength)
      maxLength = length;

    console.log(typeof(str[windowEnd]));
    if (!substring.includes('3'))
    {
      substring += str[windowEnd];
      length++;
    } else
    {
      substring -= str[windowStart];
      windowStart++;
    }

    if (length > k)
      length--;
  }

  return maxLength;
}

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    'araaci',
    2
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    'araaci',
    1
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    'cbbebi',
    3
  )}`
);

