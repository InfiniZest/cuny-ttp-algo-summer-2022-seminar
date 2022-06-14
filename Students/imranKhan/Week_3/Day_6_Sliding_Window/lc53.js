// Problem Statement #

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

function max_subarray_size_k(k, arr) {
  let windowStart = 0;
  let maxSum = 0;
  let sum = 0;

  // extend the range in the following loop [window_start, window_end]
  for (let windowEnd = 0, count = 0; ((windowStart + k) <= arr.length); windowEnd++)
  {
    if (count === k)
    {
      if (sum > maxSum)
        maxSum = sum;
      sum -= arr[windowStart];
      windowStart++;
      count--;
    }
    sum += arr[windowEnd];
    count++
  }

  return maxSum;
}

console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(
    3,
    [2, 1, 5, 1, 3, 2]
  )}`
);

console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(
    2,
    [2, 3, 4, 1, 5]
  )}`
);

