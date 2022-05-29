export type BoxSearchInputProps = {
  label: string,
  infoText: string,
  photo?: string,
  altPhoto?: string,
  value: string,
  isFocus: boolean,
  onChange: React.MouseEventHandler<HTMLElement> | any,
  onFocus?: () => void,
  onBlur?: () => void,
}