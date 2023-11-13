import { IssueStatusBadge } from "@/app/components";
import prisma from "@/prisma/client";
import { Box, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkDown from "react-markdown";
import EditIssueButton from "./edit/EditIssueButton";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  return (
    <Grid columns={{initial: "1" , md: "2"}} gap="5">
      <Box>
      <Heading>{issue.title}</Heading>
      <Flex className="space-x-3" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card mt="4" className="pros">
        <ReactMarkDown>{issue.description}</ReactMarkDown>
      </Card>
      </Box>
      <Box>
        <EditIssueButton issueId={issue.id}/>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
