export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#050816]" />

      <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
    </div>
  );
}