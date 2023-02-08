import React from "react";
import {
  Box,
  Form,
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
  Select,
} from "@chakra-ui/react";

import { Field, useField, useFormik } from "formik";
// import * as Yup from "yup";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import {
  setFormSelectClass,
  setFormSelectSessionYear,
  setFormPerformanceOption,
  setFormPerformanceType,
  setFormPerformanceField,
  setFormPerformanceFilterOption,
  setFormPerformanceFilterField,
  setClassPerformSortOption,
  setClassPerformSortType,
  setClassPerformFilterOption,
} from "../../features/form/formSlice";
import { useState } from "react";

function CustomSelectField({
  label,
  list,
  list_type,
  field_error,
  payload,
  minH,
handleChange,  padding,
  fontSize,
  textAlign,
  mb,
  ...props
}) {
  const dispatch = useDispatch();

  const [field, meta] = useField(props);

  useEffect(()=>{

    if(field.name === "account_bank"){

      if(handleChange){
        // item id is a unique id that helps to check which select triggerred this handlechange method
        // in the parent component
         handleChange(field.value, field.name)
      }
    }
  }, [field.name])

  return (
    <FormControl mb={5} isInvalid={meta.error && meta.touched}>
      <FormLabel>{label}</FormLabel>

      {!list_type && (
        <Field
          bg="#fafafa"
          as={Select}
          {...field}
          {...props}
          mb={mb}
          minH={!minH ? "45px" : minH}
          fontSize={fontSize}
         
        >
          {/* loop here to display options */}

          {payload && payload.length > 0 ? (
            <React.Fragment>
              {payload.map((item, index) => (
                <option value={item.value_field}>{item.display_field}</option>
              ))}
            </React.Fragment>
          ) : null}
        </Field>
      )}

      <FormErrorMessage>{meta.error}</FormErrorMessage>
      {field_error !== undefined && field_error !== null && (
        <Box mt={1} color="red.500">
          {field_error}
        </Box>
      )}
    </FormControl>
  );
}

export default CustomSelectField;
