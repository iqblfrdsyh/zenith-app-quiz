const { trimmedValue, formatTitle } = require("../helper/functions");
const { Topic, Category, CategoryTopic } = require("../helper/relation");

exports.getAllTopic = async (req, res) => {
  try {
    const datas = await Topic.findAll({
      include: [
        {
          model: Category,
          through: { attributes: [] },
          attributes: ["id", "title"],
          as: "categories",
        },
      ],
    });

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
      return res.status(409).json({ status: 409, msg: "Data already exists" });
    }

    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ status: 404, msg: "Category not found" });
    }

    const newTopic = await Topic.create({ title: formatTitle(title) });

    await CategoryTopic.create({ categoryId, topicId: newTopic.id });

    const createdTopic = await Topic.findByPk(newTopic.id, {
      include: [
        {
          model: Category,
          through: { attributes: [] },
          attributes: ["id", "title"],
          as: "categories",
        },
      ],
    });

    const formattedTopic = {
      id: createdTopic.id,
      title: createdTopic.title,
      categories: createdTopic.categories,
    };

    return res.status(201).json({
      status: 201,
      msg: "Topic created",
      datas: formattedTopic,
    });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
};

exports.updateTopic = async (req, res) => {
  try {
    const { id } = req.query;
    const { title, categoryId } = req.body;

    const topic = await Topic.findByPk(id, {
      include: [
        {
          model: Category,
          through: { attributes: [] },
          attributes: ["id", "title"],
          as: "categories",
        },
      ],
    });

    if (!topic) {
      return res.status(404).json({ status: 404, msg: "Topic not found" });
    }

    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ status: 404, msg: "Category not found" });
    }

    await topic.update({ title: formatTitle(title) || topic.title });

    await CategoryTopic.destroy({
      where: { topicId: id },
    });

    await CategoryTopic.create({
      categoryId: categoryId || category.id,
      topicId: id,
    });

    const updatedTopic = await Topic.findByPk(id, {
      include: [
        {
          model: Category,
          through: { attributes: [] },
          attributes: ["id", "title"],
          as: "categories",
        },
      ],
    });

    const formatUpdatedTopic = {
      id: updatedTopic.id,
      title: updatedTopic.title,
      categories: updatedTopic.categories,
    };

    return res.status(200).json({
      status: 200,
      msg: "Topic updated",
      datas: formatUpdatedTopic,
    });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
};
