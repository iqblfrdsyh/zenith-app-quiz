"use client";

import React, { useState, useEffect } from "react";
import { Forms } from "@/components/form";
import { Tables } from "@/components/table";
import { create, getAllData, update } from "@/libs/api-libs";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllData("users");
        setUsers(response.datas);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleAddOrUpdateUser = async (user) => {
    const { id, fullname, username, password, confirmPassword, role, points } =
      user;

    const userData = {
      fullname,
      username,
      password,
      confirmPassword,
      role,
    };

    const userDataUpdate = {
      fullname,
      username,
      role,
      points: parseInt(points),
    };

    console.log({ user });

    try {
      if (id) {
        const response = await update("user/update", id, userDataUpdate);
        setUsers(users.map((u) => (u.id === id ? response.datas : u)));
      } else {
        const response = await create("user/signup", userData);
        setUsers([...users, { ...response.datas, id: response.datas.id }]);
      }
      setEditingUser(null);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleEdit = (userId) => {
    const user = users.find((u) => u.id === userId);
    setEditingUser(user);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  return (
    <div className="mt-5 w-full">
      <Forms.UserForm
        onSubmit={handleAddOrUpdateUser}
        initialData={editingUser || {}}
        onCancel={handleCancelEdit}
      />
      <Tables.UserTable users={users} onEdit={handleEdit} />
    </div>
  );
};

export default ManageUsers;
