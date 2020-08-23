import React from 'react'

const Alert = (props: any) => {
  const { display, text }: { display: boolean; text: string } = props

  const onDismiss = () => !display

  return (
    <Alert color="danger" isOpen={display} toggle={onDismiss}>
      {text}
    </Alert>
  )
}

export default Alert
