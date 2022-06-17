const convert = require('../service/converter');

exports.convert = (req, res) => {
  try {
    const result = convert(req.query.input);
    res.status(201).json({
      result
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
