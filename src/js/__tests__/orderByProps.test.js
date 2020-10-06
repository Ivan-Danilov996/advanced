import {orderByProps} from '../app'

test.each([
    [
        {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}, 
        ["name", "level"], 
        [
            {key: "name", value: "мечник"}, 
            {key: "level", value: 2}, 
            {key: "attack", value: 80}, 
            {key: "defence", value: 40}, 
            {key: "health", value: 10}
        ]
    ],
    [
        {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}, 
        ["attack", "health"], 
        [
            {key: "attack", value: 80},
            {key: "health", value: 10},
            {key: "defence", value: 40}, 
            {key: "level", value: 2}, 
            {key: "name", value: "мечник"}, 
        ]
    ],
    [
        {defence: 40, name: 'мечник', level: 2, health: 10, attack: 80}, 
        ["level"], 
        [
            {key: "level", value: 2},
            {key: "attack", value: 80},
            {key: "defence", value: 40}, 
            {key: "health", value: 10},
            {key: "name", value: "мечник"}, 
        ]
    ]
])(('order by props'), (original, array, expected) => {
    const result = orderByProps(original, array);
    expect(result).toEqual(expected);
  });