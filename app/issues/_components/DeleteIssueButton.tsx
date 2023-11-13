import { Button } from '@radix-ui/themes'
import {MdDeleteForever} from 'react-icons/md';


const DeleteIssueButton = ({issueId}:{issueId: number}) => {
  return (
        <Button color='red'>
            Delete issue
        </Button>
  )
}

export default DeleteIssueButton