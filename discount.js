// Transportation on vacation

function rentalCarCost(days) {
  const CHARGES_PER_DAY = 40;
  const ZERO = 0;
  const daysCount = {
    MAX: 7,
    MIN: 3,
  };
  const discountCharges = {
    MAX: 50,
    MIN: 20,
  };

  let totalCost = CHARGES_PER_DAY * days;
  let discount = ZERO;

  if (days >= daysCount.MIN && days < daysCount.MAX) {
    discount = discountCharges.MIN;
  } else if (days >= daysCount.MAX) {
    discount = discountCharges.MAX;
  }

  return totalCost - discount;
}

rentalCarCost(3);
