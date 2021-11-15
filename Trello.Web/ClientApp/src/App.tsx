import React, { useState } from 'react';
import store, { CardData, ListData } from './utils/store';
import StoreApi from './utils/storeApi';
import { v4 as uuid } from 'uuid';
import InputContainer from './components/Input/InputContainer';
import { makeStyles } from '@material-ui/core';
import List from './components/List/List';

const useStyle = makeStyles({
    root: {
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: 'green'
    }
})

function App() {
    const [data, setData] = useState(store);
    const classes = useStyle();

    const addMoreCard = (title: string, listId: string) => {
        const newCardId = uuid();
        const newCard: CardData = {
            id: newCardId,
            title: title
        };

        let obj = { ...data };
        const list = obj.lists.find(l => l.id === listId);
        list!.cards = [...list!.cards, newCard];

        const newState = {
            ...data,
            lists: obj.lists.map(l => {
                if (l.id === list?.id)
                    return list;
                return l;
            })
        };

        setData(newState);
    }

    const addMoreList = (title: string) => {
        const newListId = uuid();
        const newList: ListData = {
            id: newListId,
            title: title,
            cards: []
        };

        const newState = {
            ...data,
            lists: [...data.lists, newList]
        };
        setData(newState);
    }

    const updateListTitle = (title: string, listId: string) => {
        let obj = { ...data };
        const list = obj.lists.find(l => l.id === listId);
        list!.title = title;

        const newState = {
            ...data,
            lists: obj.lists.map(l => {
                if (l.id === list?.id)
                    return list;
                return l;
            })
        };

        setData(newState);
    }

    return (
        <StoreApi.Provider value={{
            addMoreCard: addMoreCard,
            addMoreList: addMoreList,
            updateListTitle: updateListTitle
        }}>
            <div className={classes.root}>
                {data.lists.map(list => {
                    return (<List list={list} key={list.id} />);
                })}
                <InputContainer type='list' />
            </div>
        </StoreApi.Provider>

    );
}

export default App;
