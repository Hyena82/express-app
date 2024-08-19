class SiteController {
  // [GET] /
  index(req, res) {
    res.send('Hello let become fullstack </>');
  }

  // [GET] /search
  search(req, res) {
    res.send('Lets search something');
  }
}

module.exports = new SiteController;