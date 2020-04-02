/**
  const hero = {
    name: 'Connan',
    class: 'Barbarian',
    weapons: {
      main: 'Axe',
      auxiliar: 'dagger'
    },
    items: ['potion', 'leather armor', 'shield']
  };
  
  function showName(objHero) {
      return objHero.name
  };
  function showItens(objHero) {
    return objHero.items
  };
  function showWeapon(objHero) {
    return objHero.weapons
  };
  
  
  const mostraNome = showName(hero);
  const mostraItens = showWeapon(hero);
  const mostraArmas = showItens(hero);
  
  console.log(hero);
  console.log(mostraNome);
  console.log(mostraItens);
  console.log(mostraArmas);
  
*/

const hero = {
  name: 'Connan',
  classs: 'Barbarian',
  weapons: {
    main: 'Axe',
    auxiliar: 'dagger'
  },
  items: ['potion', 'leather armor', 'shield']
};

//e agora saca o mesmo exemplo com destructuring!
//#1
function showName({name}){
  return name
};
console.log(showName(hero));

//#2
function showSecondItem({items}){
  return items[1]
};
console.log(showSecondItem(hero));

//#3
function showItemsAndWeapons({weapons, items}) {
  //escolhi retornar um array pois return deve retornar somente uma variável, 
  //'return weapons,items' retornava apenas um dos valores
  return [weapons, items]
};
console.log(showItemsAndWeapons(hero))

//#4
function showNCMainW({name, classs, weapons:{main}}){
  return [name, classs, main]
};
console.log(showNCMainW(hero))

//muito importante que o nome das variáveis seja o mesmo no destructuring
//não importa nem a ordem dos parâmetros..
//#5
function showClassAndThirdItem({items, classs}){
    return [classs, items[2]]
};
console.log(showClassAndThirdItem(hero));

