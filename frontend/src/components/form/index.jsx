import { Checkbox, Input, Select, SelectItem, Button } from "@nextui-org/react";
import React, { useState, useEffect } from "react";

const Forms = {
  CategoryForm: ({ onSubmit, initialData = {}, onCancel }) => {
    const [name, setName] = useState(initialData.title || "");
    const [isHots, setIsHots] = useState(initialData.isHots || false);

    useEffect(() => {
      setName(initialData.title || "");
      setIsHots(initialData.isHots || false);
    }, [initialData]);

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ id: initialData.id, name, isHots });
    };

    return (
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <div>
          <label
            htmlFor="categoryName"
            className="block text-sm font-medium text-gray-700"
          >
            Add Category
          </label>
          <Input
            type="text"
            id="categoryName"
            label="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isRequired
            size="sm"
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm"
          />
          <Checkbox
            isSelected={isHots}
            className="ml-1 my-2"
            onChange={() => setIsHots(!isHots)}
          >
            Hots
          </Checkbox>
        </div>
        <div className="flex space-x-2">
          <Button type="submit" color="success" auto>
            {initialData.id ? "Update" : "Add"} Category
          </Button>
          {initialData.id && (
            <Button type="button" color="warning" auto onClick={onCancel}>
              Cancel
            </Button>
          )}
        </div>
      </form>
    );
  },
  TopicForm: ({ onSubmit, initialData = {}, onCancel, categories }) => {
    const [title, setTitle] = useState(initialData.title || "");
    const [categoryId, setCategoryId] = useState(initialData.categoryId || "");

    useEffect(() => {
      setTitle(initialData.title || "");
      setCategoryId(initialData.categoryId || "");
    }, [initialData]);

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({
        id: initialData.id,
        title,
        categoryId,
      });
    };    

    return (
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <div>
          <label
            htmlFor="topicTitle"
            className="block text-sm font-medium text-gray-700"
          >
            Topic Title
          </label>
          <Input
            type="text"
            label="Topic Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            isRequired
            size="sm"
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm"
          />
          <label
            htmlFor="topicCategory"
            className="block text-sm font-medium text-gray-700 mt-2"
          >
            Category
          </label>
          <Select
            label="Category"
            onChange={(e) => setCategoryId(e.target.value)}
            size="sm"
            isRequired
            aria-hidden="false"
            selectedKeys={[categoryId]}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm"
          >
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.id}>
                {cat.title}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="flex space-x-2">
          <Button type="submit" color="success" auto>
            {initialData.id ? "Update" : "Add"} Topic
          </Button>
          {initialData.id && (
            <Button type="button" color="warning" auto onClick={onCancel}>
              Cancel
            </Button>
          )}
        </div>
      </form>
    );
  },
  AchievementForm: ({ onSubmit, initialData = {}, onCancel }) => {
    const [title, setTitle] = useState(initialData.title || "");
    const [requiredPoints, setRequiredPoints] = useState(
      initialData.required_points || 0
    );
    const [level, setLevel] = useState(initialData.level || "");

    useEffect(() => {
      setTitle(initialData.title || "");
      setRequiredPoints(initialData.required_points || 0);
      setLevel(initialData.level || "");
    }, [initialData]);

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({
        id: initialData.id,
        title,
        required_points: parseInt(requiredPoints),
        level,
      });
    };

    return (
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <div>
          <label
            htmlFor="achievementTitle"
            className="block text-sm font-medium text-gray-700"
          >
            Achievement Title
          </label>
          <Input
            type="text"
            label="Achievement Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            isRequired
            size="sm"
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm"
          />
          <label
            htmlFor="requiredPoints"
            className="block text-sm font-medium text-gray-700 mt-2"
          >
            Required Points
          </label>
          <Input
            label="Required Points"
            type="number"
            value={requiredPoints}
            onChange={(e) => setRequiredPoints(e.target.value)}
            isRequired
            size="sm"
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm"
          />
          <label
            htmlFor="level"
            className="block text-sm font-medium text-gray-700 mt-2"
          >
            Level
          </label>
          <Select
            label="Level"
            onChange={(e) => setLevel(e.target.value)}
            size="sm"
            selectedKeys={[level]}
            isRequired
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm"
          >
            <SelectItem key="Beginner" value="Beginner">
              Beginner
            </SelectItem>
            <SelectItem key="Intermediate" value="Intermediate">
              Intermediate
            </SelectItem>
            <SelectItem key="Advanced" value="Advanced">
              Advanced
            </SelectItem>
            <SelectItem key="Expert" value="Expert">
              Expert
            </SelectItem>
          </Select>
        </div>
        <div className="flex space-x-2">
          <Button type="submit" color="success" auto>
            {initialData.id ? "Update" : "Add"} Achievement
          </Button>
          {initialData.id && (
            <Button type="button" color="warning" auto onClick={onCancel}>
              Cancel
            </Button>
          )}
        </div>
      </form>
    );
  },
  QuizForm: ({ onSubmit, initialData = {}, onCancel, topics }) => {
    const [formData, setFormData] = useState({
      id: initialData.id || "",
      topicId: initialData.topicId || "",
      question: initialData.question || "",
      option1: initialData.option1 || "",
      option2: initialData.option2 || "",
      option3: initialData.option3 || "",
      option4: initialData.option4 || "",
      correct_answer: initialData.correct_answer || "",
    });

    useEffect(() => {
      setFormData({
        id: initialData.id || "",
        topicId: initialData.topicId || "",
        question: initialData.question || "",
        option1: initialData.option1 || "",
        option2: initialData.option2 || "",
        option3: initialData.option3 || "",
        option4: initialData.option4 || "",
        correct_answer: initialData.correct_answer || "",
      });
    }, [initialData]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formData);
      setFormData({
        topicId: "",
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correct_answer: "",
      });
    };

    return (
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5"
      >
        <Select
          label="Select Topic"
          name="topicId"
          onChange={(e) =>
            handleChange({ target: { name: "topicId", value: e.target.value } })
          }
          selectedKeys={[formData.topicId]}
          className="col-span-2"
          aria-hidden="false"
        >
          {topics?.map((topic) => (
            <SelectItem key={topic.id} value={topic.id}>
              {topic.title}
            </SelectItem>
          ))}
        </Select>

        <Input
          type="text"
          label="Input Question"
          name="question"
          value={formData.question}
          onChange={handleChange}
        />

        <Input
          type="text"
          label="Option 1"
          name="option1"
          value={formData.option1}
          onChange={handleChange}
        />

        <Input
          type="text"
          label="Option 2"
          name="option2"
          value={formData.option2}
          onChange={handleChange}
        />

        <Input
          type="text"
          label="Option 3"
          name="option3"
          value={formData.option3}
          onChange={handleChange}
        />

        <Input
          type="text"
          label="Option 4"
          name="option4"
          value={formData.option4}
          onChange={handleChange}
        />

        <Input
          type="text"
          label="Correct Answer"
          name="correct_answer"
          value={formData.correct_answer}
          onChange={handleChange}
          className="col-span-2"
        />

        <div className="flex space-x-2">
          <Button type="submit" color="success" auto>
            {initialData.id ? "Update" : "Add"} Quiz
          </Button>
          {initialData.id && (
            <Button type="button" color="warning" auto onClick={onCancel}>
              Cancel
            </Button>
          )}
        </div>
      </form>
    );
  },
};

export { Forms };
