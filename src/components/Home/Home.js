import React, { Component } from "react";
import { Link } from "react-router-dom";

//SUB-ROUTES! A ROUTE INSIDE OF A ROUTE! EXAMPLE? <Route path={props.match.path + '/foo'} /> PROPS will take from the *LOGIN* path if that is the parent component.... ???

export default class Home extends Component {
  render() {
    return (
      <div className="box">
        <Link to="/classlist/MATH1010">
          <button className="btn">Math 1010</button>
        </Link>
        <Link to="/classlist/ENG1010">
          <button className="btn">English 2010</button>
        </Link>
        <Link to="/classlist/BIO2020">
          <button className="btn">Biology 2020</button>
        </Link>
      </div>
    );
  }
}
