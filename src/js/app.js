// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

const orderByProps = (object, array) => {
    let sortByArray = []
    let sortByAlphabet = []
    for(let key in object) {
        let item = {}
        item.key = key
        item.value = object[key]
        if (array.indexOf(key) >= 0) {
            sortByArray[array.indexOf(key)] = item
        } else {
            sortByAlphabet.push(item)
            sortByAlphabet.sort((a, b) => {
              if (a.key > b.key) {
                  return 1
              } else  {
                  return -1
              }
          })
        }
    }

    return sortByArray.concat(sortByAlphabet)
}
console.log(orderByProps(obj, ["name", "level"]))



const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
  }


function destructuring(object) {

    let array = []
    const {special} = object
    special.forEach(element => {
      let newElement = {...element}
      if (!element.description) {
        newElement.description = 'Описание недоступно'
      }
      array.push(newElement)
    })
    return array
  }

  console.log(destructuring(character));


export {orderByProps, destructuring};