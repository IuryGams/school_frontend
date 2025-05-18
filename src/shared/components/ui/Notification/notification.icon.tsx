import { LucideProps } from "lucide-react";

interface NotificationIconProps {
  Icon: React.ComponentType<LucideProps>;
  color?: string;
}

export default function NotificationIcon({
  Icon,
  color,
}: NotificationIconProps) {
  return (
    <i aria-label="Icone">
      <Icon color={color} size={28} />
    </i>
  );
}
