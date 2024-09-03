const { Op } = require("sequelize");
const { trimmedValue, formatTitle } = require("../helper/functions");
const { Category } = require("../helper/relation");

exports.getAllCategory = async (req, res) => {
  try {
    const datas = await Category.findAll();
    if (!datas.length) {
      return res.status(404).json({ msg: "Not found data" });
    }

    const updatedDatas = datas.map((category) => ({
      ...category.toJSON(),
      isHots: category.isHots === 0 ? false : true,
    }));

    res
      .status(200)
      .json({ status: 200, total: updatedDatas.length, datas: updatedDatas });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const { title, isHots } = req.body;

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

   

    const newCategory = await Category.create({
      title: formatTitle(title),
      isHots: isHots || false,
    });

    res
      .status(201)
      .json({ status: 201, msg: "Category created", data: newCategory });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.query;
    const { title, isHots } = req.body;

    const existingCategory = await Category.findByPk(id);

    if (!existingCategory) {
      return res.status(404).json({ status: 404, msg: "Category not found" });
    }

    const conflictingCategory = await Category.findOne({
      where: {
        title: title.toLowerCase(),
        id: {
          [Op.ne]: id,
        },
      },
    });

    if (conflictingCategory) {
      return res
        .status(409)
        .json({ status: 409, msg: "Category with this title already exists" });
    }

    const formatTitle =
      title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();

    const updateData = {
      title: formatTitle || existingCategory.title,
      isHots: isHots !== undefined ? isHots : existingCategory.isHots,
    };

    await existingCategory.update(updateData);

    res.status(200).json({
      status: 200,
      msg: "Category updated successfully",
      data: existingCategory,
    });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
};
