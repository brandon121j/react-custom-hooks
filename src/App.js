import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import './App.css';

import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import Nav from './components/nav/Nav';

function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		let jwtToken = window.localStorage.getItem('jwtToken');

		if (jwtToken) {
			let decodedToken = jwtDecode(jwtToken);

			const currentTime = Date.now() / 1000;

			if (decodedToken.exp < currentTime) {
				window.localStorage.removeItem('jwtToken');
				setUser(null)
			} else {
				setUser({
					email: decodedToken.email,
					password: decodedToken.password
				})
			}
		}
	})





	return (
		<div className="App">
			<ToastContainer theme='colored' />
			<Router>
				<Nav user={user}/>
				<Routes>
					<Route path="/sign-up" element={Signup} />
					<Route path="/sign-in" element={Signin} />
					<Route path="/" render={() => <h1>Home Page</h1>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
