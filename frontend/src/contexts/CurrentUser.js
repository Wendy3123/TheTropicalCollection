import { createContext, useState, useEffect } from "react";
export const CurrentUser = createContext()

function CurrentUserProvider({ children }){

    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {

        const getLoggedInUser = async () => {
            let response = await fetch('http://localhost:5001/api/authentication/profile', 
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInUser()
    }, [])

    const logout = () => {
        localStorage.removeItem('token');
   
      setCurrentUser(null);
    //   location.reload() //refresh he screen for cart, yo doesnt work
   
       };
    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser, logout }}>
            {children}
        </CurrentUser.Provider>
    )
}


export default CurrentUserProvider
