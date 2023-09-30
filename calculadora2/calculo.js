function calcular(n1, n2){
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)


selector = document.getElementById("selector").value

switch(selector){
    case "+":
    calculomais = (n1 + n2)
    document.getElementById("resultado").innerHTML = 'O resultado é '+ calculomais;
    break


    case "-":
    calculomenos = (n1 - n2)
    document.getElementById("resultado").innerHTML = 'O resultado é ' + calculomenos;
    break

    case "*":
    calculovezes = (n1 * n2)
    document.getElementById("resultado").innerHTML = 'O resultado é ' + calculovezes;
    break


    case "/":
    calculodivisao = (n1 / n2)
    document.getElementById("resultado").innerHTML = 'O resultado é ' + calculodivisao;
    break


  }
}