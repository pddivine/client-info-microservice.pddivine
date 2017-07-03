module.exports = servers;

function servers (app) {
  require('./client-info-microservice')(app);
  // TODO: load servers

}
