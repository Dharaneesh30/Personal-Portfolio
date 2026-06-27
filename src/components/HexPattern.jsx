export default function HexPattern({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 opacity-20 hex-drift ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(255,184,0,0.08), transparent 55%), linear-gradient(30deg, rgba(255,255,255,0.08) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.08) 87.5%, rgba(255,255,255,0.08)), linear-gradient(150deg, rgba(255,255,255,0.08) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.08) 87.5%, rgba(255,255,255,0.08)), linear-gradient(90deg, rgba(255,255,255,0.08) 2%, transparent 2.5%, transparent 97%, rgba(255,255,255,0.08) 97.5%, rgba(255,255,255,0.08))",
        backgroundSize: "180px 104px, 180px 104px, 180px 104px, 180px 104px",
        backgroundPosition: "0 0, 0 0, 0 0, 0 0",
      }}
    />
  );
}
