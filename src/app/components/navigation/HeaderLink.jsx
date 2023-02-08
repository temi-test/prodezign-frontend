import React from "react";
import { Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

function HeaderLink({ name, link, mb }) {
  const location = useLocation();
  return (
    <Link to={link} state={{prevPathname: location.pathname}}>
      <Button bg="transparent" me="10px" mb={mb ? "10px" : "0px"}>
        {name}
      </Button>
    </Link>
  );
}

export default HeaderLink;
