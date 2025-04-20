import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-lg px-lg">
      <h1>404 Resource Not Found</h1>

      <Link className="underline" to="/">
        Front Page
      </Link>
    </main>
  );
}
