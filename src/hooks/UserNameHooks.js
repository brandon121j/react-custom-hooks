import { useState, useEffect } from 'react';
import { isAlpha } from 'validator';

function UserNameHooks() {
	const [username, setUsername] = useState('');
	const [error, setError] = useState('');
	const [onFocus, setOnFocus] = useState(false);
    const [onBlur, setOnBlur] = useState(false)

	useEffect(() => {
		if (onFocus) {
			if (username.length > 0) {
				if (!isAlpha(username)) {
					setError('Cannot have special character or number');
				}

				if (isAlpha(username)) {
					setError('');
				}
			}
		}

        if (onBlur) {
            if (username.length === 0) {
                setError('Username cannot be empty')
            }
        }

	}, [username, onFocus, onBlur]);



	function handleUsernameOnChange(e) {
		setUsername(e.target.value);
	}

	return [username, handleUsernameOnChange, error, setOnFocus, setOnBlur];
}

export default UserNameHooks;
