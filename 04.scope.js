function Teste(x){
    let y = 5
    console.log(x, y);
    
    if (x > 5){
        console.log(x, y);
    }

};



document.getElementById('vai_mulek').onclick = () => {
    Teste(6);
}