"use strict";

var React = require('react');
var PropTypes = React.PropTypes;

var DropDownList = React.createClass({
  PropTypes:{
      dataSource: React.PropTypes.array.isRequired,
      onChange: React.PropTypes.func.isRequired,

  },


  render: function() {
    return (
      <div />
    );
  }

});

module.exports = DropDownList;
