import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from "./container/Home"

function App() {

	return (
		<>
		
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home}></Route>
				</Switch>
			</BrowserRouter>
			

		</>

	);
}

export default App;
