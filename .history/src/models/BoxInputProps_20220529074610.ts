export type BoxInputProps = {
  label: string,
  infoText: string,
  photo?: string,
  altPhoto?: string,
  isErrorTitle: boolean,
  value: string,
  onChange: React.MouseEventHandler<HTMLElement> | any,
  }