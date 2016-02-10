/**
 * Created by jgluhov on 29/01/16.
 */
export default class RandomNames {
	constructor() {
		this.names = ['John', 'Elisa', 'Mark', 'Annie', 'Vasya'];
	}

	getName() {
		const totalNames = this.names.length;
		const randomIndex = Math.floor(Math.random() * totalNames);
		return this.names[randomIndex];
	}
}


