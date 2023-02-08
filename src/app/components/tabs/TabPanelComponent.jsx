import React from "react";
import { TabPanel, SimpleGrid, TabPanels } from "@chakra-ui/react";
import CourseItem from "../CourseItem";

function TabPanelComponent({ list }) {
  return (
    <TabPanel p="0px">
      <SimpleGrid columns={4} spacing={3}>
        {list.map((item) => (
          <CourseItem key={item._id} payload={item} />
        ))}
      </SimpleGrid>
    </TabPanel>
  );
}

export default TabPanelComponent;
