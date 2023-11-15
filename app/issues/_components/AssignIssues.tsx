'use client';
import { Select } from "@radix-ui/themes";
import React from "react";

const AssignIssues = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="1">Ahmed Qasem</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssignIssues;
