const NOTES_OCTAVE_SEMITONES: number = 12

const NOTES_SEMITONE_STEP = 2 ** (1 / 12)

const NOTES_SIGNS: ODNoteSign[] = [
	"C",
		"C#",
	"D",
		"D#",
	"E",
	"F",
		"F#",
	"G",
		"G#",
	"A",
		"A#",
	"B"
]

const NOTES_BASE_FREQUENCY: number = 440
const NOTES_BASE_NOTE: ODNote = {
	octave: 4,
	sign: "A"
}

export const calculateFrequency = (
	note: ODNote
): number => {
	const { octave, sign } = NOTES_BASE_NOTE
	const signDistance = NOTES_SIGNS.indexOf(note.sign) - NOTES_SIGNS.indexOf(sign)
	const octaveDistance = (note.octave - octave) * NOTES_OCTAVE_SEMITONES
	return NOTES_BASE_FREQUENCY * (NOTES_SEMITONE_STEP ** (signDistance + octaveDistance))
}