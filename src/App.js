import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import Nav from './components/nav/Nav';

function App() {
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
