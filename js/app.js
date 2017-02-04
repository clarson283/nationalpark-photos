import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import GMap from './components/map.js';

class App extends React.Component {
   render() {
      return (
         <div id="map-container">
            <GMap mlat="39.0119" mlong="-98.4842"/>
         </div>
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