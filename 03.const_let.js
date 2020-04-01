//mutação rola
const user = { name: 'Felipe'};

user.name = 'Jorge';

//atribuição não rola!!!
/**
    const a = 3;
    
    a = 1;
*/

document.getElementById('vai_mulek').onclick = () =>{
    console.log(user);
}
