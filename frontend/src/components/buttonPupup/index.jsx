"use client";

import { Button } from "@nextui-org/react";
import React from "react";
import Swal from "sweetalert2";

const ButtonPopup = ({
  children,
  title,
  text,
  icon,
  confirmButtonText,
  cancelButtonText,
  onConfirm,
  onCancel,
}) => {
  const showPopup = () => {
    Swal.fire({
      title: title || "Alert",
      text: text || "",
      icon: icon || "info",
      confirmButtonText: confirmButtonText || "OK",
      cancelButtonText: cancelButtonText || "Cancel",
      showCancelButton: !!cancelButtonText,
    }).then((result) => {
      if (result.isConfirmed) {
        if (onConfirm) onConfirm();
      } else if (result.isDismissed && onCancel) {
        onCancel();
      }
    });
  };

  return <button onClick={showPopup}>{children}</button>;
};

export default ButtonPopup;
