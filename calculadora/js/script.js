const previousOperationText = document.querySelector('#previous-operation')
const currentOperationText = document.querySelector('#current-operation')
const buttons = document.querySelectorAll('#buttons-container button')

class Calculator {
   constructor(previousOperationText, currentOperationText){
    this.previousOperationText = previousOperationText
    this.currentOperationText = currentOperationText
    this.currentOperation = ''
   } 

   //add digit to calculator screen
 addDigit(digit){
    //checar se a opereação atual(current) já tem um ponto
    if(digit === '.' && this.currentOperationText.innerText.includes('.')){
        return
    }
   
    this.currentOperation = digit
    this.updateScreen()
   }

   // precessar todos as operações da calculadora
   processOperation(operation){
    //Checar se current é vazia
    if(this.currentOperationText.innerText === '' && operation !== "C"){
        //Mudança de operação
        if(this.previousOperationText.innerText !== ''){
            this.changeOperation(operation)
        }
        return
    }
    

    //pegar o valor atual(current) e anterior(previous)
    let operationValue
    let previous = +this.previousOperationText.innerText.split(" ")[0]
    let current = +this.currentOperationText.innerText

    switch(operation){
        case '+':
        operationValue = previous + current
        this.updateScreen(operationValue, operation, current, previous)
            break
        case '-':
        operationValue = previous -  current
        this.updateScreen(operationValue, operation, current, previous)
            break
        case '/':
        operationValue = previous / current
        this.updateScreen(operationValue, operation, current, previous)
            break
        case '*':
        operationValue = previous * current
        this.updateScreen(operationValue, operation, current, previous)
            break
        case 'Del':
        this.processDelOperator()
            break
        case 'CE':
        this.processClearCurrentOperation()
            break
        case 'C':
        this.processClearAll()
            break
        case '=':
        this.processEqual()
            break
        default:
            return
    }

   }

   //Change values of the calculator screen
   updateScreen(
    operationValue = null, 
    operation = null, 
    current = null, 
    previous = null){

    if(operationValue === null){
        this.currentOperationText.innerText += this.currentOperation
    }else{
        //verifica se o valor é zero, se for, apenas adiciona o valor atual
        if(previous === 0 ){
            operationValue = current
        } 

        //Add current value to previous(Jogando o valor de baixo pra cima)
        this.previousOperationText.innerText = `${operationValue} ${operation}`
        this.currentOperationText.innerText = ""
    }
   }

   // Mudança de opreração matematica
   changeOperation(operation){

    const mathOperations = ['*','/','+','-']

    if(!mathOperations.includes(operation)) {
        return
    }

    this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation

   }
   //Deletar o ultimo digito
   processDelOperator(){
    this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1)
   }
   //Limpar operação atual(current)
   processClearCurrentOperation(){
    this.currentOperationText.innerText = ''
   }
   //Limpar toda a operação
   processClearAll(){
    this.currentOperationText.innerText = ''
    this.previousOperationText.innerText = ''
   }
   //Processo de '='
   processEqual(){
    const operation = previousOperationText.innerText.split(' ')[1]
    this.processOperation(operation)
   
   }


}

const calc = new Calculator(previousOperationText, currentOperationText)

buttons.forEach((btn) =>{
    btn.addEventListener('click', (e) => {
        const value = e.target.innerText // <- Para recebeer o valor de texto dos botões

        if(+value >= 0 || value === "."){ // <- Separara as operações de números
            calc.addDigit(value)
        }else{
            calc.processOperation(value)
        }
        
    } )
})