import { observable, computed } from "mobx"

class ODKeyboardManager {
	@observable pressedKeys: string[] = []
	@observable playingNotes: ODNote[] = []

	@observable modifiers = {
		alt: false,
		ctrl: false,
		shift: false
	}

	modifierKeys = {
		alt: [
			"AltLeft",
			"AltRight",
		],
		ctrl: [
			"ControlLeft",
			"ControlRight",
		],
		shift: [
			"ShiftLeft",
			"ShiftRight",
		]
	}

	noteKeys: { [key: string]: ODNote} = {
		KeyZ: 			{ octave: 4, sign: "C" },
		KeyS: 			{ octave: 4, sign: "C#" },
		KeyX: 			{ octave: 4, sign: "D" },
		KeyD: 			{ octave: 4, sign: "D#" },
		KeyC: 			{ octave: 4, sign: "E" },
		KeyV: 			{ octave: 4, sign: "F" },
		KeyG: 			{ octave: 4, sign: "F#" },
		KeyB: 			{ octave: 4, sign: "G" },
		KeyH: 			{ octave: 4, sign: "G#" },
		KeyN: 			{ octave: 4, sign: "A" },
		KeyJ: 			{ octave: 4, sign: "A#" },
		KeyM: 			{ octave: 4, sign: "B" },

		Comma: 			{ octave: 5, sign: "C" },
		KeyL: 			{ octave: 5, sign: "C#" },
		Period: 		{ octave: 5, sign: "D" },
		Semicolon: 		{ octave: 5, sign: "D#" },
		Slash: 			{ octave: 5, sign: "F" },

		KeyQ: 			{ octave: 5, sign: "C" },
		Digit2: 		{ octave: 5, sign: "C#" },
		KeyW: 			{ octave: 5, sign: "D" },
		Digit3: 		{ octave: 5, sign: "D#" },
		KeyE: 			{ octave: 5, sign: "E" },
		KeyR: 			{ octave: 5, sign: "F" },
		Digit5: 		{ octave: 5, sign: "F#" },
		KeyT: 			{ octave: 5, sign: "G" },
		Digit6: 		{ octave: 5, sign: "G#" },
		KeyY: 			{ octave: 5, sign: "A" },
		Digit7: 		{ octave: 5, sign: "A#" },
		KeyU: 			{ octave: 5, sign: "B" },

		KeyI: 			{ octave: 6, sign: "C" },
		Digit9: 		{ octave: 6, sign: "C#" },
		KeyO: 			{ octave: 6, sign: "D" },
		Digit0: 		{ octave: 6, sign: "D#" },
		KeyP: 			{ octave: 6, sign: "E" },
		BracketLeft: 	{ octave: 6, sign: "F" },
		Equal: 			{ octave: 6, sign: "F#" },
		BracketRight: 	{ octave: 6, sign: "G" },
	}

	get noteKeysList(): string[] {
		return Object.keys(this.noteKeys)
	}

	@computed
	get modifierPressed(): boolean {
		return this.modifiers.alt
			|| this.modifiers.ctrl
			|| this.modifiers.shift
	}

	constructor() {
		if (typeof document != "undefined") {
			document.addEventListener("keydown", this.handleKeyDown)
			document.addEventListener("keyup", this.handleKeyUp)
		}
	}

	destructor = () => {
		document.removeEventListener("keydown", this.handleKeyDown)
		document.removeEventListener("keyup", this.handleKeyUp)
	}

	findPlayingNote = (note: ODNote): ODNote => {
		return this.playingNotes.find(n => {
			return n.octave == note.octave
				&& n.sign == note.sign
		})
	}

	handleKeyDown = (event: KeyboardEvent) => {
		event.preventDefault()
		if (event.repeat)
			return

		var { code } = event
		var { alt, ctrl, shift } = this.modifierKeys
		if (alt.includes(code))
			this.modifiers.alt = true
		else if (ctrl.includes(code))
			this.modifiers.ctrl = true
		else if (shift.includes(code))
			this.modifiers.shift = true
		else {
			if (this.pressedKeys.includes(code))
				return
			this.pressedKeys.push(code)
		}
		

		if (!this.modifierPressed && this.noteKeysList.includes(code)) {
			// add playing note
			var newNote = this.noteKeys[code]
			var existingNote = this.findPlayingNote(newNote)
			if (!existingNote)
				this.playingNotes.push(newNote)
		}
	}

	handleKeyUp = (event: KeyboardEvent) => {
		event.preventDefault()

		var { code } = event
		var { alt, ctrl, shift } = this.modifierKeys
		if (alt.includes(code))
			this.modifiers.alt = false
		else if (ctrl.includes(code))
			this.modifiers.ctrl = false
		else if (shift.includes(code))
			this.modifiers.shift = false
		else {
			this.pressedKeys.remove(code)
		}

		if (!this.modifierPressed && this.noteKeysList.includes(code)) {
			// remove playing note
			var noteToRemove = this.noteKeys[code]
			var existingNote = this.findPlayingNote(noteToRemove)
			if (existingNote)
				this.playingNotes.remove(existingNote)
		}
	}
}

export default new ODKeyboardManager()