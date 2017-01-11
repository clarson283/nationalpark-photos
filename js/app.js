import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

// import LoginHandler from './components/Login.js';

class App extends React.Component {
   render() {
     return (
      //  <div className="nav">
      //    <Link to="app">Home</Link>
      //    <Link to="login">Login</Link>
       //
      //    {/* this is the importTant part */}
      //    <RouteHandler/>
      //  </div>
         <div>I DID IT!!</div>
     );
   }
}

// let routes = (
//   <Route name="app" path="/" handler={App}>
//     <Route name="login" path="/login" handler={LoginHandler}/>
//   </Route>
// );

// Router.run(routes, function (Handler) {
//   React.render(<Handler/>, document.body);
// });

ReactDOM.render(<App/>, document.getElementById('root'));

// ReactDOM.render(<Router>{routes}</Router>, document.getElementById('App'))