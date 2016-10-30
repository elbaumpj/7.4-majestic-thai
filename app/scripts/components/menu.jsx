//3rd party imports
var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');

//local imports
var MenuItemCollection = require('../models/menuitems').MenuItemCollection;
var OrderCollection = require('../models/orders').OrderCollection;
var Orders = require('./order.jsx').OrderComponent;
//components

var MenuComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function() {
    var currentOrders = new OrderCollection();
    return {
      currentOrders: currentOrders
    }
  },
  handleItemClick: function(item){
    // console.log(item.get('price')); //potential toJSON();
    var currentMenuItem = item.toJSON();

    this.state.currentOrders.add([currentMenuItem]); //tip from Mady here
    this.setState({currentOrders: this.state.currentOrders});
  },
  render: function(){
    var collection = this.getCollection();
    var menuItemsList = collection.map(function(item){
      var handleItemClick = this.handleItemClick.bind(this, item);
      return(
      <li className="well" key={item.get('_id') || item.cid}>
        <h3>{item.get('name')}</h3>
        <p>{item.get('description')}</p>
        <a href="#" onClick={handleItemClick}><span>{item.get('price')}</span></a>
      </li>
    );
  }.bind(this)); //help from Mady on the bind
    return(
      <div>
        <div className="col-md-8">
          <ul>
            {menuItemsList}
          </ul>
        </div>
        <div className="col-md-4">
          <Orders currentOrders={this.state.currentOrders} />
        </div>
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
      <MenuComponent  />
    );
  }
});

module.exports = {
  MenuContainer: MenuContainer
}
