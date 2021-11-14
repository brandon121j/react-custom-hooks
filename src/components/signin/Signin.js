import React from 'react';
import { useNavigate, useEffect } from 'react-router';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import CheckToken from '../../hooks/CheckToken';

function Signin({ setUser }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const [checkJwtToken] = CheckToken();

    useEffect(() => {
		if (isAuth) {
			navigate('/')
		}
	}, [isAuth])

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			let payload = await axios.post('http://localhost:3001/api/users/login');

			window.localStorage.setItem('jwtToken', payload.data.payload);

			let decodedToken = jwtDecode(payload.data.payload);

			setUser({
				email: decodedToken.email,
				username: decodedToken.username,
			});

			navigate('/');
		} catch (e) {
			toast.error(e.response.data.error, {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	}
	return <div>Signin</div>;
}

export default Signin;
