// Problem Statement #

// Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

// You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

// Write a function to return the maximum number of fruits in both baskets.

function fruits_into_baskets(fruits) {
  let basket1 = fruits[0];
  let basket2;
  let numberOfFruits = 1;
  let maxNumberOfFruits = 0;
  for (let i = 1, basketsUsed = 1; i < fruits.length; i++)
  {
    let fruit = fruits[i]
    
    if (basketsUsed < 2)
    {
      if (fruit === basket1)
        numberOfFruits++;
      else
      {
        numberOfFruits++;
        basket2 = fruit;
        basketsUsed++;
      }
    } else 
    {
      if (basket1 === fruit || basket2 === fruit)
        numberOfFruits++;
      else
      {
        basket1 = basket2;
        basket2 = fruit;
        numberOfFruits = 2;
      } 
    }
    if (numberOfFruits > maxNumberOfFruits)
      maxNumberOfFruits = numberOfFruits;
  }

  return maxNumberOfFruits;
}

console.log(
  `Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])}`
);
console.log(
  `Maximum number of fruits: ${fruits_into_baskets([
    'A',
    'B',
    'C',
    'B',
    'B',
    'C',
  ])}`
);

