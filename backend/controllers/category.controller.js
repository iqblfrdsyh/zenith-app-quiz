const { trimmedValue } = require("../helper/functions");
const { Category } = require("../helper/relation");

exports.getAllCategory = async (req, res) => {
  try {
    const datas = await Category.findAll();
    if (!datas.length) {
      return res.status(404).json({ msg: "Not found data" });
    }

    res.status(200).json({ status: 200, total: datas.length, datas });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ status: 400, msg: "Title is required" });
    }

    if (trimmedValue(title)) {
      return res
        .status(400)
        .json({ status: 400, msg: "Title can't be just whitespace" });
    }

    const existingCategory = (await Category.findAll()).map((data) =>
      data.title.toLowerCase()
    );
    if (existingCategory.includes(title.toLowerCase())) {
      return res
        .status(409)
        .json({ status: 409, msg: "Category already exists" });
    }

    const newCategory = await Category.create({ title });

    res
      .status(201)
      .json({ status: 201, msg: "Category created", data: newCategory });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
};
