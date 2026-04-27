import Image from "next/image";

import * as React from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const navRef = React.useRef<HTMLDivElement | null>(null);
  const linkRefs = React.useRef<Record<string, HTMLAnchorElement | null>>({});
  const [active, setActive] = React.useState("product");
  const [indicator, setIndicator] = React.useState<{ left: number; width: number } | null>(
    null
  );

  const setIndicatorTo = React.useCallback(
    (id: string) => {
      const nav = navRef.current;
      const el = linkRefs.current[id];
      if (!nav || !el) return;

      const navRect = nav.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();

      setIndicator({
        left: elRect.left - navRect.left,
        width: elRect.width,
      });
    },
    [setIndicator]
  );

  React.useEffect(() => {
    setIndicatorTo(active);
  }, [active, setIndicatorTo]);

  React.useEffect(() => {
    const ids = ["product", "why", "roadmap", "cta"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        const top = visible[0];
        const id = top?.target?.id;
        if (id) setActive(id);
      },
      {
        root: null,
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="w-full max-w-6xl top-4 left-1/2 -translate-x-1/2 fixed z-1000">

<div className="fixed left-1/2 -translate-x-1/2">
   <div
            ref={navRef}
            className="relative hidden items-center gap-1 rounded-full border border-foreground/10 bg-foreground/3 p-1 text-sm text-foreground/70 md:flex backdrop-blur-sm"
            onMouseLeave={() => setIndicatorTo(active)}
          >
            {indicator ? (
              <div
                className="pointer-events-none absolute top-1 h-[calc(100%-8px)] rounded-full bg-foreground/10 transition-all duration-200"
                style={{ left: indicator.left, width: indicator.width }}
              />
            ) : null}

            <a
              ref={(el) => {
                linkRefs.current.product = el;
              }}
              className="relative z-10 rounded-lg px-3 py-2.5 hover:text-foreground"
              href="#product"
              onMouseEnter={() => setIndicatorTo("product")}
            >
              Product
            </a>
            <a
              ref={(el) => {
                linkRefs.current.why = el;
              }}
              className="relative z-10 rounded-lg px-3 py-2 hover:text-foreground"
              href="#why"
              onMouseEnter={() => setIndicatorTo("why")}  
            >
              Benefits
            </a>
            <a
              ref={(el) => {
                linkRefs.current.roadmap = el;
              }}
              className="relative z-10 rounded-lg px-3 py-2 hover:text-foreground"
              href="#roadmap"
              onMouseEnter={() => setIndicatorTo("roadmap")}
            >
              Roadmap
            </a>
            <a
              ref={(el) => {
                linkRefs.current.cta = el;
              }}
              className="relative z-10 rounded-lg px-3 py-2 hover:text-foreground"
              href="#cta"
              onMouseEnter={() => setIndicatorTo("cta")}
            >
              Early access
            </a>
          </div>
</div>
      {/* <div className="relative rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-xl"> */}
        {/* <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(90%_120%_at_50%_0%,rgba(255,255,255,0.14),rgba(255,255,255,0))] dark:bg-[radial-gradient(90%_120%_at_50%_0%,rgba(255,255,255,0.08),rgba(255,255,255,0))]" /> */}
        <div className="flex gap-2 w-full justify-between px-4">
          <a href="#" className="flex items-center gap-3">
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
              className="hidden dark:block w-8"
              priority
            />
            <span className="sr-only">Qleva</span>
          </a>

       

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              onClick={() => {
                const el = document.querySelector("#cta");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Get early access
            </Button>
          </div>
        </div>
      {/* </div> */}
    </header>
  );
}
