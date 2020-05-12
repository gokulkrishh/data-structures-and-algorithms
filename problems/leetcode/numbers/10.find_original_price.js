/*  Problem: Find the original price of a product before sales discount.

Example: Given an item at $75 sale price after applying a 25% discount,
the function should return the original price of that item before applying the sale percentage,
which is ($100.00) of course, rounded to two decimal places.

DiscoverOriginalPrice(75, 25) => 100.00M where 75 is the sale price (discounted price), 25 is the sale percentage and 100 is the original price

*/

function findOriginalPrice(priceAfterDiscount, discountPercentage) {
  return (priceAfterDiscount / (1 - discountPercentage / 100)).toFixed(2);
}

findOriginalPrice(75, 25); // 100.00
findOriginalPrice(125, 25); // 166.67
