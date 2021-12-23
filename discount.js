// Transportation on vacation

function rentalCarCost(days) {
  const CHARGES_PER_DAY = 40;
  let totalCost = CHARGES_PER_DAY * days;
  let discount = 0;

  if (days >= 7) discount = 50;
  else if (days >= 3) discount = 20;

  return totalCost - discount;
}

rentalCarCost(3);
