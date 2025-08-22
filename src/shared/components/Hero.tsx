export default function Hero() {
  return (
    <section className="relative h-[48vh] md:h-[64vh] bg-gray-900 text-white">
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop"
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="relative mx-auto flex h-full max-w-6xl items-center px-6">
        <div>
          <h2 className="text-3xl font-extrabold md:text-5xl">Performance-Ready Apparel</h2>
          <p className="mt-3 text-lg text-gray-100 md:text-2xl">For Work and Beyond</p>
        </div>
      </div>
    </section>
  );
}