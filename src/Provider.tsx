import React from "react"
import { Switch, Route } from "react-router-dom"
import Helmet from "react-helmet"

import App from "./Application"

import "../typings/Audio"
import "../typings/Console"
import "../typings/Date"
import "../typings/Number"

export interface ProviderProps {
	
}

export interface ProviderState {
	
}

export default 
class Provider 
extends React.Component<ProviderProps, ProviderState> {
	render() {
		return <>
			<Helmet>
				<link 
					rel="stylesheet" 
					href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" 
					integrity="sha384-KA6wR/X5RY4zFAHpv/CnoG2UW1uogYfdnP67Uv7eULvTveboZJg0qUpmJZb5VqzN" 
					crossOrigin="anonymous" 
				/>
			</Helmet>
			<Switch>
				<Route
					path="/"
					component={App}
				/>
			</Switch>
		</>
	}
}