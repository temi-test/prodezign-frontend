import React from "react";
import {
  Box,

  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
  FormHelperText,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";

import { Field, useField, useFormik } from "formik";



function CustomInputField({
  label,
  minH,
  mb,
  mt,
  padding,
  fontSize,
  textAlign,
  icon,
  field_error,
  helper_text,
  ...props
}) {
  const formik = useFormik({ label, ...props });
  const [field, meta] = useField(props);
  return (
    <FormControl mb={3} isInvalid={meta.error && meta.touched} mt={mt}>
      <Box mb={0}>
        <FormLabel>{label}</FormLabel>
        <FormHelperText>{helper_text}</FormHelperText>
      </Box>

      <InputGroup>
        <InputLeftElement
          children={icon}
          // textAlign="center"
          // fontSize={fontSize}
          // minH={!minH ? "45px" : minH}
        />
        <Field
          // borderColor="grey.100"
          // // borderWidth={2}
          // borderWidth="1px"
          bg="#f5f5f5"
          // minH={!minH ? "45px" : minH}
          fontSize={fontSize}
          textAlign={textAlign}
          // padding="0px 20px"
          p={padding}
          as={Input}
          {...field}
          {...props}
        ></Field>
      </InputGroup>

      <FormErrorMessage>{meta.error}</FormErrorMessage>
      {/* {field_error !== undefined && field_error !== null && (
        <Box mt={1} color="red.500">
          {field_error}
        </Box>
      )} */}
    </FormControl>
  );
}

export default CustomInputField;
