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
        setTopics(topics.map((t) => (t.id === id ? response.data : t)));
      } else {
        const response = await create("topic/create", topicData);

        setTopics((prevTopics) => [
          ...prevTopics,
          {
            ...response?.data,
            id: response?.data.id,
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
    setEditingTopic(topic);
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
      {!topics?.length ? (
        <div>Not Found Data Topic.</div>
      ) : (
        <Tables.TopicTable topics={topics} onEdit={handleEdit} />
      )}
    </div>
  );
};

export default ManageTopic;
