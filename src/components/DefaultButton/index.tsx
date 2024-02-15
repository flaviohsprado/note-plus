import { Button } from "react-native-paper";

interface DefaultButtonProps {
  label: string;
  props: any;
}

export default function DefaultButton({ label, props }: DefaultButtonProps) {
  return <Button {...props}>{label}</Button>;
}
