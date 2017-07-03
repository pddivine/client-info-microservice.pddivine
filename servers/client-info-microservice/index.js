module.exports = microservice;

function microservice (app) {
  // TODO require all routers.
  require('./routers/client-info')(app);
}