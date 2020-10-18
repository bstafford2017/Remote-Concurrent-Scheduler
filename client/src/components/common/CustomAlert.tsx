import React from 'react'
import { Alert } from 'reactstrap'

const CustomerAlert = (props: any) => {
  const { display, text }: { display: boolean; text: string } = props

  const onDismiss = () => !display

  return (
    <Alert color='danger' isOpen={display} toggle={onDismiss}>
      {text}
    </Alert>
  )
}

export default CustomerAlert
