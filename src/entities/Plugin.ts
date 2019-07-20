export interface ODPluginOscilator {
	muted: boolean,
	type: OscilatorWaveform,
	mode: "poly" | "mono"
	voices: number,
	maxVoices: number,
	detune: number,
}

export interface ODPluginPlayingNote {
	frequency: number,
	oscilators: OscillatorNode[]
}

export interface ODPluginProps {
	context: AudioContext
}

export default class ODPlugin {
	oscilators: ODPluginOscilator[] = []

	context: AudioContext
	maxVoices: number

	playingNotes: ODPluginPlayingNote[] = []

	constructor(props: ODPluginProps) {
		this.context = props.context
	}

	playNote = (noteFreq: number, noteVolume: number) => {

	}

	stopNote = (noteFreq: number) => {

	}
}