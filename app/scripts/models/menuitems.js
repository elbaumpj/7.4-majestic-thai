var Backbone = require('backbone');

var MenuItem = Backbone.Model.extend({
  idAttribute: '_id'
});

var MenuItemCollection = Backbone.Collection.extend({
  model: MenuItem,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/petermajesticthai'
});

module.exports = {
  MenuItem: MenuItem,
  MenuItemCollection: MenuItemCollection
};
