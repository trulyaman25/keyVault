import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Auth0Provider
		domain="dev-ie7ibelj5jg8jr1d.us.auth0.com"
		clientId="wLaewKrlPf2XuGnco4tv6w5U7QZafABZ"
		authorizationParams={{
			redirect_uri: window.location.origin
		}}
	>
		<App></App>
	</Auth0Provider>,
)