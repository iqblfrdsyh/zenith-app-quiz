"use client";

import React, { useState, useEffect } from "react";
import { Forms } from "@/components/form";
import { Tables } from "@/components/table";
import { createCategory, getAllData, updateCategory } from "@/libs/api-libs";

const ManageCategory = () => {
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllData("categories");
        setCategories(response.datas);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleAddOrUpdateCategory = async (category) => {
    const { id, name, isHots } = category;
    const categoryData = { title: name, isHots: isHots ? 1 : 0 };

    try {
      if (id) {
        const response = await updateCategory("category/update", id, categoryData);
        setCategories(
          categories.map((cat) =>
            cat.id === id ? response.data : cat
          )
        );
      } else {
        const response = await createCategory("category/create", categoryData);
        setCategories([
          ...categories,
          { ...response.data, id: response.data.id },
        ]);
      }
      setEditingCategory(null);
    } catch (error) {
      console.error("Error handling category:", error);
    }
  };

  const handleEdit = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    setEditingCategory(category);
  };

  const handleCancelEdit = () => {
    setEditingCategory(null);
  };

  return (
    <div className="mt-5 w-full">
      <Forms.CategoryForm
        onSubmit={handleAddOrUpdateCategory}
        initialData={editingCategory || {}}
        onCancel={handleCancelEdit}
      />
      <Tables.CategoryTable
        categories={categories}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default ManageCategory;
