//3rd party imports
var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');

//local imports
var MenuItemCollection = require('../models/menuitems').MenuItemCollection;

//components

var MenuComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleItemClick: function(item){
    console.log(item.get('price')); //potential toJSON();
  },
  render: function(){
    var collection = this.getCollection();
    console.log(collection);
    var menuItemsList = collection.map(function(item){
      var handleItemClick = this.handleItemClick.bind(this, item);
      return(
      <li className="well" key={item.get('_id') || item.cid}>
        <h3>{item.get('name')}</h3>
        <p>{item.get('description')}</p>
        <a href="#" onClick={handleItemClick}><span>{item.get('price')}</span></a>
      </li>
    );
  }.bind(this));
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
  getDefaultProps: function(){
    var collection = new MenuItemCollection();
    collection.fetch();
    return{
      collection: collection
    }
  },
  render: function() {
    return(
      <MenuComponent />
    );
  }
});

module.exports = {
  MenuContainer: MenuContainer
}
