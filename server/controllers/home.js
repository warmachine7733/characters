module.exports = {
    home: async (req, res, next) => {
      try {
        res.status(200).json("characters Api");
      } catch (err) {
        res.status(404).json("not found");
      }
    }
}