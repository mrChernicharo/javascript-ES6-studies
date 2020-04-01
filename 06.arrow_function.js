const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const arrow = arr.map(i => i * 2)

const reduce = arr.reduce((p, n) => p + n)

const reduce2 = arr.reduce((p, n) => n - p)

console.log(arrow)
console.log(reduce)
console.log(reduce2)
console.log('arr.reduce((p, n) => n - p) => ((((((((2 - 1) - 3) - 4) - 5) - 6) - 7) - 8) - 9)')