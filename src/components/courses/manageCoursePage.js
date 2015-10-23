"use strict";

var React = require('react');
var Router = require('react-router');
//var AuthorForm = require('./couseForm');
var toastr = require('toastr');

var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');

var ManageCoursePage = React.createClass({
  mixins:[
      Reouter.Navigation
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
        }
          errors: {},
          dirty: false
      };
  },

  render: function() {
    return (
      <div />
    );
  }

});

module.exports = ManageCoursePage;
