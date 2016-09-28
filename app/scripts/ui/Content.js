'use strict';

let SearchBar = require('./SearchBar');
let Well = require('./Well');

let Content = React.createClass({
    render() {
        return <div className="row">
            <div className="col-md-8">
                <h1 className="page-header">
                    Page Heading
                    <small>Secondary Text</small>
                </h1>
                <h2>
                    <a href="#">Blog Post Title</a>
                </h2>
                <p className="lead">
                    by <a href="index.php">Start Bootstrap</a>
                </p>
                <p>
                    <span className="glyphicon glyphicon-time"></span>
                    Posted on August 28, 2013 at 10:00 PM
                </p>
                <hr></hr>
                <img className="img-responsive" src="http://placehold.it/900x300" alt=""></img>
                <hr></hr>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore
                    nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.
                </p>
                <a className="btn btn-primary" href="#">
                    Read More
                    <span className="glyphicon glyphicon-chevron-right"></span>
                </a>
                <hr></hr>
            </div>
            <div className="col-md-4">
                <SearchBar/>
                <Well/>
            </div>
        </div>
    }
});

module.exports = Content;
