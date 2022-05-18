import React from 'react';

export type ErrorMesageProps = {
  message: string,
}

const ErrorMesage: React.FC<ErrorMesageProps> = ({ message }) => {
  return (
    <div>{message}</div>
  )
}

export default ErrorMesage;