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
  confirmButtonColor,
  cancelButtonColor,
  ...propsButton
}) => {
  const showPopup = () => {
    Swal.fire({
      title: title || "Alert",
      text: text || "",
      icon: icon || "info",
      cancelButtonText: cancelButtonText || "Cancel",
      confirmButtonText: confirmButtonText || "OK",
      showCancelButton: !!cancelButtonText,
      confirmButtonColor: confirmButtonColor || "",
      cancelButtonColor: cancelButtonColor || "",
    }).then((result) => {
      if (result.isConfirmed) {
        if (onConfirm) onConfirm();
      } else if (result.isDismissed && onCancel) {
        onCancel();
      }
    });
  };

  return (
    <Button onClick={showPopup} {...propsButton}>
      {children}
    </Button>
  );
};

export default ButtonPopup;
