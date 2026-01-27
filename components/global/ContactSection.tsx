export default function ContactSection() {
  return (
    <section id="contact" className="mb-12 p-6 border rounded-lg bg-[#f8fafb]">
      <h2 className="text-2xl font-bold mb-3">Vous avez un besoin textile pour vos équipes ?</h2>
      <p className="text-primary-blue/80">Parlez-nous de vos quantités, usages et délais. Nous revenons vers vous en 24 à 48h avec les options les plus pertinentes et une estimation initiale.</p>

      <div className="mt-4 flex gap-3">
        <a href="#contact" className="inline-block bg-cta-red text-white px-5 py-3 rounded">Nous contacter</a>
      </div>
    </section>

  )
}