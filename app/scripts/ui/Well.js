'use strict';

let React = require('react');


let Well = React.createClass( {

    render() {
        return <div className="well">
            <h4>Blog Categories</h4>
            <div className="row">
                <div className="col-lg-6">
                    <ul className="list-unstyled">
                        <li><a href="#">Category Name</a>
                        </li>
                        <li><a href="#">Category Name</a>
                        </li>
                        <li><a href="#">Category Name</a>
                        </li>
                        <li><a href="#">Category Name</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul className="list-unstyled">
                        <li><a href="#">Category Name</a>
                        </li>
                        <li><a href="#">Category Name</a>
                        </li>
                        <li><a href="#">Category Name</a>
                        </li>
                        <li><a href="#">Category Name</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    }
});

module.exports = Well;
