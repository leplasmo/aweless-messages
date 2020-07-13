// Initializes the `messages` service on path `/messages`
const { Message } = require('./messages.class');
const hooks = require('./messages.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate'),
  };

  // Initialize our service with any options it requires
  app.use('/messages', new Message(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('messages');

  service.hooks(hooks);
};
