import { Badge, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Setting from "../Pages/Setting";
import Billing from "../Pages/Billing";

export default function Sidebar() {
  return (
    <Box maxW="100%" minW="10rem" p="2rem" minH="100vh">
      <Elements />
    </Box>
  );
}

const Elements = () => {
  return (
    <>
      <Heading size="md" mt="1rem">
        My profile
      </Heading>
      <Flex gap="1rem" flexDir="column" mt="1rem">
        <NavLink to="/Setting" element={<Setting />} activeClassName="active">
          <Text fontSize="lg" as="a" cursor="pointer">
            Settings
          </Text>
        </NavLink>
        <NavLink to="/Billing" element={<Billing />}>
          <Text fontSize="lg" cursor="pointer">
            Billing
          </Text>
        </NavLink>
      </Flex>

      <Heading size="md" mt="1.5rem">
        My Team{" "}
        <span>
          <Badge colorScheme="blue">Beta</Badge>
        </span>
      </Heading>
      <Flex gap="1rem" flexDir="column" mt="1rem">
        <Text fontSize="lg" as="a" cursor="pointer">
          Team member
        </Text>
        <Text fontSize="lg" as="a" cursor="pointer">
          Manage member
        </Text>
      </Flex>
    </>
  );
};
