let arr = new Array(15)

arr[0] = 1
arr[1] = 1

for(let i = 2; i < arr.length; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }

console.log(arr)