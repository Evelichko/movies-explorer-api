const rateLimiter = require('express-rate-limit');

const limiter = rateLimiter({
  windowMs: 10000,
  max: 100,
  message: 'Количество запросов на сервер превышено. Попробуйте зайти позже',
});

module.exports = limiter;
