import React from 'react';


interface AppContextInterface {
    addMoreCard: (title: string, listId: string) => void;
    addMoreList: (title: string) => void;
}

export default React.createContext<AppContextInterface | null>(null);