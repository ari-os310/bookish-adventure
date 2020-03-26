function bodyDebugMiddleware(req, _, next) {
  if (req.is('json')) {
    console.log(`
>> ${req.method} ${req.path} body:
\t ${JSON.stringify(req.body)}
<< end of body.`);
  }
  next();
}

module.exports = bodyDebugMiddleware;
