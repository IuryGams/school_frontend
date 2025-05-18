import { LucideProps } from "lucide-react";
import { ActionButton } from "./styled";

interface NotificationActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ComponentType<LucideProps>;
  sizeIcon?: number;
  variantColor?: string;
}

export default function NotificationAction({
  icon: Icon,
  sizeIcon = 24,
  variantColor,
  ...rest
}: NotificationActionProps) {
  return (
    <ActionButton {...rest} $color={variantColor}>
      <Icon size={sizeIcon} />
    </ActionButton>
  );
}
