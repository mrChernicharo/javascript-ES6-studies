console.log('.map(), .reduce(), .filter()')
const arr = [1, 2, 3, 4, 5]
console.log(`Array => ${arr}`)


const map_arr = arr.map(function (item) {
   return item * 2
})

const map_index = arr.map((item, index) => {
    return index
})

const item_plus_index = arr.map(function(i, x){
    return i + x
})

document.getElementById('vai_mulek').onclick = function(){
    console.log(`Array.map(function(item) {return item * 2}) => ${map_arr}`)
    console.log(`Array.map((item, index) => {return index})  => ${map_index}`)
    console.log(`Array.map(function(i, x) {return i + x}) => ${item_plus_index}`)
    console.log(`Array.reduce(function (previous, next){ return previous + next }) => ${arr_reduce}`)
    console.log('// 1 + 2 + 3 + 4 + 5')
    console.log('let total = 0')
    console.log(`Array.reduce((previous, next) => { return total += next}) => ${arr_reduce2}`)
    console.log('// 0 + 2 + 3 + 4 + 5')
    console.log('total = 0')
    console.log(`Array.reduce((previous, next) => { return total += previous}) => ${arr_reduce3}`)
    console.log('// 0 + 1 + 2 + 3 + 4 ')
    console.log(`Array.filter((p) => {return p % 2 == 0}) => ${arr_filter}`)
    console.log(`Array.filter((i) = > {return i % 2 == 1}) => ${arr_filter2}`)
    console.log(`Array.find((item) =>{return item == 4}) => ${arr_find}`)
    console.log('//ok! achei o 4!') 
    console.log(`arr.find((item) => {return item == 6}) => ${arr_find2}`)
    console.log('oh não!!! não encontrei o 6 :/')
    
}

//reduce - reduzir todo o array em um único valor

const arr_reduce = arr.reduce(function(previous, next){
    return previous + next
})

let total = 0
const arr_reduce2 = arr.reduce(function(previous, next){
    total += next
    return total
})

total = 0
const arr_reduce3 = arr.reduce((previous, next) => {
    total += previous
    return total
})

const arr_filter = arr.filter((p)=>{
    return p % 2 == 0  //retornos baseados em true ou false
})

const arr_filter2 = arr.filter((i) => {
    return i % 2 == 1
})

const arr_find = arr.find((item) =>{
    return item == 4 //retorno baseado em true ou false
})

const arr_find2 = arr.find((item) =>{
    return item == 6 
})