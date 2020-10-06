// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

// function sortArray(arr) {
//     return arr.sort((a, b) => {
//         if (a.key > b.key) {
//             return 1
//         } else  {
//             return -1
//         }
//     });
//   }

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

export const orderByProps = (object, array) => {
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
            //sortArray(sortByAlphabet)
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


export function destructuring(object) {
    const {special} = object
    special.forEach(element => {
        if (!element.description) {
            element.description = 'Описание недоступно'
        }
    })
    return special
  }

  console.log(destructuring(character))