interface Array<T> {
	remove(o: T, eq?: (cv: T) => boolean): boolean
}

interface ArrayConstructor {
	createEmpty(l: number): Array<undefined>,
	createNumeric(l: number, f?: number): Array<number>
}

Array.prototype.remove = function(o, eq) {
	if (!eq)
		eq = (compareValue: any) => o == compareValue
	var index = -1
	for (var i = 0; i < this.length; i++) {
		if (eq(this[i])) {
			index = i
			break
		}
	}
	if (index != -1) {
		this.splice(index, 1)
		return true
	}
	return false
}

Array.createEmpty = function(length) {
	var array = []
	for (let i = 0; i < length; i++) {
		array.push(undefined)
	}
	return array
}

Array.createNumeric = function(length, from = 0) {
	return [...Array(length)].map((_, i) => i + from)
}