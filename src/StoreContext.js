import React from 'react'

const StoreContext = React.createContext(null);

export const Provider = (props) => {
  return <StoreContext.Provider value={props.store}>
    {props.children}
  </StoreContext.Provider>
} // usage for hiding implementation of provider and simple usage of <Provider> tag

export default StoreContext