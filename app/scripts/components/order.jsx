var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');


var OrderComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleSubmit: function(e){
    e.preventDefault();

  },
  render: function() {
    var OrderedItems = this.props.currentOrders.map(function(item){
      var itemName = item.get('name');
      var itemPrice = item.get('price');
      return(
        <div key={item._id}>
          <li>{itemName}</li>
          <li>{itemPrice}</li>
        </div>
      )
      var subtotal = this.props.currentOrders.reduce(function(previous, current){
        previous+=item.get('price');
      }, 0)
    });
    return(
      <nav>
        <h4>Your Order</h4>
        <span>Item</span><span>Price</span>
        <ul>
          {OrderedItems}
        </ul>
        <span>Subtotal:</span><span>{subtotal}</span>
        <button type="submit" onClick="handleSubmit">Place Order</button>
      </nav>
    );
  }
});


module.exports = {
  OrderComponent: OrderComponent
}
