
exports.clearDuplicates = (arrayNumbers)=>{

    const filterArrayNumbers = arrayNumbers.filter((number,index)=> arrayNumbers.indexOf(number) === index);

    console.log('Array filtrado', filterArrayNumbers);

    return filterArrayNumbers;

}