/**
 * Created by jgluhov on 29/01/16.
 */
export default class RandomNames {
  constructor() {
    this.names = ['John', 'Elisa', 'Mark', 'Annie'];
  }

  getName ()  {
    let totalNames = this.names.length;
    let randomIndex = Math.floor(Math.random() * totalNames);
    return this.names[randomIndex];
  };
}


