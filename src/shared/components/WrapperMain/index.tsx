
type WrapperMainProps = {
  component: React.ComponentType<{ children: React.ReactNode; className?: string }>;
  children: React.ReactNode;
  className?: string;
};

export default function WrapperMain({ component: Component, children, className }: WrapperMainProps) {
  return <Component  className={className}>{children}</Component>;
}