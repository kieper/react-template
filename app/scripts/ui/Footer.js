'use strict';

var React = require('react');

let Footer = React.createClass({
    render() {
        return <footer>
            <div className="row">
                <div className="col-lg-12">
                    <p>Copyright &copy; Your Website 2014</p>
                </div>
            </div>
        </footer>
    }
});


module.exports = Footer;
