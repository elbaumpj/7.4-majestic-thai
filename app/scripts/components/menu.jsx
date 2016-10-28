//3rd party imports
var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');

//local imports
var MenuItemCollection = require('../models/menuitems').MenuItemCollection;

//components

var MenuComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var collection = this.getCollection();
    var menuItemsList = collection.map(function(item){
      return
      <li className='well' key={message.get('_id') || message.cid}>
        <h3>{item.get('name')}</h3>
        <p>{item.get('description')}</p>
        <span>{item.get('price')}</span>
      </li>
    });
    return(
      <div>
        <ul>
          {menuItemsList}
        </ul>
      </div>
    );
  }
});

var MenuContainer = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function() {
    return(
      <MenuComponent />
    );
  }
});

module.exports = {
  MenuContainer: MenuContainer
}
