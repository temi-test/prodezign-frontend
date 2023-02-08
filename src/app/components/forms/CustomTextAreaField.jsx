import React from "react";
import {
  Box,
  Form,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  FormLabel,
} from "@chakra-ui/react";

import { Field, useField, useFormik } from "formik";
import * as Yup from "yup";

function CustomTextAreaField({   label,
  minH,
  padding,
  fontSize,
  textAlign,
  field_error,
  helper_text, ...props }) {
  const formik = useFormik({ label, ...props });
  const [field, meta] = useField(props);

  return (
    <FormControl mb={5} isInvalid={meta.error && meta.touched}>
      <FormLabel>{label}</FormLabel>
      <Field
        bg="#fafafa"
        as={Textarea}
        minH={!minH ? "45px" : minH}
        fontSize={fontSize}
        textAlign={textAlign}
        padding={padding}
        p={padding}
        {...field}
        {...props}
      ></Field>

      <FormErrorMessage>{meta.error}</FormErrorMessage>
      {field_error !== undefined && field_error !== null && (
        <Box mt={1} color="red.500">
          {field_error}
        </Box>
      )}
    </FormControl>
  );
}

export default CustomTextAreaField;
