import React from "react"
import { observer } from "mobx-react"

import "styles/components/utils/debug-console"

import Logs, { LogMessageType } from "stores/Logs"

export interface DebugConsoleProps {
	
}

export interface DebugConsoleState {
	hidden: boolean
}

@observer
export default
class DebugConsole
extends React.Component<DebugConsoleProps, DebugConsoleState> {
	state = {
		hidden: false
	}

	icons: {
		[key in LogMessageType]: string
	} = {
		info: "fa-terminal",
		warning: "fa-exclamation-triangle",
		error: "fa-times-circle",
	}

	logs: HTMLDivElement
	userScrolled: boolean = false

	handleScroll = () => {
		const { scrollTop, scrollHeight, offsetHeight } = this.logs
		this.userScrolled = scrollTop < scrollHeight - offsetHeight - 20
	}

	componentDidUpdate() {
		if (!this.userScrolled)
			this.logs.scrollTop = this.logs.scrollHeight
	}

	toggleHidden = () => {
		this.setState({
			hidden: !this.state.hidden
		})
	}

	render() {
		var { hidden } = this.state
		return <>
			<div className={`c-debug-console ${hidden ? "hidden" : ""}`}>
				<div className="title-bar">
					<div 
						className="action"
						onClick={this.toggleHidden}
					>
						<i className="fas fa-angle-right" />
					</div>
					<div className="label">
						Debug console
						{Logs.types.map(type => {
							return (
								<span 
									key={type}
									className={`counter ${type}`}
								>
									<i className={`fas ${this.icons[type]}`} />
									<span>
										{Logs.count(type)}
									</span>
								</span>
							)
						})}
					</div>
				</div>
				<section className="logs">
					<div 
						ref={r => this.logs = r!}
						className="logs-content"
						onWheel={this.handleScroll}
						onScroll={this.handleScroll}
					>
						{Logs.items.map((item, i) => {
							return (
								<div 
									key={i} 
									className={`log ${item.type}`}
								>
									<span className="timestamp">
										{item.timestamp.asDateString()}
									</span>
									<span className="content">
										{item.message}
									</span>
								</div>
							)
						})}
					</div>
				</section>
			</div>
		</>
	}
}