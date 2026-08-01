"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@/components/ui/button";
import { primaryNav, siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image src="/logo/proper-treat-icon.svg" alt="" width={28} height={29} priority />
          <span className="font-heading text-lg font-semibold text-foreground">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Login
          </Link>
          <Button render={<Link href="/signup">Sign up</Link>} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button size="sm" render={<Link href="/signup">Sign up</Link>} />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-foreground/80 hover:bg-secondary"
          >
            {open ? <CloseIcon className="!size-5" /> : <MenuIcon className="!size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/70 bg-background px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
