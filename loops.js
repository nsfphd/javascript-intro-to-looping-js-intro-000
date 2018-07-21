function forLoop(arr){
  for (let i=0, i<=25, i++){
    if(i===1){
      arr.push('I am ${i} strange loop.')
    }
    else{
      arr.push('I am ${i} strange loops.')
    }
  }
}

function whileLoop(n){
  while(n>0){
    console.log(--n)
  }
  console.log('done')
}
