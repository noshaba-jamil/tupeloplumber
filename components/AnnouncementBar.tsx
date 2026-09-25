import { SITE } from "@/lib/site";

export function AnnouncementBar() {
  if (!SITE.is24_7) return null;
  return (
    <div className="bg-accent py-2 text-center text-sm font-bold text-black">
      24/7 Emergency Plumbing Service Available —{" "}
      <a href={`tel:${SITE.phoneTel}`} className="underline underline-offset-2">
        Call {SITE.phoneDisplay}
      </a>
    </div>
  );
}
