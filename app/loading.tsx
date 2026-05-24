export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="label text-[0.6rem]">Wird geladen</span>
      </div>
    </div>
  );
}
