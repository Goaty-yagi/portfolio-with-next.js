import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";

export default function CustomTab({ tabs }) {
  return (
    <Tabs isFitted position="relative" variant="unstyled" maxW={'600px'}>
      <TabList>
        {tabs.map((e, index) => (
          <Tab fontSize={'0.4rem'} w={'20px'} overflowWrap={'break-word'}  key={index}>{e}</Tab>
        ))}
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
      {/* <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels> */}
    </Tabs>
  );
}
