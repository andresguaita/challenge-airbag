
exports.evalExpression = (expression)=>{
    /*  la función Eval sirve para evaluar una expresión que da 
    como resultado una cadena de texto o un valor numérico
    (no se recomienda su uso indiscriminado ya que representa un riesgo de seguridad)
    */
    if(!expression){
        throw new Error('Por favor introduzca la expresion para ejecutar la función')
    }
    const valueExpression = eval(expression)
    console.log('El valor numero de la expresion es: ',valueExpression)
    return valueExpression;
}