import React from "react";
import { useToast as chakraToast } from "@chakra-ui/react";
import { useEffect } from "react";

function useToast() {
  const toast = chakraToast();
  const id = "123456";

  const showToast = ( payload) => {

    if (payload?.title) {
        if (!toast.isActive(id)) {
            toast({
                id: id,
                title: payload?.title,
                description: payload?.message,
                status: payload?.status,
                isClosable: true,
                duration: 3500,
                position: "top",
              });
        }
      }
    
  };


  return showToast;
}

export default useToast;