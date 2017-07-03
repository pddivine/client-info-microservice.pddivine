module.exports = routing;
function routing (app){

  app.get('/client-info', (req, res, next) => {
    console.log(res)
    const userInformation = {
      ip:{
        determined: req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress,
        headers: {
          'x-forwarded-for': req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'] : null
        },
        connection: {
          remoteAddress: req.connection && req.connection.remoteAddress ? req.connection.remoteAddress : null,
          socket: req.connection && req.connection.socket ? req.connection.socket : null
        },
        socket: {
          remoteAddress: req.socket && req.socket.remoteAddress ? req.socket.remoteAddress : null,
        }
      },
      headers: req.headers
    };
    return res.status(200).send(userInformation);
  });

}