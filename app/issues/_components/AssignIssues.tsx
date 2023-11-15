"use client";
import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Skeleton } from "@/app/components";
import toast from "react-hot-toast";

const AssignIssues = ({ issue }: { issue: Issue }) => {
  const { data: users, error, isLoading } = useUsers();
  const assignIssue = async (userId: string) => {
    try {
      await axios.patch("/api/issues/" + issue.id, {
        assignedToUserId: userId,
      });
    } catch (error) {
      toast.error("Changes can not be saved");
    }
  };
  if (error) return null;

  if (isLoading) return <Skeleton />;
  return (
    <Select.Root onValueChange={assignIssue}>
      <Select.Trigger placeholder="Assign..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};
const useUsers = () =>
  useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000, // 60s
    retry: 3,
  });
export default AssignIssues;
