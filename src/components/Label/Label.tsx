interface LabelProps {
  label: string;
}
export default function Label({ label }: LabelProps) {
  return <label className="label mt-4 mb-2">{label}</label>;
}
