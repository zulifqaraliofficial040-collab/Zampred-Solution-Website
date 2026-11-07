import { useEffect } from "react";

const BASE = "Zampred Solutions";

// Replaces Next.js `metadata.title`. No argument = home page title.
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} | AI & Technology Solutions`;
  }, [title]);
}
