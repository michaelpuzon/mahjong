import {flowerTiles, mainTiles} from './tiles';

let tiles = [];
let userTiles = [];

function shuffle(array) {
  var i = 0
    , j = 0
    , temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export function init() {
  let indexId = 0;
  let type = 'main';

  [1, 2, 3, 4].forEach(() => {
    mainTiles.forEach((tile) => {
      tiles.push({
        tile,
        id: indexId,
        type
      });
      indexId += 1;
    });
  });

  type = 'flower';
  flowerTiles.forEach((tile) => {
    tiles.push({
      tile,
      id: indexId,
      type
    });
    indexId += 1;
  });
  shuffle(tiles);
  // console.log(tiles);
}

export function initPick() {
  userTiles = tiles.splice(0, 16);
  return userTiles;
  console.log(userTiles);
}

export function pick() {
  const newTile = tiles.splice(0, 1);
  userTiles.push(newTile[0]);
  return newTile[0];
}
