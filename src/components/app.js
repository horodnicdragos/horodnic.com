import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Resume from '../routes/resume';
import Contact from '../routes/contact';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app" class="h-100 avenir ph5-l">
				<Header/>
				<Router class="border-box" onChange={this.handleRoute}>
					<Home path="/" />
					<Resume path="/resume"/>
					<Contact path="/contact"/>
				</Router>
			</div>
		);
	}
}
