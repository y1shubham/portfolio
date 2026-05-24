export default function SectionLabel({ label }: { label: string }) {
  return (
    <span className="inline-block text-accent text-xs font-semibold tracking-[3px] uppercase mb-4">
      {label}
    </span>
  );
}
