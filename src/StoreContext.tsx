import React, {createContext} from 'react';
import  {StoreType} from './redux/redux-store';


export type ProviderType = {
    store: StoreType
    children: any
}


const StoreContext = createContext({} as StoreType)

export const Provider = (props: ProviderType)=> {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
            </StoreContext.Provider>
    )
}

export default StoreContext;