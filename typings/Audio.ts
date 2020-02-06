type OscilatorWaveform =  
	"sine" | 
	"square"  | 
	"sawtooth" | 
	"triangle" | 
	"custom"

type ODNoteSign = 
	"C" | "C#" | 
	"D" | "D#" | 
	"E" | 
	"F" | "F#" | 
	"G" | "G#" | 
	"A" | "A#" | 
	"B"

type ODNote = {
	octave: number,
	sign: ODNoteSign
}