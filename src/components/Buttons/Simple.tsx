import React from "react"
import { observer } from "mobx-react"
import uuid from "uuid/v4"

import "styles/components/buttons/simple"

export type SimpleButtonRendererProps = {
	className: string,
	children: React.ReactNode
	onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export type SimpleButtonRenderer = (
	props: SimpleButtonRendererProps
) => React.ReactNode

export type SimpleButtonColor = "accent"
	| "info"
	| "warning"
	| "error"
	| "light"

export type SimpleButtonStyle = "solid"
	| "outline"

export interface SimpleButtonProps {
	color?: SimpleButtonColor,
	style?: SimpleButtonStyle,
	renderer?: SimpleButtonRenderer,
	icon?: string
}

export interface SimpleButtonState {
	
}

const defaultRenderer: SimpleButtonRenderer  = (
	props: SimpleButtonRendererProps
) => {
	return <div {...props}>
		{props.children}
	</div>
}

@observer
export default
class SimpleButton
extends React.Component<SimpleButtonProps, SimpleButtonState> {
	static defaultProps  = {
		color: "accent" as SimpleButtonColor,
		style: "solid" as SimpleButtonStyle,
		renderer: defaultRenderer
	}

	id: string = uuid()
	runRipple: RunRipple

	get children(): React.ReactNode {
		var { icon, children } = this.props
		return <span className="sb-wrapper">
			{icon &&
				<i className={`fas fa-${icon}`} />
			}
			{this.props.children &&
				<span>
					{children}
				</span>
			}
		</span>
	}

	handleClick = (
		event: React.MouseEvent<HTMLDivElement>
	) => {
		var { clientX, clientY } = event
		var box = event.currentTarget.getBoundingClientRect()
		var x = clientX - box.x
		var y = clientY - box.y

		this.runRipple &&
			this.runRipple(x, y, Math.max(box.width, box.height))
	}

	render() {
		var { color, style, renderer } = this.props

		var props: SimpleButtonRendererProps = {
			children: this.children,
			className: `simple-button-wrapper ${color} ${style}`
		}

		return <>
			<div 
				className="c-simple-button"
				style={{
					"--button-filter": `url("#${this.id}")`
				} as React.CSSProperties}
				onClick={this.handleClick}
			>
				<RippleEffect 
					id={this.id}
					runRippleHook={ref => this.runRipple = ref}
				/>
				{renderer!(props)}
			</div>
		</>
	}
}

type RunRipple = (
	x: number,
	y: number,
	maxWidth: number
) => void

interface RippleEffectProps {
	id: string
	runRippleHook: (ref: RunRipple) => void
}

interface RippleEffectState {
	currentMeasure: number
}

class RippleEffect
extends React.Component<RippleEffectProps, RippleEffectState> {
	state = {
		currentMeasure: 0
	}

	measure: number = 1
	x: number = 0
	y: number = 0

	frame: number

	componentDidMount() {
		this.props.runRippleHook(this.runRipple)
	}

	runRipple: RunRipple = (
		x,
		y,
		maxWidth
	) => {
		window.cancelAnimationFrame(this.frame)
		this.x = x,
		this.y = y
		this.measure = maxWidth * 2
		this.setState({
			currentMeasure: 0
		}, this.animate)
	}

	animate = () => {
		this.setState({
			currentMeasure: this.state.currentMeasure + this.measure / 36
		}, () => {
			if (this.state.currentMeasure < this.measure)
				this.frame = window.requestAnimationFrame(this.animate)
		})
	}

	render() {
		var measure = this.state.currentMeasure
		var x = this.x - measure / 2
		var y = this.y - measure / 2
		var scale = 1 - measure / this.measure
		return <>
			<span 
				className="ripple"
				style={{
					width: this.measure,
					height: this.measure,
					top: this.y,
					left: this.x,
					opacity: scale,
					transform: `translate(-50%, -50%) scale(${1 - scale}) translateZ(0)`
				}}
			/>
			<svg className="u-svg-filters button-ripple-effect">
				<defs>
					<filter id={this.props.id}>
						<feImage 
							xlinkHref="/static/images/ripple.png"
							x={x}
							y={y}
							width={measure}
							height={measure}
							result="ripple"
						/>
						<feDisplacementMap
							xChannelSelector="G"
							yChannelSelector="R"
							colorInterpolationFilters="sRGB"
							in="SourceGraphic"
							in2="ripple"
							scale={36 * scale}
							result="dm"
						/>
						<feComposite 
							operator="in"
							in2="ripple"
						/>
						<feComposite 
							in2="SourceGraphic"
						/>
					</filter>
				</defs>
			</svg>
		</>
	}
}