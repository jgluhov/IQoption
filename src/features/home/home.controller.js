/**
 * Created by jgluhov on 29/01/16.
 */

export default class HomeController {
	constructor(randomNames) {
		this.random = randomNames;
		this.name = 'JGluhov';
	}

	randomName() {
		this.name = this.random.getName();
	}
}

HomeController.$inject = ['randomNames'];
