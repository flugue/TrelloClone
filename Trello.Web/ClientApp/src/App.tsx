import List from './components/List/List';
import React, { useState } from 'react';
import store from './utils/store';

function App() {
    const [data, setData] = useState(store);

    return (
        <div className="App">
            {data.listIds.map(listId => {
                const list = data.lists.filter(l => l.id === listId)[0];
                return (<List list={list} key={listId} />);
            })}
        </div>
    );
}

export default App;
