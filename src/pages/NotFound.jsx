import { Link } from "react-router-dom";
import usePageTitle from "../lib/usePageTitle";
import { PageHead } from "../components/Bits";

export default function NotFound() {
  usePageTitle("Page not found");
  return (
    <main>
      <PageHead title="Page not found" text="The page you are looking for does not exist or has moved." />
      <section className="sec"><div className="wrap"><Link to="/" className="btn btn-primary">Back to Home</Link></div></section>
    </main>
  );
}
