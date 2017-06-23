import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import 'purecss';
import Button from './button';
import img1 from './images/IMG_358113.jpg';
import Jobs from './jobs';
import './main.scss';

/*
export default class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>Hello, world!</h1>
        <Link to="/redux">Link to simple redux example.</Link>
        <p className="output">The time now is: <span>{moment().format()}</span></p>
        <Button />
        <p>Image Example:</p>
        <p><img src={img1} alt="image example" /></p>
        <Jobs />
      </div>
    );
  }
}
*/

export default function () {
  return (
    <div className="main">
      <h1>Hello, world!</h1>
      <Link to="/redux">Link to simple redux example.</Link>
      <p className="output">The time now is: <span>{moment().format()}</span></p>
      <Button />
      <p>Image Example:</p>
      <p><img src={img1} alt="example" /></p>
      <Jobs />
    </div>
  );
}
