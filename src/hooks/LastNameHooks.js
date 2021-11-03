import { useState, useEffect } from 'react';
import { isAlpha } from 'validator';

function LastNameHooks() {
	const [lastName, setLastName] = useState('');
	const [error, setError] = useState('');
	const [onFocus, setOnFocus] = useState(false);

	useEffect(() => {
		if (onFocus) {
			if (lastName.length > 0) {
				if (!isAlpha(lastName)) {
					setError('Cannot have special character or number');
				}
			}
		}
	}, [lastName, onFocus]);

	function handleLastNAmeOnChange(e) {
		setLastName(e.target.value);
	}

	return [lastName, handleLastNAmeOnChange, error, setOnFocus];
}

export default LastNameHooks;
