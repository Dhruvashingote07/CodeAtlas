export default function SectionHeader({ title, subtitle, action }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-8">
      <div>
        <h2 className="section-heading">{title}</h2>
        {subtitle && <p className="section-subheading">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}
