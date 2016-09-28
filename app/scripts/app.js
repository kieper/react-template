var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    Timer = require("./ui/Timer"),
    Footer = require("./ui/Footer"),
    Content = require("./ui/Content"),
    Navigation = require("./ui/Navigation"),
    mountNode = document.getElementById("app");

var activeComponent = require("react-router-active-component");
var Route = require("react-router/lib/Route");
var Router = require("react-router/lib/Router");
var IndexRoute = require("react-router/lib/IndexRoute");
var hashHistory = require("react-router/lib/hashHistory");

let NavItem = activeComponent('li');
let ActivePara = activeComponent('p', {link: false});

let App = React.createClass({
    render() {
        return <div>
            <Navigation/>
            <div className="container">
                {this.props.children}
                <Footer/>
            </div>
        </div>
    }
});

let Services = React.createClass({
   render() {
       return <div>
           Hello services tab it is
       </div>
   }
});

ReactDOM.render(<Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Content}/>
            <Route path="services" component={Services} />
        </Route>
    </Router>,
    mountNode);

