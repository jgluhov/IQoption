/**
 * Created by jgluhov on 29/01/16.
 */
export default class HomeController {
  constructor(randomNames) {
    this.random = randomNames;
    this.name = "World";
  }

  changeName() {
    this.name = "JGluhov is the best programmer all over the world!"
  }

  randomName() {
    this.name = this.random.getName();
  }
}

HomeController.$inject = ['randomNames'];