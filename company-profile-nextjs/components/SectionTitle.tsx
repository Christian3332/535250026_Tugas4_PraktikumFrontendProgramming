
type SectionTitleProps = {
  label: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
};

export default function SectionTitle({
  label,
  title,
  description,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`rv-section-title ${className}`.trim()}>
      <p className="rv-section-label">{label}</p>
      <h2>{title}</h2>

      {description && <p className="rv-section-description">{description}</p>}
    </div>
  );
}
