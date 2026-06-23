"use client";

import { useState } from "react";
import { Check, ChevronRight, Layers } from "lucide-react";
import { INCLUDED, INCLUDED_TOTAL, INCLUDED_PRICE } from "@/lib/data";
import { AxnixLogo } from "@/components/brand/AxnixLogo";

// Real tools each feature replaces — rendered from the Simple Icons CDN.
// Slugs that aren't available fall back to a neutral mark automatically.
const BRANDS: string[][] = [
  ["hubspot", "pipedrive"],                                   // CRM & Pipeline
  ["clickfunnels", "kajabi"],                                 // Sales Funnels
  ["wordpress", "wix", "squarespace"],                        // Website Builder
  ["surveymonkey", "jotform", "wufoo", "typeform"],           // Surveys & Forms
  ["activecampaign", "mailchimp", "hubspot", "constantcontact"], // Email Marketing
  ["twilio", "mailgun", "podium"],                            // 2-Way SMS
  ["calendly", "googlecalendar", "acuityscheduling"],         // Booking
  ["activecampaign", "hubspot", "keap"],                      // Workflow Automations
  ["kajabi", "teachable"],                                    // Courses / Products
  ["callrail", "twilio"],                                     // Call Tracking
  ["birdeye", "podium", "trustpilot"],                        // Reputation
  ["googleanalytics"],                                        // Tracking & Analytics
  ["skool", "mightynetworks", "discourse"],                   // Communities
  ["pandadoc", "docusign"],                                   // Document Signing
];

const COLS = "grid-cols-[1.7fr_1.3fr_1fr_0.55fr]";

export function AxnixIncluded() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#06150e] via-[#08221a] to-[#051611] px-4 py-14 sm:px-10 sm:py-16">
        {/* green glow, top-left */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -top-24 h-80 w-96 rounded-full bg-brand-500/25 blur-[110px]"
        />

        <h2 className="relative text-center font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          What&apos;s included with{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">Axnix</span>
        </h2>

        {/* table */}
        <div className="relative mt-12 overflow-x-auto">
          <div className="mx-auto min-w-[640px] max-w-5xl">
            {/* header */}
            <div className={`grid ${COLS} items-center px-5 pb-4`}>
              <span className="font-display text-2xl font-extrabold text-white">Features</span>
              <Cell divider>
                <span className="font-display text-2xl font-extrabold text-white">Replaces</span>
              </Cell>
              <Cell divider>
                <span className="font-display text-2xl font-extrabold text-white">Other tools</span>
              </Cell>
              <Cell divider>
                <AxnixLogo markSize={28} textClassName="text-white text-2xl" />
              </Cell>
            </div>

            {/* feature rows */}
            {INCLUDED.map((row, i) => (
              <Row
                key={row.feature}
                feature={row.feature}
                brands={BRANDS[i] ?? []}
                otherTools={`$${row.price}/MONTHLY`}
              />
            ))}

            {/* unique row */}
            <Row
              feature="Gray-Labeled Mobile App"
              brands={[]}
              otherTools="UNIQUE TO AXNIX"
            />

            {/* overall price */}
            <div
              className={`mt-3 grid ${COLS} items-center rounded-xl bg-white/[0.04] px-5 py-4 ring-1 ring-brand-500/20`}
            >
              <span className="text-sm font-extrabold uppercase tracking-wider text-brand-400">
                Overall Price
              </span>
              <Cell divider>
                <span />
              </Cell>
              <Cell divider>
                <span className="text-sm font-bold text-white/90">
                  {INCLUDED_TOTAL} PER MONTH
                </span>
              </Cell>
              <Cell divider>
                <span className="font-display text-3xl font-extrabold leading-none text-brand-400">
                  <span className="align-top text-base">$</span>
                  {INCLUDED_PRICE.replace("$", "")}
                </span>
              </Cell>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-10 flex justify-center">
          <a
            href="#get-started"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-[15px] font-bold text-neutral-900 transition-all duration-200 hover:bg-neutral-100 active:scale-[0.98]"
          >
            Start 14 Day Free Trial
            <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Row({
  feature,
  brands,
  otherTools,
}: {
  feature: string;
  brands: readonly string[];
  otherTools: string;
}) {
  return (
    <div
      className={`mb-2.5 grid ${COLS} items-center rounded-xl bg-white/[0.03] px-5 py-3.5 ring-1 ring-white/[0.06] transition-colors hover:bg-white/[0.05]`}
    >
      <span className="text-xs font-bold uppercase tracking-wider text-white/90 sm:text-[13px]">
        {feature}
      </span>

      <Cell divider>
        <div className="flex items-center gap-1.5">
          {brands.map((slug) => (
            <BrandLogo key={slug} slug={slug} />
          ))}
        </div>
      </Cell>

      <Cell divider>
        <span className="text-[13px] font-semibold text-white/75">{otherTools}</span>
      </Cell>

      <Cell divider>
        <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500/15 text-brand-400 ring-1 ring-brand-400/30">
          <Check className="h-4 w-4" strokeWidth={3} />
        </span>
      </Cell>
    </div>
  );
}

/** A real brand logo (Simple Icons CDN) in a white chip; falls back if missing. */
function BrandLogo({ slug }: { slug: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <span className="grid h-7 w-7 shrink-0 place-items-center overflow-hidden rounded-full bg-white shadow-sm">
      {failed ? (
        <Layers className="h-3.5 w-3.5 text-neutral-400" strokeWidth={2} />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt={slug}
          className="h-4 w-4 object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}

function Cell({
  children,
  divider,
}: {
  children: React.ReactNode;
  divider?: boolean;
}) {
  return (
    <div className={divider ? "border-l border-white/[0.08] pl-4" : ""}>{children}</div>
  );
}
