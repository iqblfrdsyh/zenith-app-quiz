"use client";

import React, { useState, useEffect } from "react";
import { Forms } from "@/components/form";
import { Tables } from "@/components/table";
import { create, getAllData, update } from "@/libs/api-libs";
import Swal from "sweetalert2";

const ManageTopic = () => {
  const [topics, setTopics] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingTopic, setEditingTopic] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await getAllData("topics");
        setTopics(response?.datas || []);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };
    const fetchCategories = async () => {
      try {
        const responseCategory = await getAllData("categories");
        setCategories(responseCategory?.datas || []);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchCategories();
    fetchTopics();
  }, []);

  const handleAddOrUpdateTopic = async (topic) => {
    const { id, title, categoryId } = topic;
    const topicData = {
      title,
      categoryId,
    };

    try {
      if (id) {
        const response = await update("topic/update", id, topicData);
        setTopics(topics.map((t) => (t.id === id ? response.datas : t)));
      } else {
        const response = await create("topic/create", topicData);

        setTopics((prevTopics) => [
          ...prevTopics,
          {
            ...response?.datas,
            id: response?.datas.id,
          },
        ]);
      }
      setEditingTopic(null);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleEdit = (topicId) => {
    const topic = topics.find((t) => t.id === topicId);

    const categoryId =
      topic.categories.length > 0 ? topic.categories[0].id : null;

    const updatedTopic = {
      id: topic.id,
      title: topic.title,
      categoryId: categoryId.toString(),
    };

    setEditingTopic(updatedTopic);
  };

  const handleCancelEdit = () => {
    setEditingTopic(null);
  };

  return (
    <div className="mt-5 w-full">
      <Forms.TopicForm
        onSubmit={handleAddOrUpdateTopic}
        initialData={editingTopic || {}}
        categories={categories}
        onCancel={handleCancelEdit}
      />
      <Tables.TopicTable topics={topics} onEdit={handleEdit} />
    </div>
  );
};

export default ManageTopic;
