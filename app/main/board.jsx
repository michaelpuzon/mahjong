import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import 'purecss';
import { init, initPick, pick } from './lib/server';
import './main.scss';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { tiles: [ 'A', 'B', 'C', 'D', 'E' ] };
    this.state = {
      tiles: [],
      lifted: [],
      mode: 'pick' // either pick or discard
    };
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.currentTile = 'A';
  }

  componentDidMount() {
    init();
    let tiles = initPick();
    const lifted = [];

    // move flower tiles to lifted
    tiles = tiles.filter((tile) => {
      if (tile.type === 'flower') {
        lifted.push(tile);
        return false;
      }
      return tile;
    });

    this.setState({ tiles, lifted });
    // pick again for flower tiles
    lifted.forEach(() => {
      this.pick();
    });
  }

  pick() {
    const newTile = pick();
    console.log(newTile);
    if (newTile.type === 'flower') {
      // add to flowers
      this.setState((prevState) => {
        const lifted = prevState.lifted.slice();
        lifted.push(newTile);
        return { lifted };
      });
      // pick again
      this.pick();
    } else {
      // add to main
      this.setState((prevState) => {
        const tiles = prevState.tiles.slice();
        tiles.push(newTile);
        return { tiles };
      });
    }
  }

  handleDragStart(e, tile) {
    this.currentTile = tile;
    // move this over to state management
    // e.target.style.opacity = '0.4';
  }

  handleDragEnter(e) {
    // this / e.target is the current hover target.
    // move this over to state management
    // e.target.classList.add('over');
  }

  handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault(); // Necessary. Allows us to drop.
    }

    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
    return false;
  }

  handleDragLeave(e) {
    e.target.classList.remove('over');  // this / e.target is previous target element.
  }

  handleDrop(e, tile) {
    // this / e.target is current target element.
    if (tile.id !== this.currentTile.id) {
      // call reorder tiles
      const newArray = this.state.tiles.map((tileIndex) => {
        if (tileIndex.id === this.currentTile.id) {
          console.log(tileIndex);
          console.log(this.currentTile);
          return tile;
        }
        if (tileIndex.id === tile.id) {
          console.log(tileIndex);
          console.log(tile);
          return this.currentTile;
        }
        return tileIndex;
      });
      this.setState({ tiles: newArray });
    }

    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }

    // See the section on the DataTransfer object.

    return false;
  }

  handleDragEnd(e) {
    // this/e.target is the source node.
    var cols = document.querySelectorAll('#columns .column');
    console.log(cols);

    [].forEach.call(cols, function (col) {
      col.classList.remove('over');
      col.style.opacity = '1.0';
    });
  }

  render() {
    return (
      <div className="main">
        <div className="userTiles">
          <div id="lifted" className="group">
            { this.state.lifted.map((tile) => {
              const imgPath = `/static/tiles/${tile.tile}.png`;
              return (
                <div className="column">
                  <header>{tile.tile}</header>
                  <img src={imgPath} />
                </div>
              );
            } ) }
          </div>
          <div id="columns" className="group">
            { this.state.tiles.map((tile) => {
              const imgPath = `/static/tiles/${tile.tile}.png`;
              return (
                <div
                  key={tile.id}
                  className="column"
                  draggable
                  onDragStart={e => this.handleDragStart(e, tile)}
                  onDragEnter={this.handleDragEnter}
                  onDragLeave={this.handleDragLeave}
                  onDragOver={this.handleDragOver}
                  onDrop={e => this.handleDrop(e, tile)}
                  onDragEnd={this.handleDragEnd}
                >
                  <header>{tile.tile}</header>
                  <img src={imgPath} />
                </div>
              );
            }) }
          </div>
        </div>
        <div className="actions">
          <button>pick</button>
          <button>discard</button>
        </div>
      </div>
    );
  }
}

