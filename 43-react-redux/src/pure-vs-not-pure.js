

const potato = 5 // side effect

function notPure(num){
  return num + potato
}

function pure(num, otherNum){
  return num + otherNum
}

function notPure(state){
  return state.num++
}

