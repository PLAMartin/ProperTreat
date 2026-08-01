import Link from "next/link";
import Image from "next/image";
import { footerNav, siteConfig, socialLinks } from "@/lib/site-config";
import { SocialIcon } from "@/components/social-icon";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo/proper-treat-icon.svg" alt="" width={26} height={27} />
              <span className="font-heading text-base font-semibold">{siteConfig.name}</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">{siteConfig.tagline}</p>
          </div>

          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-foreground">{heading}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col-reverse items-center gap-4 border-t border-border/70 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <SocialIcon name={social.icon} className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
