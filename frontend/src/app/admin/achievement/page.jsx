"use client";

import React, { useState, useEffect } from "react";
import { Forms } from "@/components/form";
import { Tables } from "@/components/table";
import { create, deleteData, getData, update } from "@/libs/api-libs";
import Swal from "sweetalert2";

const ManageAch = () => {
  const [achievements, setAchievements] = useState([]);
  const [editingAchievement, setEditingAchievement] = useState(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await getData("achievements");
        setAchievements(response.datas);
      } catch (error) {
        console.error("Error fetching achievements:", error);
      }
    };

    fetchAchievements();
  }, []);

  const handleAddOrUpdateAchievement = async (achievement) => {
    const { id, title, required_points, level } = achievement;

    const achievementData = {
      title,
      required_points,
      level,
    };

    try {
      if (id) {
        const response = await update(
          "achievement/update",
          id,
          achievementData
        );
        setAchievements(
          achievements.map((a) => (a.id === id ? response.datas : a))
        );
      } else {
        const response = await create("achievement/create", achievementData);
        setAchievements([
          ...achievements,
          { ...response.datas, id: response.datas.id },
        ]);
      }
      setEditingAchievement(null);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleEdit = (achievementId) => {
    const achievement = achievements.find((a) => a.id === achievementId);
    setEditingAchievement(achievement);
  };

  const handleDelete = async (achievementId) => {
    try {
      const response = await deleteData("achievement/delete", achievementId);
      setAchievements(achievements.filter((ach) => ach.id !== achievementId));

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
    setEditingAchievement(null);
  };

  return (
    <div className="mt-5 w-full">
      <Forms.AchievementForm
        onSubmit={handleAddOrUpdateAchievement}
        initialData={editingAchievement || {}}
        onCancel={handleCancelEdit}
      />
      <Tables.AchievementTable
        achievements={achievements}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ManageAch;
