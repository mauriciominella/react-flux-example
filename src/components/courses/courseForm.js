"use strict";

var React = require('react');
var Input = require('../common/textInput');
var PropTypes = React.PropTypes;

var CourseForm = React.createClass({
  propTypes: {
      course: React.PropTypes.object.isRequired,
      onSave: React.PropTypes.func.isRequired,
      onChange: React.PropTypes.func.isRequired,
      errors: React.PropTypes.object
  },

  render: function() {
    var createAuthorOption = function(author){
          return (

          );
    };


    return (
      <form>
          <h1>Manage Course</h1>
          <Input
              name="title"
              label="Title"
              placeholder="Title"
              value={this.props.course.title}
              onChange={this.props.onChange}
              error={this.props.errors.title} />

          <Input
              name="category"
              label="Category"
              placeholder="Category"
              value={this.props.course.category}
              onChange={this.props.onChange}
              error={this.props.errors.category} />

            <select>

            </select>

            <Input
                name="length"
                label="Length"
                placeholder="Length"
                value={this.props.course.length}
                onChange={this.props.onChange}
                error={this.props.errors.length} />

            <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
      </form>
    );
  }

});

module.exports = CourseForm;
