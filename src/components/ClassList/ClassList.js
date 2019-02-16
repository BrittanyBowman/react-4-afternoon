import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default class ClassList extends Component {
  constructor() {
    super();

    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${ this.props.match.params.class }`).then( results => {
      this.setState({
        students: results.data
      });
    });
  }

  // BELOW: we are using map to render each student's first and last name in an <h3> element. React requires a unique KEY, I've always used "id" before, but here we are using the "index of the map", which I do not understand. What is the "index of the map"? See also { students } under the <h2>ClassList:, where we are RENDERING the <h3> element information of first and last name of each DIFFERENT student from the json API.
  render() {
    const students = this.state.students.map((student, i) => (
      <Link to={`/student/${student.id}`} key={ i }>
        <h3>{ student.first_name } { student.last_name }</h3>
      </Link>
    ));
    /*update the h1 element to display the current class. Just like how we accessed the route parameter for our axios request, we can do the same thing here IN the h1 using { } in our JSX.*/
    return (
      <div className='box'>
        <h1>{ this.props.match.params.class }</h1>
        <h2>ClassList:</h2>
        { students }
      </div>
    )
  }
}
