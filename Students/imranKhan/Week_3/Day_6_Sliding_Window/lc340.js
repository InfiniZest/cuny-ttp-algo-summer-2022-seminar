// Problem Statement #

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0;
  let substring = "";

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++)
  {
    if (substring.length >= k)
      return k;

    if (windowEnd !== 0 && substring.includes(str[windowEnd]))
    {
      substring += str[windowEnd];
      substring = substring.substring(windowStart + 1, windowEnd + 1);
      windowStart++;
    } else
    {
      substring += str[windowEnd];
    }
  }

  return length;
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

