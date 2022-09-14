
exports.blackjack = (blackjackHand) => {

    let amountHand = 0;
    let hasKJQ = false;

    /* 
    Se realiza una validacion, si la mano contiene mas de dos cartas y en dicha mano,
    hay una A y ,J,Q o K , se realiza la validacion correspondiente para que el valor de 
    A sea 1 , ya que si sumamos 11 + 10 + 'el otro numero o valor que venga', eso daria mas de 21¿
    */

    if (blackjackHand.find(value => value == 'J' || value == 'Q' || value == 'K' && value == 'A') && blackjackHand.length > 2) {
        hasKJQ = true; // validacion para que el valor de A sea igual a 1 .
    }

    for (let i = 0; i < blackjackHand.length; i++) {
        if (blackjackHand[i] == 'K' || blackjackHand[i] == 'J' || blackjackHand[i] == 'Q') {
            amountHand = amountHand + 10;
        }
        else if (blackjackHand[i] == 'A') {
            if (amountHand + 11 > 21 || hasKJQ) {
                amountHand = amountHand + 1;
            }
            else {
                amountHand = amountHand + 11;
                hasAs = true;
            }
        }
        else {
            amountHand = Number(blackjackHand[i]) + amountHand;
        }
    }
    amountHand = amountHand > 21 ? 21 : amountHand;
    console.log('El valor de la mano es : ', amountHand);
    return amountHand;
}