import React from "react"
import { observer } from "mobx-react"

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

	get children(): React.ReactNode {
		var { icon, children } = this.props
		return <span className="sb-wrapper">
			{icon &&
				<i className={`fas fa-${icon}`} />
			}
			<span>
				{children}
			</span>
		</span>
	}

	render() {
		var { color, style, renderer } = this.props

		var props: SimpleButtonRendererProps = {
			children: this.children,
			className: `c-simple-button ${color} ${style}`
		}

		return <>
			<svg 
				version="1.1" 
				xmlns="http://www.w3.org/2000/svg" 
				className="u-svg-filters"
			>
				<defs>
					<filter id="svgRipple">
						<feImage 
							xlinkHref="/static/images/ripple.png" 
							x="-236" 
							y="-270" 
							width="600" 
							height="600" 
							result="ripple"
						/>
						<feDisplacementMap
							xChannelSelector="R" 
							yChannelSelector="G" 
							colorInterpolationFilters="sRGB" 
							in="SourceGraphic" 
							in2="ripple" 
							scale="0" 
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
			{renderer!(props)}
		</>
	}
}