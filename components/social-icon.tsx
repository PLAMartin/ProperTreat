import { SiInstagram, SiFacebook, SiX, SiThreads, SiReddit } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import type { IconType } from "react-icons";

const icons: Record<string, IconType> = {
  instagram: SiInstagram,
  facebook: SiFacebook,
  twitter: SiX,
  linkedin: FaLinkedin,
  threads: SiThreads,
  reddit: SiReddit,
};

export function SocialIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon className={className} aria-hidden="true" />;
}
