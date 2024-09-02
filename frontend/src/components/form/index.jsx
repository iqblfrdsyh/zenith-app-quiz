import { Checkbox, Input } from "@nextui-org/react";
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
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            {initialData.id ? "Update" : "Add"} Category
          </button>
          {initialData.id && (
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    );
  },
};

export { Forms };
