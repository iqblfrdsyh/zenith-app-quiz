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

      setCategoryId("");
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
            id="achievementTitle"
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
            type="number"
            id="requiredPoints"
            label="Required Points"
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
            id="level"
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
};

export { Forms };