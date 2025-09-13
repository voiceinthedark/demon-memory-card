/**
 * @class Shuffler
 * @classdesc Used to shuffle the cards
 * */
class Shuffler {
  constructor() {

  }

  /**
   * Static method shuffle to shuffle an array in place
   * */
  static shuffle(array) {
    // Fisher-Yates shuffle algorithm
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;

  }
}

export default Shuffler
