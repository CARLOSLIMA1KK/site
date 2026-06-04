"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import Button from "./Button";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled ? "shadow-card" : ""
      } bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80`}
    >
      <div className="container-page">
        <div className="flex h-[72px] items-center justify-between gap-4">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setOpenMenu(null)}>
            {NAV.map((item) =>
              item.columns ? (
                <div key={item.label} className="relative" onMouseEnter={() => setOpenMenu(item.label)}>
                  <button
                    className="flex items-center gap-1 rounded-full px-3.5 py-2 text-[15px] font-semibold text-ink transition hover:bg-bg-soft"
                    aria-expanded={openMenu === item.label}
                  >
                    {item.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={`transition-transform ${openMenu === item.label ? "rotate-180" : ""}`}>
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openMenu === item.label && <MegaMenu item={item} />}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-[15px] font-semibold text-ink transition hover:bg-bg-soft"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right actions */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <Button href={SITE.login} external variant="secondary" size="sm">
              Entrar
            </Button>
            <Button href={SITE.ctaPrimaryHref} variant="primary" size="sm">
              Quero na minha escola
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
            onClick={() => setDrawer(true)}
            aria-label="Abrir menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawer && <MobileDrawer onClose={() => setDrawer(false)} />}
      </AnimatePresence>
    </header>
  );
}

function MegaMenu({ item }) {
  const wide = item.columns.length > 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
      className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
    >
      <div
        className={`rounded-lg border border-line bg-white p-5 shadow-pop ${
          wide ? "grid w-[680px] grid-cols-3 gap-x-6 gap-y-2" : "w-[340px]"
        }`}
      >
        {item.columns.map((col, ci) => (
          <div key={ci}>
            {col.title && (
              <p className="mb-2 px-3 text-xs font-bold uppercase tracking-wider text-verde-700">{col.title}</p>
            )}
            <ul className="space-y-0.5">
              {col.items.map((sub) => (
                <li key={sub.href}>
                  <Link
                    href={sub.href}
                    className="block rounded-md px-3 py-2 transition hover:bg-bg-soft"
                  >
                    <span className="block text-[15px] font-semibold text-ink">{sub.label}</span>
                    {sub.desc && <span className="block text-[13px] text-slate">{sub.desc}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function MobileDrawer({ onClose }) {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-40 bg-ink/40 lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.aside
        className="fixed right-0 top-0 z-50 h-full w-[88%] max-w-sm overflow-y-auto bg-white p-5 lg:hidden"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.28 }}
      >
        <div className="mb-4 flex items-center justify-between">
          <Logo />
          <button
            onClick={onClose}
            aria-label="Fechar menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="space-y-1">
          {NAV.map((item) =>
            item.columns ? (
              <details key={item.label} className="group rounded-md">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-3 font-semibold text-ink">
                  {item.label}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="transition-transform group-open:rotate-180">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <div className="space-y-2 pb-2 pl-3">
                  {item.columns.map((col, ci) => (
                    <div key={ci}>
                      {col.title && <p className="px-3 pt-2 text-xs font-bold uppercase tracking-wider text-verde-700">{col.title}</p>}
                      {col.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={onClose}
                          className="block rounded-md px-3 py-2 text-[15px] text-slate hover:bg-bg-soft"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="block rounded-md px-3 py-3 font-semibold text-ink hover:bg-bg-soft"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="mt-6 space-y-3 border-t border-line pt-6">
          <Button href={SITE.ctaPrimaryHref} variant="primary" className="w-full" onClick={onClose}>
            {SITE.ctaPrimary}
          </Button>
          <Button href={SITE.login} external variant="secondary" className="w-full">
            Entrar na plataforma
          </Button>
        </div>
      </motion.aside>
    </>
  );
}
