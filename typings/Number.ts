interface Number {
	asDateString(): string
}

Number.prototype.asDateString = function() {
	return new Date(this).format()
}