const soma = (a=2, b=3) => a + b;

document.getElementById('vai_mulek').onclick = function () {

  console.log(soma())
  console.log(soma(1))
  console.log(soma(2, 4))

};