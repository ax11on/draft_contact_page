import { useMemo, useState } from "react";

type Props = {
  to?: string;
  subject?: string;
  className?: string;
};

export default function ContactForm({
  to = "comms@axionscientific.com",
  subject = "Enquiry - Axion Scientific",
  className = "",
}: Props) {
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const body = [
      `Organisation: ${organisation}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    return (
      `mailto:${to}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`
    );
  }, [organisation, email, message, to, subject]);

  return (
    <form
      className={`flex flex-col gap-4 ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
      <div className="grid gap-1.5">
        <label
          htmlFor="organisation"
          className="text-[12px] text-muted-foreground"
        >
          Organisation name
        </label>
        <input
          id="organisation"
          name="organisation"
          type="text"
          value={organisation}
          onChange={(e) => setOrganisation(e.target.value)}
          required
          autoComplete="organization"
          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 text-[13.5px] text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-[oklch(0.55_0.18_250/0.55)]"
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="email" className="text-[12px] text-muted-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 text-[13.5px] text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-[oklch(0.55_0.18_250/0.55)]"
        />
      </div>

      <div className="grid gap-1.5">
        <label
          htmlFor="message"
          className="text-[12px] text-muted-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={7}
          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 text-[13.5px] text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-[oklch(0.55_0.18_250/0.55)] resize-y"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-full text-[13px] font-medium text-white/90 border border-[oklch(0.55_0.18_250/0.45)] transition-all hover:-translate-y-px hover:shadow-lg"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.18 250 / 0.72), oklch(0.72 0.12 210 / 0.72))",
          }}
        >
          Send
        </button>
        <a
          href={`mailto:${to}`}
          className="text-[12.5px] text-muted-foreground hover:text-foreground"
        >
          {to}
        </a>
      </div>
    </form>
  );
}
