import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Auth0Provider
		domain="trulyaman25.us.auth0.com"
    	clientId="uvUqiVwXm0ppLF1Gh3NgBJ8Rirr26eTE"
		authorizationParams={{
			redirect_uri: window.location.origin
		}}
	>
		<App></App>
	</Auth0Provider>,
)