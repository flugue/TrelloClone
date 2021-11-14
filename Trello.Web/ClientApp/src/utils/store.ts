export interface ListData {
    id: string;
    title: string;
    cards: CardData[];
}

export interface CardData {
    id: string;
    content: string;
}

export interface Data {
    lists: ListData[];
    listIds: string[]
}

const cards: CardData[] = [
    {
        id: 'card-1',
        content: 'Learning how to cook',
    },
    {
        id: 'card-2',
        content: 'Making sandwich',
    },
    {
        id: 'card-3',
        content: 'Taking the trash out',
    },
]

const data: Data = {
    lists: [
        {
            id: 'list-1',
            title: 'Todo',
            cards,
        }
    ],
    listIds: ['list-1']
}

export default data;