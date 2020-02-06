interface Date {
	format(): string
}

Date.prototype.format = function() {
	const self = this as Date
	return self.toLocaleDateString("en", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit"
	}) + ", " + self.toLocaleTimeString("en", {
		hour12: false,
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	}) + "." + `${self.getMilliseconds()}`.padStart(3, "0")
}