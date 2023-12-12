import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "../_components/DeleteIssueButton";
import { getServerSession } from "next-auth";
import AssignIssues from "../_components/AssignIssues";
import {cache} from 'react';
import authOptions from "@/app/api/auth/authOptions";
interface Props {
  params: { id: string };
}

const fetchUser = cache((issueId: number) => prisma.issue.findUnique({where: {id: issueId}}));

const IssueDetailPage = async ({ params }: Props) => {

  const issue = await fetchUser(parseInt(params.id));

  const sessiton = await getServerSession(authOptions);

  if (!issue) notFound();
  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
     {sessiton && <Box>
        <Flex direction="column" gap="4">
          <AssignIssues issue={issue}/>
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton issueId={issue.id}/>
        </Flex>
      </Box>}
    </Grid>
  );
};

export async function generateMetadata({ params }: Props) {
  const issue = await fetchUser(parseInt(params.id));

  return {
    title: issue?.title,
    description: 'Details of issue ' + issue?.id
  }
}

export default IssueDetailPage;
