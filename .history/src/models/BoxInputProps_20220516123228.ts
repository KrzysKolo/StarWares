import React, { InputHTMLAttributes, SetStateAction } from 'react';

export type BoxInputProps = {
  label: string,
  infoText: string,
  photo?: string,
  altPhoto?: string,
  value?: string,
  onChange?:  React.MouseEventHandler<HTMLElement> | any,
}