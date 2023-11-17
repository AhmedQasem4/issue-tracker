import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const NewIssueButton = () => {
  return (
    <div>
        <Button>
          <Link href="/issues/new">New issue</Link>
        </Button>
      </div>
  )
}

export default NewIssueButton