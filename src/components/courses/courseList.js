"use strict";

var React = require('react');
var toastr = require('toastr');
var Router = require('react-router');
var Link = Router.Link;
var CourseActions = require('../../actions/CourseActions');
var PropTypes = React.PropTypes;

var CourseList = React.createClass({
  propTypes: {
    courses : React.PropTypes.array.isRequired
  },

  deleteCourse: function(id, event){
      event.preventDefault();
      CourseActions.deleteCourse(id);
      toastr.success('Course Deleted');
  },


  render: function() {
    var createCourseRow = function(course){
        return (
            <tr key={course.id}>
              <td><a href="#" onClick={this.deleteCourse.bind(this, course.id)}>Delete</a></td>
              <td>
                <Link to="manageAuthor" params={{id: course.id}}>{course.id}</Link>
              </td>
              <td>{course.title}</td>
              <td>{course.author.name}</td>
              <td>{course.category}</td>
              <td>{course.length}</td>
            </tr>
        );
    };

    return (
      <div>
        <table className="table">
          <thread>
              <th>Delete</th>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Length</th>
          </thread>
          <tbody>
              {this.props.courses.map(createCourseRow, this)}
          </tbody>
        </table>
      </div>
    );
  }

});

module.exports = CourseList;
