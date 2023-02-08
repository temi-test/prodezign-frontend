import React from "react";
import {
  Box,
  Form,
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
} from "@chakra-ui/react";

import { Field, useField, useFormik } from "formik";
import * as Yup from "yup";

function CustomInputField({ label, ...props }) {

  const formik = useFormik({ label, ...props });
  const [field, meta] = useField(props)

  return (
    <FormControl 
    mb={5}
    isInvalid={meta.error && meta.touched}>
      <FormLabel>{label}</FormLabel>
      <Field
      bg="#fafafa"
      as={Input}
      {...field}
      {...props}
       
      ></Field>

      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}

export default CustomInputField;
