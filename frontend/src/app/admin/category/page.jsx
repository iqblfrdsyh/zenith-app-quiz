"use client";

import React, { useState, useEffect } from "react";
import { Forms } from "@/components/form";
import { Tables } from "@/components/table";
import { create, getAllData, update } from "@/libs/api-libs";
import Swal from "sweetalert2";

const ManageCategory = () => {
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllData("categories");
        setCategories(response?.datas);
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    };

    fetchCategories();
  }, []);

  const handleAddOrUpdateCategory = async (category) => {
    const { id, name, isHots } = category;
    const categoryData = { title: name, isHots: isHots ? 1 : 0 };

    try {
      if (id) {
        const response = await update("category/update", id, categoryData);
        setCategories(
          categories.map((cat) => (cat.id === id ? response.datas : cat))
        );
      } else {
        const response = await create("category/create", categoryData);
        setCategories([
          ...categories,
          { ...response.datas, id: response.datas.id },
        ]);
      }
      setEditingCategory(null);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
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
      <Tables.CategoryTable categories={categories} onEdit={handleEdit} />
    </div>
  );
};

export default ManageCategory;
