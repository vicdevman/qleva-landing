import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/qleva-brand-kit/qleva-icon-white-bg.png"
            alt="Qleva"
            width={28}
            height={28}
            className="hidden dark:block rounded-lg"
          />
          <Image
            src="/qleva-brand-kit/qleva-icon-black-bg.png"
            alt="Qleva"
            width={28}
            height={28}
            className="block dark:hidden rounded-lg"
          />
          <div className="text-sm text-foreground/70">
            © {new Date().getFullYear()} Qleva
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm text-foreground/70">
          <a className="hover:text-foreground" href="#product">
            Product
          </a>
          <a className="hover:text-foreground" href="#why">
            Why
          </a>
          <a className="hover:text-foreground" href="#roadmap">
            Roadmap
          </a>
        </div>
      </div>
    </footer>
  );
}
