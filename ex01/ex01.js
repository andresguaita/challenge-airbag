
exports.printCombinations = ()=>{
    for (let i = 0; i <= 9; i++) {
        for (let j = i+1; j <= 9; j++) {
            for (let k = j+1; k <= 9; k++) {
                console.log(`${i}${j}${k}`);
            }
        }
    } 
    
    return;
}

