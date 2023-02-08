import { Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import TabPanelComponent from "../tabs/TabPanelComponent";

function BootcampSection({ list, filtered_list }) {
  return (
    <Tabs p="50px 100px">
        
      <TabList>
        <Tab ps="0px" me={4} pb="25px">
          Recent Courses
        </Tab>
        <Tab me={4} pb="25px">
          Web
        </Tab>
        <Tab me={4} pb="25px">
          Ui/UX
        </Tab>
        <Tab me={4} pb="25px">
          Product
        </Tab>
        <Tab me={4} pb="25px">
          Graphics
        </Tab>
      </TabList>

      <TabPanels pt="30px">
        <TabPanelComponent list={list} />
        <TabPanelComponent list={filtered_list.web} />
        <TabPanelComponent list={filtered_list.ui} />
        <TabPanelComponent list={filtered_list.product} />
        <TabPanelComponent list={filtered_list.graphics} />
      </TabPanels>
    </Tabs>
  );
}

export default BootcampSection;
