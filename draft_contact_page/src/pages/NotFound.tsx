export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <div className="max-w-md w-full rounded-2xl border border-white/[0.08] bg-card p-6">
        <h1 className="text-xl font-bold tracking-tight">404</h1>
        <p className="mt-2 text-sm text-muted-foreground">Page not found.</p>
        <a
          href="/"
          className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] text-sm"
        >
          Return home
        </a>
      </div>
    </div>
  );
}
