import H2Mark from './H2Mark';

export default function Section({ title, description }: { title?: string, description?: string, }) {
  return (
    <section className="py-8 ">
      {title && <H2Mark>{title}</H2Mark>}
      <p className="text-lg  leading-relaxed px-8 py-4">
        {description}
      </p>
    </section>
  )
}