import { context } from "audio"

export class ODOscillator {
	instance: OscillatorNode

	constructor() {
		this.instance = new OscillatorNode(context, {
			frequency: 440
		})
	}
}