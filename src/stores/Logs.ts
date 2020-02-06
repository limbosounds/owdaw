import { observable } from "mobx"

export type LogMessageType = "info" | "warning" | "error"

export type LogMessage = {
	type: LogMessageType,
	message: string,
	timestamp: number
}

class LogsStore {
	types: LogMessageType[] = ["info", "warning", "error"]

	@observable items
		: LogMessage[]
		= []

	push = (
		message: string, 
		type: LogMessageType
	) => {
		this.items.push({
			type,
			message,
			timestamp: Date.now()
		})
	}

	count = (
		type: LogMessageType
	): number => {
		return this.items.filter(item => item.type == type).length
	}
}

export default new LogsStore()