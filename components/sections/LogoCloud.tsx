"use client";

import { useState } from "react";
import { Marquee } from "@/components/ui/Marquee";

// `slug` present → real brand icon from the Simple Icons CDN. Brands without a
// CDN icon render as a clean wordmark (no broken images).
const BRANDS: { name: string; slug?: string }[] = [
  { name: "WooCommerce", slug: "woocommerce" },
  { name: "Printful" },
  { name: "Zapier", slug: "zapier" },
  { name: "WhatsApp", slug: "whatsapp" },
  { name: "Wave" },
  { name: "Clio" },
  { name: "Shopify", slug: "shopify" },
  { name: "TikTok", slug: "tiktok" },
  { name: "LinkedIn" },
  { name: "Shippo" },
  { name: "Instagram", slug: "instagram" },
  { name: "Google Business", slug: "google" },
];

export function LogoCloud() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-8">
      <p className="text-center text-base font-medium text-neutral-500">
        Trusted by marketing teams globally
      </p>

      <div className="mt-10">
        <Marquee speed={42}>
          {BRANDS.map((b) => (
            <LogoItem key={b.name} name={b.name} slug={b.slug} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function LogoItem({ name, slug }: { name: string; slug?: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="mx-8 flex shrink-0 items-center gap-2.5 opacity-80 transition-opacity duration-200 hover:opacity-100">
      {slug && !failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt=""
          aria-hidden
          className="h-8 w-8 object-contain"
          onError={() => setFailed(true)}
        />
      )}
      <span className="whitespace-nowrap text-xl font-bold tracking-tight text-neutral-600">
        {name}
      </span>
    </div>
  );
}
