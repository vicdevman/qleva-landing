import Image from "next/image";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/qleva-brand-kit/qleva-logo-black.png"
            alt="Qleva"
            width={92}
            height={28}
            className="block dark:hidden w-8"
            priority
          />
          <Image
            src="/qleva-brand-kit/qleva-logo-white.png"
            alt="Qleva"
            width={92}
            height={28}
            className="hidden dark:block  w-8"
            priority
          />
          <span className="sr-only">Qleva</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-foreground/70 md:flex">
          <a className="hover:text-foreground" href="#product">
            Product
          </a>
          <a className="hover:text-foreground" href="#why">
            Why Qleva
          </a>
          <a className="hover:text-foreground" href="#roadmap">
            Roadmap
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="outline"
            className="hidden md:inline-flex"
            onClick={() => {
              const el = document.querySelector("#cta");
              el?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Get early access
          </Button>
        </div>
      </div>
    </header>
  );
}
