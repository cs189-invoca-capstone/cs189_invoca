
import React, {useState} from 'react'

export default function useLogin() {
    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const currUser = JSON.parse(userString);
        return currUser
      };
    
      const [user, setUser] = useState(getToken());
    
      const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
      };
    
      return {
        setToken: saveToken,
        token
      }
}
