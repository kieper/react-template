'use strict';

let React = require('react');

let SearchBar = React.createClass({

    render() {
        return <div className="well">
            <h4>Blog Search</h4>
            <div className="input-group">
                <input type="text" className="form-control"/>
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button">
                                <span className="glyphicon glyphicon-search"></span>
                            </button>
                        </span>
            </div>
        </div>
    }
});

module.exports = SearchBar;
