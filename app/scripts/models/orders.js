var Backbone = require('backbone');

var Order = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: 'https://tiny-lasagna-server.herokuapp.com/collections/petermajesticthaiorders'
});

var OrderItem = Backbone.Model.extend({
  idAttribute: '_id'
});

var OrderCollection = Backbone.Collection.extend({
  model: OrderItem,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/petermajesticthaiorders'
});


module.exports = {
  Order: Order,
  OrderItem: OrderItem,
  OrderCollection: OrderCollection
};
