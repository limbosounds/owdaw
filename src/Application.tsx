import React from "react"
import { observer } from "mobx-react"
import { RouteComponentProps } from "react-router-dom"

import "styles/fonts"
import "styles/main"
import "styles/uni"

import Background from "components/Images/Background"
import DebugConsole from "components/Utils/DebugConsole"
import Button from "components/Buttons/Simple"

export interface AppProps
extends RouteComponentProps<any> {
	
}

export interface AppState {
	
}

@observer
export default 
class App 
extends React.Component<AppProps, AppState> {
	render() {
		return (
			<>
				<Background
					src="/static/images/bg_default_3.jpg"
					opacity={.5}
				/>
				<DebugConsole />
				<main>
					<Button icon="plus">
						Create window
					</Button>
				</main>
			</>
		)
	}
}