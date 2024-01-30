import {
  Box,
  Flex,
  Spacer,
  TabList,
  Tabs,
  Text,
  Tab,
  TabIndicator,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Flex margin="1rem" flexWrap="wrap">
        <Box>
          <Text fontSize="2xl" as="b">
            React & Rise
          </Text>
        </Box>
        <Spacer />
        <Flex gap="1rem" flexWrap="wrap">
          <TabLayout />
        </Flex>
      </Flex>
      <hr />
    </>
  );
}

const TabLayout = () => {
  return (
    <>
      <Box>
        <Tabs variant="soft-rounded" colorScheme="teal">
          <TabList>
            <Tab>Home</Tab>
            <Tab>Create Room</Tab>
            <Tab>Code Generation</Tab>
            <Tab>User Profile</Tab>
            <Tab>Logout</Tab>
          </TabList>
        </Tabs>
      </Box>
    </>
  );
};
