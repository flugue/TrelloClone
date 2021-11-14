import List from './components/List/List';
import React, { useState } from 'react';
import store, { CardData } from './utils/store';
import StoreApi from './utils/storeApi';
import { v4 as uuid } from 'uuid';

function App() {
    const [data, setData] = useState(store);

    const addMoreCard = (title: string, listId: string) => {
        const newCardId = uuid();
        const newCard: CardData = {
            id: newCardId,
            title: title
        };

        const list = data.lists.find(l => l.id === listId);
        list!.cards = [...list!.cards, newCard];

        const newState = {
            ...data,
            lists: data.lists.map(l => {
                if (l.id === list?.id)
                    return list;
                return l;
            })
        };

        setData(newState);
    }

    return (
        <StoreApi.Provider value={{ addMoreCard: addMoreCard }}>
            <div className="App">
                {data.listIds.map(listId => {
                    const list = data.lists.filter(l => l.id === listId)[0];
                    return (<List list={list} key={listId} />);
                })}
            </div>
        </StoreApi.Provider>

    );
}

export default App;
