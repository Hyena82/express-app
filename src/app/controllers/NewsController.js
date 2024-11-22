
class NewsController {
  // [GET] /news
  async index(req, res) {
    res.send('[GET] /news');
  }

  // [GET] /news/:slug
  async show(req, res) {
    res.send('[GET] /news/:slug');
  }
}

module.exports = new NewsController();