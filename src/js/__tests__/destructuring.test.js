import {destructuring} from '../app'

test.each([
    [
        {
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
              }
            ]	
        },
        [
            {
              id: 8,
              name: 'Двойной выстрел',
              icon: 'http://...',
              description: 'Двойной выстрел наносит двойной урон'
            }, 
            {
              id: 9,
              name: 'Нокаутирующий удар',
              icon: 'http://...',
              description: 'Описание недоступно'
            }
        ]	
    ],
    [
        {
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
              },
              {
                id: 100,
                name: 'Скоростная стрельба',
                icon: 'http://...'
              }
            ]	
        },
        [
            {
              id: 8,
              name: 'Двойной выстрел',
              icon: 'http://...',
              description: 'Двойной выстрел наносит двойной урон'
            }, 
            {
              id: 9,
              name: 'Нокаутирующий удар',
              icon: 'http://...',
              description: 'Описание недоступно'
            },
            {
                id: 100,
                name: 'Скоростная стрельба',
                icon: 'http://...',
                description: 'Описание недоступно'
            }
        ]	       
    ],
    [
        {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: [
            ]	
        },
        [
        ]	              
    ]
])(('destructuring'), (object, expected) => {
    const result = destructuring(object);
    expect(result).toEqual(expected);
  });