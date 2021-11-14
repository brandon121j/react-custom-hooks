import { useState, useEffect } from 'react';


function CheckToken() {
    const [isAuth, setIsAuth] = useState(false);

    function checkJwtToken() {
        let jwtToken = window.localStorage.getItem('jwtToken');

        if (jwtToken) {
            let decodedToken = jwtDecode(jwtToken);

            const currentTime = Date.now() / 100;

            if (decodedToken.exp < currentTime) {
                window.localStorage.removeItem('jwtToken');

                setIsAuth(false);
            } else {
                setIsAuth(true);
            }
        } else {
            setIsAuth(false);
        }
    }

    useEffect(() => {
        checkJwtToken();
    }, []);

    return [isAuth];
}



