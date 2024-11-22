const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course');

function routers(app) {
  app.use('/news', newsRouter); // Use app.use to mount the news router
  app.use('/course', courseRouter); // Use app.use to mount the course router
  app.use('/', siteRouter); // Use app.use to mount the site router
}

module.exports = routers;