//we need to create jsx bcoz whatever we created fragment we need to put on top level so that all component can access it

import React from "react";
import UserContext from "./UserContext";

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider