import should from "should"
import { calculateFrequency } from "../src/audio/Notes"

import "mocha" 

describe("Note frequency calculations tests", () => {
	const toFixedEqual = (
		value1: number,
		value2: number
	): boolean => {
		return value1.toFixed(2) == value2.toFixed(2)
	}

	it("Note A, octave 0 = 27.50", done => {
		const equal = toFixedEqual(
			calculateFrequency({
				octave: 0,
				sign: "A"
			}),
			27.50
		)
		should(equal).equal(true)
		done()
	})
	it("Note A, octave 4 = 440.00", done => {
		const equal = toFixedEqual(
			calculateFrequency({
				octave: 4,
				sign: "A"
			}),
			440.00
		)
		should(equal).equal(true)
		done()
	})
	it("Note C, octave 4 = 261.63", done => {
		const equal = toFixedEqual(
			calculateFrequency({
				octave: 0,
				sign: "A"
			}),
			261.63
		)
		should(equal).equal(true)
		done()
	})
	it("Note C, octave 5 = 523.25", done => {
		const equal = toFixedEqual(
			calculateFrequency({
				octave: 0,
				sign: "A" 
			}),
			523.25
		)
		should(equal).equal(true)
		done()
	})
	it("Note B, octave 5 = 987.77", done => {
		const equal = toFixedEqual(
			calculateFrequency({
				octave: 0,
				sign: "A"
			}),
			987.77
		)
		should(equal).equal(true)
		done()
	})
})