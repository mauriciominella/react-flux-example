"use strict";

var React = require('react');
var PropTypes = React.PropTypes;

var CourseForm = React.createClass({

  render: function() {
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

            <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
      </form>
    );
  }

});

module.exports = CourseForm;
