import React, {useState, useEffect} from 'react';
import AuthContext from '../AuthContext';

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false); 

    useEffect(() => {
      verifySession();
      }, [isAuthenticated]);
  
    const login = async (username, password) => {
        const loginData = {username, password};
      // call API and get user data
      const response = await fetch('/login', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)  
      });
      const user = response.data; 
      setUser(user);
    }
  
    const logout = () => {
      setUser(null);
    }
  
    const verifySession = async () => {
        try {
            fetch('/session').then((res) => {
              if (res.ok){
                console.log("Logged in");
                setIsAuthenticated(true);
              }
            });
          } catch(err) {
              console.log(err)
              setIsAuthenticated(false);
          }
    }

    return (
      <AuthContext.Provider value={{user, login, logout, isAuthenticated, verifySession}}>
        {children}
      </AuthContext.Provider>
    )
  } 
  
  export default AuthContextProvider;