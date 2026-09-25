import Image from "next/image";

export function Logo({
  className = "h-9 w-9",
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <Image
      src="/icon.png"
      alt="Tupelo Plumber"
      width={512}
      height={512}
      className={`shrink-0 object-contain ${className}`}
      priority
    />
  );
}