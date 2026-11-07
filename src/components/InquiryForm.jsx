import { useState } from "react";
import { services, contact } from "../lib/data";

export default function InquiryForm() {
  const [sent, setSent] = useState(false);
  function onSubmit(e) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.target));
    // TODO: replace mailto with an API route or email service
    const body = `Name: ${d.name}\nEmail: ${d.email}\nService: ${d.service}\nBudget: ${d.budget}\n\n${d.message}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("Project inquiry from " + d.name)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="row"><input name="name" placeholder="Name" required /><input name="email" type="email" placeholder="Email" required /></div>
      <div className="row">
        <select name="service" defaultValue=""><option value="" disabled>Service you need</option>{services.map((s) => <option key={s.slug}>{s.title}</option>)}</select>
        <input name="budget" placeholder="Budget (optional)" />
      </div>
      <textarea name="message" rows="3" placeholder="Message" required />
      <button className="btn btn-primary" type="submit">Send Inquiry</button>
      {sent && <p className="note">Thanks! We reply within one working day.</p>}
    </form>
  );
}
