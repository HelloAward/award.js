const EventEmitter = require("events");
const WebSocket = require("ws");

module.exports = class Award extends EventEmitter {
	constructor(options = {}) {
		super();
		this.ws = new WebSocket("wss://awardbot-demo.herokuapp.com/v1/gateway?i=" + JSON.stringify(options.intents) + (options.guild ? ("&g=" + options.guild) : ""));

		this.ws.on("message", msg => {
			const message = JSON.parse(msg.toString());
			if (message.type == "ERROR") throw new Error("(!) " + message.message);
			if (message.type == "CONNECT") return this.emit("ready");

			const _event = message.type
				.toLowerCase()
				.split("_")
				.map((part, index) => {
					if (index == 0) return part;
					return part.charAt(0).toUpperCase() + part.slice(1);
				});

			this.emit(_event.join(""), message.data);
		});
	};
};
