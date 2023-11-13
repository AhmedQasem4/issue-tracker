import { Skeleton } from "@/app/components";
import { Box, Card, Flex, Heading } from "@radix-ui/themes";
import React from "react";

const LoadingIssueDetailPage =  () => {
  return (
    <Box>
      <Skeleton />
      <Flex className="space-x-3" my="2">
        <Skeleton width="5rem"/>
        <Skeleton width="8rem"/>
      </Flex>
      <Card mt="4" className="pros">
        <Skeleton count={3}/>
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;
