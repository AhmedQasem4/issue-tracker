'use client';

import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const deleteIssue = async ()=> {
    try {
      await axios.delete('/api/issues/'+ issueId)
    router.push("/issues");
    router.refresh();
    } catch (error) {
      setError(true);
    }
  }
  const [error, setError] = useState(false);
  const router = useRouter();
  return (
    <>
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Delete issue</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirm deletion</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to delete issue? this action can not be undone.
        </AlertDialog.Description>
        <Flex gap="3" mt="4">
          <AlertDialog.Cancel >
            <Button color="gray" variant="soft">Cancel</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button onClick={deleteIssue}color="red" >Delete issue</Button>
          </AlertDialog.Action>
        </Flex>
        </AlertDialog.Content>
    </AlertDialog.Root>
    <AlertDialog.Root open={error}>
      <AlertDialog.Content>
        <AlertDialog.Title>Error</AlertDialog.Title>
        <AlertDialog.Description>This issue could not be deleted.</AlertDialog.Description>
        <Button color="gray" mt="2" onClick={()=> setError(false)}>Ok</Button>
      </AlertDialog.Content>
    </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueButton;
