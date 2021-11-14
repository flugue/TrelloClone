import React from 'react';


interface AppContextInterface {
    addMoreCard: Function;
}

export default React.createContext<AppContextInterface | null>(null);