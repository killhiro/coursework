class Animal {
	constructor(name) {
		this.name = name
	}
	run() {
		console.log(`${this.name} бежит.`)
	}
}
class Rabbit extends Animal {
	hide() {
		super()
		console.log(`${this.name} прячется.`)
		super.run()
	}
}

let rabbit = new Rabbit()
rabbit.hide()
