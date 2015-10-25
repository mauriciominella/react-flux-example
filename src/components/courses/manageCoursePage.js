"use strict";

var React = require('react');
var Router = require('react-router');
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

  courseFormIsValid: function(){
      var formIsValid = true;
      this.state.errors = {}; //clear any previous errors.

    /*  if(this.state.author.firstName.length < 3){
          this.state.errors.firstName = 'First name must be at least 3 characters.';
          formIsValid = false;
      }

      if(this.state.author.lastName.length < 3){
          this.state.errors.lastName = 'Last name must be at least 3 characters.';
          formIsValid = false;
      }*/

      this.setState({errors: this.state.errors});
      return formIsValid;
  },
  saveCourse: function(event){
      event.preventDefault();

    /*  if(!this.authorFormIsValid()){
        return;
      }*/

      if(this.state.course.id){
          CourseActions.updateCourse(this.state.course);
      }else{
          CourseActions.createCourse(this.state.course);
      }

      this.setState({dirty: false});
      toastr.success('Course saved.');
      this.transitionTo('courses');
  },

  render: function() {
    return (
      <div>
        <CourseForm course={this.state.course}
            onSave={this.saveCourse}
            onChange={this.setCourseState}
            errors={this.state.errors} />
      </div>
    );
  }

});

module.exports = ManageCoursePage;
