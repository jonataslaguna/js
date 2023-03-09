const dobroDeNumeros = (array) => {
    let dobroArray = []
    for(i in array){
        let res = array[i] * 2
        dobroArray.push(res)
        
    }
    return dobroArray
}

const array = [2,3,6,8,10,201]

console.log(dobroDeNumeros(array))