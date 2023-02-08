import React from "react";
import { position, useToast } from "@chakra-ui/react";
import { useEffect } from "react";

function InfoToast({ payload }) {
  const toast = useToast();
  const id = "123456";
  const showToast = () => {
    toast({
      id: id,
      title: payload?.title,
      description: payload?.message,
      status: payload?.status,
      isClosable: true,
      duration: 3500,
      position: "top",
    });
  };
  useEffect(() => {
    if (payload?.title) {
      if (!toast.isActive(id)) {
        showToast();
      }
    }
  }, [payload]);
}

export default InfoToast;
