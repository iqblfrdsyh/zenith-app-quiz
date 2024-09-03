"use client";

import React, { useState, useEffect } from "react";
import { Forms } from "@/components/form";
import { Tables } from "@/components/table";
import { create, deleteData, getAllData, update } from "@/libs/api-libs";
import Swal from "sweetalert2";

const ManageQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [topics, setTopics] = useState([]);
  const [editingQuiz, setEditingQuiz] = useState(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await getAllData("quizzes");
        setQuizzes(response.datas);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    const fetchTopics = async () => {
      try {
        const response = await getAllData("topics");
        setTopics(response.datas);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchTopics();
    fetchQuizzes();
  }, []);

  const handleAddOrUpdateQuiz = async (quiz) => {
    const {
      id,
      topicId,
      question,
      option1,
      option2,
      option3,
      option4,
      correct_answer,
    } = quiz;

    const quizData = {
      topicId,
      question,
      option1,
      option2,
      option3,
      option4,
      correct_answer,
    };

    try {
      if (id) {
        const response = await update("quiz/update", id, quizData);
        setQuizzes(quizzes.map((q) => (q.id === id ? response.datas : q)));
      } else {
        const response = await create("quiz/create", quizData);
        setQuizzes([...quizzes, { ...response.datas, id: response.datas.id }]);
      }
      setEditingQuiz(null);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleEdit = (quizId) => {
    const quiz = quizzes.find((q) => q.id === quizId);

    const updatedQuiz = {
      ...quiz,
      topicId: quiz.topic.id.toString() || "",
    };
    setEditingQuiz(updatedQuiz);
  };

  const handleDelete = async (quizId) => {
    try {
      const response = await deleteData("quiz/delete", quizId);
      setQuizzes(quizzes.filter((quiz) => quiz.id !== quizId));
      Swal.fire({
        title: "Deleted!",
        text: response.msg,
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleCancelEdit = () => {
    setEditingQuiz(null);
  };

  return (
    <div className="mt-5 w-full">
      <Forms.QuizForm
        onSubmit={handleAddOrUpdateQuiz}
        initialData={editingQuiz || {}}
        onCancel={handleCancelEdit}
        topics={topics}
      />
      <Tables.QuizTable
        quizzes={quizzes}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ManageQuiz;
