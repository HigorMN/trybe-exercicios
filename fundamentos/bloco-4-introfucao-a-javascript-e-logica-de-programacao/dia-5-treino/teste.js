function isTriangle(a,b,c){

    soma = a + b + c
  
    if (soma === 180){
        return true
    } else {
        return false
      }

  }

  console.log(isTriangle (45,60,60));