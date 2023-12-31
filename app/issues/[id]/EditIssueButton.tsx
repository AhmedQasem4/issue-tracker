import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import {BiEdit} from 'react-icons/bi';

interface Props{
    issueId: number;
}

const EditIssueButton = ({issueId}: Props) => {
  return (
        <Button>
            <BiEdit />
            <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
        </Button>
  )
}

export default EditIssueButton