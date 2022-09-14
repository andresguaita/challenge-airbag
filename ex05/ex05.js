
exports.shiftCipher = (wordToEncrypt, spacesNumber) => {

    let wordEncrypt = '';

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    for (let i = 0; i < wordToEncrypt.length; i++) {
        wordEncrypt = wordEncrypt.concat(alphabet[alphabet.indexOf(wordToEncrypt[i]) + spacesNumber]);
    }

    console.log('Palabra cifrada es: ', wordEncrypt);

    return wordEncrypt;
}