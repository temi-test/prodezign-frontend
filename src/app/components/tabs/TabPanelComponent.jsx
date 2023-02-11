import React from "react";
import { TabPanel, SimpleGrid, TabPanels, Center } from "@chakra-ui/react";
import CourseItem from "../CourseItem";
import NotifyComponent from "../notify/NotifyComponent";

function TabPanelComponent({ list }) {
  return (
    <TabPanel p="0px">
      {list.length < 1 ? (
        <Center p="50px 0px">
          {/* show the empty here */}
          <NotifyComponent
            title="Empty"
            status="empty"
            message="No bootcamp available in this category. Please come back later"
            location="page"
          />
        </Center>
      ) : (
        <SimpleGrid columns={4} spacing={3}>
          {list.map((item) => (
            <CourseItem key={item._id} payload={item} />
          ))}
        </SimpleGrid>
      )}
    </TabPanel>
  );
}

export default TabPanelComponent;
