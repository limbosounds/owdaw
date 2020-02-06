import React from "react"

import "styles/components/images/background"
import Logs from "stores/Logs"

export interface BackgtoundProps {
	src: string,
	opacity?: number
}

export interface BackgtoundState {
	loaded: boolean,
	failed: boolean
}

export default
class Backgtound
extends React.Component<BackgtoundProps, BackgtoundState> {
	static defaultProps = {
		opacity: .75
	}

	state = {
		loaded: false,
		failed: false
	}

	image: HTMLImageElement
 
	componentDidMount() {
		this.image = new Image()
		this.image.src = this.props.src
		this.image.addEventListener("load", this.handleLoad)
		this.image.addEventListener("error", this.handleError)
	}

	componentWillUnmount() {
		this.image.removeEventListener("load", this.handleLoad)
		this.image.removeEventListener("error", this.handleError)
	}

	handleLoad = () => {
		this.setState({
			loaded: true
		})
	}

	handleError = () => {
		Logs.push(`[Background.tsx]: Failed to load background image ${this.props.src}`, "error")
		this.setState({
			failed: true
		})
	}

	render() {
		return <>
			<div className="c-background">
				{this.state.loaded &&
					<img 
						className="u-fade-in"
						src={this.props.src} 
						alt="Kappa"
					/>
				}
				<span 
					className="overlay"
					style={{
						opacity: this.props.opacity
					}}
				/>
			</div>
		</>
	}
}