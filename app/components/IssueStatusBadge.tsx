import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React, { PropsWithChildren } from "react";

interface Props {
  status: Status;
}

const statusMap: Record<Status, { label: string; color: 'red' | 'violet' | 'green' }> = {
  OPEN: { label: "OPEN", color: "red" },
  IN_PROGRESS: { label: "IN_PROGRESS", color: "violet" },
  CLOSED: { label: "CLOSED", color: "green" },
};

const IssueStatusBadge = ({ status }: Props) => {
  return <Badge className="block md:hidden" color={statusMap[status].color}>{statusMap[status].label}</Badge>;
};

export default IssueStatusBadge;
