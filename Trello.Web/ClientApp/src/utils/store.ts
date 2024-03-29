﻿export interface ListData {
    id: string;
    title: string;
    cards: CardData[];
}

export interface CardData {
    id: string;
    title: string;
}

export interface Data {
    lists: ListData[];
    listIds: string[]
}

const cards: CardData[] = [
    {
        id: 'card-1',
        title: 'Learning how to cook',
    },
    {
        id: 'card-2',
        title: 'Making sandwich',
    },
    {
        id: 'card-3',
        title: 'Taking the trash out',
    },
]

const data: Data = {
    lists: [
        {
            id: 'list-1',
            title: 'To Do',
            cards,
        },
        {
            id: 'list-2',
            title: 'On Going',
            cards:[],
        }
    ],
    listIds: ['list-1']
}

export class ListData {
    id: string = '';
    title: string = '';
    cards: CardData[] = [];

    constructor(list?: ListData) {
        if (list) {
            this.id = list.id;
            this.title = list.title;
            this.cards = list.cards;
        }
    }
}


export default data;