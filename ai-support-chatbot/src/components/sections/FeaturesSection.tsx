export default function Features() {
  const features = [
    "Instant AI Responses",
    "Business Strategy Generator",
    "Marketing Ideas Creator",
    "Professional Email Writer",
  ];

  return (
    <section id="features" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Features
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white shadow rounded-2xl hover:shadow-lg transition"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
