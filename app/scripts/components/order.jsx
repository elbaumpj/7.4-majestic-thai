var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');


var OrderComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function() {
    return(
      <nav>
        <h4>Your Order</h4>
        <span>Item</span><span>Price</span>
      </nav>
    );
  }
});


module.exports = {
  OrderComponent: OrderComponent
}
