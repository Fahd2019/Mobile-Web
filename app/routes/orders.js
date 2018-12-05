var orders = require('./../controllers/orders.js');

module.exports = function(app) {
    app.get('/orders', orders.list)
    app.route('/orders/create').get(orders.renderCreate).post(orders.create);

    app.route('/orders/:ordersId').get(orders.read)
      .put(orders.update).delete(orders.delete);

    app.get('/orders/:ordersId/delete', orders.renderDelete)

    app.param('ordersId', orders.orderByID);
};
