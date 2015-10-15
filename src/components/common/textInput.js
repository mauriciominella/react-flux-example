"use strict";

var React = require('react');

var Input = React.createClass({
    render: function(){
      return (
          <div className={wrapperclass}>
            <label htmlFor={this.props.name}>{this.props.label}</label>
            <div className="field">
              <input type="text"
                name={this.prop.name}
                className="form-control"
                placeholder={this.props.placeholder}
                ref={this.props.name}
                value={this.props.onChange} />
              <div className="input">{this.props.error}</div>
            </div>
          </div>
      );
    }
});

module.exports = Input;
