export interface ComponentProps {
  label?: string;
}

export const Component = ({ label }: ComponentProps) => <div>{label}</div>;
