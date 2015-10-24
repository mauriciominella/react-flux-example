"use strict";

var React = require('react');
var Router = require('react-router');
//var AuthorForm = require('./couseForm');
var toastr = require('toastr');

var CourseForm = require('./courseForm');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');

var ManageCoursePage = React.createClass({
  mixins: [
      Router.Navigation
  ],

  statics: {
    willTransitionFrom: function(transition, component){
        if(component.state.dirty && !confirm('Leave without saving?')){
            transition.abort();
        }
    }
  },

  getInitialState: function(){
      return {
        course: {
          id: '',
          title: '',
          watchHref: '',
          author: null,
          length: '',
          category: '',
        },
        errors: {},
        dirty: false
      }
  },

  componentWillMount: function(){
      var courseId = this.props.params.id; // from the path '/author:id'

      if(courseId){
          this.setState({course: CourseStore.getCourseById(courseId)});
      }
  },

  setCourseState: function(event){
      this.setState({dirty: true});
      var field = event.target.name;
      var value = event.target.value;
      this.state.course[field] = value;
      return this.setState({course: this.state.course});
  },

  render: function() {
    return (
      <div>
        <CourseForm />
      </div>
    );
  }

});

module.exports = ManageCoursePage;
