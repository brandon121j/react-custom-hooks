import React from 'react';
import axios from 'axios';
import FirstNameHooks from '../../hooks/FirstNameHooks'
import LastNameHooks from '../../hooks/LastNameHooks';
import UserNameHooks from '../../hooks/UserNameHooks';
import PasswordHooks from '../../hooks/PasswordHooks';
import EmailHooks from '../../hooks/EmailHooks';

function Signup() {
    const [firstName, handleFirstNameOnChange, firstNameError, setFirstNameOnFocus, setFirstNameOnBlur] = FirstNameHooks();
    const [lastName, handleLastNameOnChange, lastNameError, setOnFocus, setOnBlur] = LastNameHooks();
    const [password, handlePasswordOnChange, passwordError, setPasswordOnFocus, setPasswordOnBlur] = PasswordHooks()
    const [email, handleEmailOnChange, emailError, setEmailOnFocus, setEmailOnBlur] = EmailHooks();
    const [username, handleUsernameOnChange, usernameError, setUsernameOnFocus, setUsernameOnBlur] = UserNameHooks();

    const onSubmitHandler = async() =>  {
    try {
        let payload = await axios.post('http://localhost:3001/api/users/create-user', {
            firstName,
            lastName,
            username,
            email,
            password
        });
        console.log(payload)
    } catch(error) {
        console.log(error)
    }
}
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input name={firstName} onChange={handleFirstNameOnChange} onFocus={() => setFirstNameOnFocus(true)} onBlur={() => setFirstNameOnBlur(true)} placeholder='First name'/>
                <div>{firstNameError && firstNameError}</div>
                <input name={lastName} onChange={handleLastNameOnChange} onFocus={() => setOnFocus(true)} onBlur={() => setOnBlur(true)} placeholder='Last name'/>
                <div>{lastNameError && lastNameError}</div>
                <input name={email} onChange={handleEmailOnChange} onFocus={() => setEmailOnFocus(true)} onBlur={() => setEmailOnBlur(true)} placeholder='Email'/>
                <div>{emailError && emailError}</div>
                <input name={username} onChange={handleUsernameOnChange} onFocus={() => setUsernameOnFocus(true)} onBlur={() => setUsernameOnBlur(true)} placeholder='Username'/>
                <div>{usernameError && usernameError}</div>
                <input name={password} onChange={handlePasswordOnChange} onFocus={() => setPasswordOnFocus(true)} onBlur={() => setPasswordOnBlur(true)} placeholder='Password'/>
                <div>{passwordError && passwordError}</div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Signup
