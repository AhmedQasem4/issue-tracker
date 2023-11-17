import prisma from "@/prisma/client";
import { Issue, Status } from "@prisma/client";
import { Flex } from "@radix-ui/themes";
import Pagination from "../components/Pagination";
import NewIssueButton from "./NewIssueButton";
import IssueStatusFilter from "./_components/IssueStatusFilter";
import IssueTable, { columnNames } from "./_components/IssueTable";
import { Metadata } from "next";

export interface IssueQuery {
  status: Status,
  orderBy: keyof Issue,
  page: string 
}

interface Props {
  searchParams: IssueQuery,
}



const IssuesPage = async ({ searchParams }: Props) => {
  const statueses = Object.values(Status);
  const status = statueses.includes(searchParams.status)
    ? searchParams.status
    : undefined;
  
    const where= {status};

    const orderBy = columnNames
    .includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

    const page = parseInt(searchParams.page) || 1;
    const pageSize = 10;
    
    const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
    const issueCount = await prisma.issue.count({where});
  return (
    <Flex direction="column" gap="3">
      <Flex justify="between">
        <IssueStatusFilter />
        <NewIssueButton />
      </Flex>
      <IssueTable searchParams={searchParams} issues={issues}/>
      <Pagination itemCount={issueCount} pageSize={pageSize} currentPage={page}/>
    </Flex>
  );
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: 'Issue Tracker - Issue List',
  description: 'View all project issues'
};

export default IssuesPage;
