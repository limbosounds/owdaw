import React from "react"
import { observer } from "mobx-react"

import "styles/main"

import KManager from "managers/KeyboardManager"

export interface AppProps {
	
}

export interface AppState {
	
}

@observer
export default 
class App 
extends React.Component<AppProps, AppState> {
	render() {
		var { playingNotes, pressedKeys } = KManager
		return (
			<>
				<h1>Hello, OWDAW!</h1>
				<div>
					{playingNotes.map((note, i) => {
						return (
							<div key={i}>
								{note.sign}, octave {note.octave}
							</div>
						)
					})}
					{playingNotes.length == 0 &&
						<div style={{ opacity: .54 }}>
							No notes playing
						</div>
					}
				</div>
				<div 
					style={{ 
						position: "absolute",
						top: 15,
						right: 15,
						textAlign: "right"
					}}
				>
					{pressedKeys.map(key => {
						return (
							<div key={key}>
								{key}
							</div>
						)
					})}
					{pressedKeys.length == 0 &&
						<div style={{ opacity: .54 }}>
							No keys pressed
						</div>
					}
				</div>
			</>
		)
	}
}