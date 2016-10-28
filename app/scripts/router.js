//3rd party imports
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

//local imports
var MenuContainer = require('./components/menu.jsx').MenuContainer;
var MenuItemCollection = require('./models/menuitems.js').MenuItemCollection;

// router
var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function() {
    ReactDOM.render(
      React.createElement(MenuContainer),
      document.getElementById('app')
    );
  }
});



var router = new AppRouter();

module.exports = {
  router: router
};
