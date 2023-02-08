import React from "react";
import {
  Box,
  Form,
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
  Switch,
} from "@chakra-ui/react";

import { Field, useField, useFormik } from "formik";
import * as Yup from "yup";

function CustomSelectField({ label, ...props }) {
  const formik = useFormik({ label, ...props });
  const [field, meta] = useField(props);

  return (
    <FormControl mb={5} isInvalid={meta.error && meta.touched}>
      <HStack>
        <FormLabel>{label}</FormLabel>
        <Switch  as={Switch} {...field} {...props}
          isChecked={collection_checked}
          onChange={() => {
            changeCollectionChecked();
          }}
        />
        {/* <Field as={Switch} {...field} {...props}></Field> */}
      </HStack>

      {/* <FormErrorMessage>{meta.error}</FormErrorMessage> */}
    </FormControl>
  );
}

export default CustomSelectField;
