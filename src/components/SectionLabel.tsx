export default function SectionLabel({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="w-6 h-[2px] rounded-full bg-gradient-to-r from-accent to-accent-cyan" />
      <span className="text-[11px] font-bold tracking-[3px] uppercase gradient-text-accent">
        {label}
      </span>
    </div>
  );
}
