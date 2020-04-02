const arr = [100,50,30,40];
console.log(arr);


const pop = arr.pop();
console.log(`arr.pop() => ${pop}`);
console.log('arr.pop() retorna o elemento que foi excluído do array')

const push = arr.push(60, 70);
console.log(`arr.push(60, 70) => ${push}`);
console.log('arr.push(60, 70) insere 60 e 70 no novo array e retorna o length dele')

const sort = arr.sort((a, b) => a - b);
console.log(`arr.sort((a, b) => a - b) => [${sort}]`);
console.log('arr.sort() ordena os elementos do array e retorna o array organizado')



document.getElementById('vai_mulek').onclick = function(){
    console.log(`E assim fica o array => [${arr}]`);

}