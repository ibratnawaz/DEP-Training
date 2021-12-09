// Transportation on vacation

function rentalCarCost(d) {
    let total = 40 * d;
    let disc = 0;
    if(d >= 7) disc = 50;
    else if(d >= 3) disc = 20;
    
    return total - disc
}

rentalCarCost(3)