import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import useCharge from "../../hooks/useCharge";
import CustomInputField from "../forms/CustomInputField";
import CustomSelectField from "../forms/CustomSelectField";
import ChargeWrapper from "./ChargeWrapper";

function ChargeInit() {
  const { select_months, select_years } = useCharge();
  const screenLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const screenLaptopLg = useMediaQuery({ query: "(min-width: 1300px)" });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  return (
    <React.Fragment>
      <ChargeWrapper>
        {({ formik, current_path, checkForm }) => (
          <Box>
            {screenLaptop || screenLaptopLg || isBigScreen ? (
              <Box>
                <CustomInputField
                  type="text"
                  name="card_number"
                  label="Card Number"
                  placeholder="Enter Card Number"
                />

                <CustomInputField
                  type="text"
                  name="cvv"
                  label="Card CVV"
                  placeholder="Card CVV"
                  //   mb="10px"
                />

                <SimpleGrid columns={2} spacingX={2}>
                  <CustomSelectField
                    type="select"
                    name="expiry_month"
                    label="Expiry Month"
                    placeholder="Select Month"
                    payload={select_months}
                  />

                  <CustomSelectField
                    type="select"
                    name="expiry_year"
                    label="Expiry Year"
                    placeholder="Select Year"
                    payload={select_years}
                  />
                </SimpleGrid>
              </Box>
            ) : (
              <Box p="0px 10px">
                <CustomInputField
                  type="text"
                  name="card_number"
                  label="Card Number"
                  placeholder="Enter Card Number"
                  mb="15px"
                />

                <CustomInputField
                  type="text"
                  name="cvv"
                  label="CVV"
                  // minH="30px"
                  placeholder="Enter Cvv Number"
                  mb="15px"
                />

                <CustomSelectField
                  type="select"
                  name="expiry_month"
                  label="Expiry Month"
                  placeholder="Select Month"
                  mb="10px"
                  payload={select_months}
                />

                <CustomSelectField
                  type="select"
                  name="expiry_year"
                  label="Expiry Year"
                  placeholder="Select Year"
                  mb="15px"
                  payload={select_years}
                />

                <CustomInputField
                  type="text"
                  name="amount"
                  label="Amount"
                  placeholder="Enter Total Amount"
                  helper_text="You will not be charged until you verify with OTP or Password"
                  mb="15px"
                />
              </Box>
            )}
            <Button mt="20px" bg="black" color="white" width="100%">
              Continue
            </Button>
          </Box>
        )}
      </ChargeWrapper>
    </React.Fragment>
  );
}

export default ChargeInit;
