import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import Nav from './components/nav/Nav';

function App() {
	return (
		<div className="App">
			<ToastContainer />
			<Router>
				<Nav />
				<Switch>
					<Route path="/sign-up" component={Signup} />
					<Route path="/sign-in" component={Signin} />
					<Route path="/" render={() => <h1>Home Page</h1>} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
