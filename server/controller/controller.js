module.exports = {
  get: (req, res) => {
    req.app
      .get("db")
      .get_all()
      .then(photos => {
        console.log(photos);
        res.status(200).json(photos);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  update: (req, res) => {
    let { id } = req.params;
    let { url, name, price } = req.body;
    req.app
      .get("db")
      .update([id, url, name, price])
      .then(photo => {
        console.log(photo);
        res.status(200).json(photo);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  create: (req, res) => {
    let { url, name, price } = req.body;
    req.app
      .get("db")
      .create_photo([url, name, price])
      .then(photo => {
        console.log(photo);
        res.status(200).json(photo);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  delete: (req, res) => {
    let { id } = req.params;
    req.app
      .get("db")
      .delete([id])
      .then(photo => {
        console.log(photo);
        res.status(200).json(photo);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
};
