export type BoxInputProps = {
  label: string,
  infoText: string,
  value: string,
  photo?: string,
  altPhoto?: string,
  onChange:  React.MouseEventHandler<HTMLElement> | any,
}