import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <Container>

        <p className="mb-4 text-purple-400">
          Frontend Developer
        </p>

        <h1 className="max-w-5xl text-6xl font-bold md:text-8xl">
          BUILDING
          DIGITAL
          EXPERIENCES
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-slate-400">
          Open Source Contributor,
          React Developer and Future Software Engineer.
        </p>

      </Container>
    </section>
  );
}