class NewsController {
  // [GET] /news
  index(req, res) {
    res.send('news url');
  }

  // [GET] /news/:slug
  show(req, res) {
    res.send('News Detail');
  }
}

module.exports = new NewsController;