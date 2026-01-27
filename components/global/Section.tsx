export default function Section({ title, description }: { title?: string, description?: string, }) {
  return (
    <section className="py-8 ">
      <h2 className="text-2xl  font-bold mb-3"><mark className="bg-[#293279] text-white p-1">{title}</mark></h2>
      <p className="text-lg  leading-relaxed px-8 py-4">
        {description}
      </p>
    </section>
  )
} 