const { trimmedValue } = require("../helper/functions");
const { Topic, Category, CategoryTopic } = require("../helper/relation");

exports.getAllTopic = async (req, res) => {
  try {
    const datas = await Topic.findAll();
    if (!datas.length) {
      return res.status(404).json({ msg: "Not found data" });
    }

    return res.status(200).json({ status: 200, total: datas.length, datas });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
};

exports.createTopic = async (req, res) => {
  try {
    const { title, categoryId } = req.body;

    if (trimmedValue(title) || trimmedValue(categoryId)) {
      return res
        .status(400)
        .json({ status: 400, msg: "Can't be just whitespace" });
    }
    const ExistingTopics = (await Topic.findAll()).map((data) =>
      data.title.toLowerCase()
    );

    if (ExistingTopics.includes(title.toLowerCase())) {
      return res.status(400).json({ status: 400, msg: "Data already exists" });
    }

    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ status: 404, msg: "Category not found" });
    }

    const newTopic = await Topic.create({ title });

    await CategoryTopic.create({ categoryId, topicId: newTopic.id });

    return res
      .status(201)
      .json({ status: 201, msg: "Topic created", data: newTopic });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
};
