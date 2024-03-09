export function HFlex({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`flex flex-col ${className ?? ""}`}>{children}</div>;
}

export function VFlex({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`flex flex-row ${className ?? ""}`}>{children}</div>;
}
