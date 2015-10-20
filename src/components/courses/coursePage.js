"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var CoursePage = React.createClass({
    render: function(){
      return (
        <div className="jumbotron">
          <h1>Pluralsight Administration</h1>
          <p>This is the course page. Here we need to add the course list</p>
          <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
        </div>
      );
    }
});

module.exports = CoursePage;
