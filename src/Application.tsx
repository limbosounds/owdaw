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
				<main style={{ padding: 40 }}>
					<Button icon="plus">
						Create window
					</Button>
					<br/><br/>
					<Button icon="plus" style="outline">
						Create window
					</Button>
					<br/><br/>
					<Button icon="plus" color="info">
						Create window
					</Button>
					<br/><br/>
					<Button icon="plus" color="info" style="outline">
						Create window
					</Button>
					<br/><br/>
					<Button icon="plus" color="warning">
						Create window
					</Button>
					<br/><br/>
					<Button icon="plus" color="warning" style="outline">
						Create window
					</Button>
					<br/><br/>
					<Button icon="plus" color="error">
						Create window
					</Button>
					<br/><br/>
					<Button icon="plus" color="error" style="outline">
						Create window
					</Button>
					<br/><br/>
					<Button icon="plus" color="light">
						Create window
					</Button>
				</main>
			</>
		)
	}
}