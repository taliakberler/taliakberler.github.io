import { Link } from "react-router-dom";

export const NotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center">
    <p className="eyebrow">404</p>
    <h1 className="mt-4 font-display text-4xl font-semibold">This page doesn't exist</h1>
    <p className="mt-4 max-w-sm leading-relaxed text-ink-soft">
      The link may be out of date. Everything lives on the main page.
    </p>
    <Link to="/" className="btn mt-8">
      Back to the portfolio
    </Link>
  </div>
);
