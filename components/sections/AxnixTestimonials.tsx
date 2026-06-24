"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Avatar } from "@/components/mockups/Frames";

type Story = { quote: string; name: string; role: string; color: string };

const COLUMNS: Story[][] = [
  [
    {
      quote:
        "Axnix streamlined our marketing workflows made campaigns effortless and increased conversions within weeks.",
      name: "Emma",
      role: "Marketing manager",
      color: "#f59e0b",
    },
    {
      quote:
        "From lead capture to final conversion, Axnix seamlessly streamlined our entire marketing process, improving efficiency, enhancing customer engagement, boosting campaign performance, and helping our team achieve consistent, measurable business growth faster.",
      name: "Michael lee",
      role: "Digital marketing lead",
      color: "#0ea5e9",
    },
  ],
  [
    {
      quote:
        "Axnix has completely transformed our marketing workflow. Its intuitive automation tools save countless hours each week, boost team productivity, and ensure every campaign runs smoothly, efficiently, and delivers measurable results.",
      name: "Jane doe",
      role: "Saas founder",
      color: "#c2607a",
    },
    {
      quote:
        "Axnix automation reduced manual work and helped our team focus on strategy.",
      name: "Daniel carter",
      role: "Growth director",
      color: "#1f2937",
    },
  ],
  [
    {
      quote:
        "Real-time analytics from Axnix empowered our team to make smarter marketing decisions instantly, optimize campaigns effectively, and identify growth opportunities faster than ever before.",
      name: "Emily clark",
      role: "Growth specialist",
      color: "#16bd5e",
    },
    {
      quote:
        "Axnix gave us complete control over our marketing automation. Campaign execution is smoother, reporting is clearer, and our overall conversion rates have improved dramatically.",
      name: "Sophia martinez",
      role: "Head of marketing",
      color: "#8b5cf6",
    },
  ],
];

export function AxnixTestimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      {/* Heading */}
      <div className="text-center">
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
          Loved by marketing teams everywhere
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg">
          Real teams use Axnix to manage campaigns, track performance, and boost
          conversions effortlessly.
        </p>
      </div>

      {/* Masonry testimonials */}
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {COLUMNS.map((col, ci) => (
          <div key={ci} className={`flex flex-col gap-6 ${ci === 1 ? "lg:mt-14" : ""}`}>
            {col.map((s, i) => (
              <StoryCard key={s.name} story={s} delay={(ci + i) * 0.05} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function StoryCard({ story, delay }: { story: Story; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl bg-white p-7 shadow-[0_24px_60px_-40px_rgba(13,22,34,0.35)] ring-1 ring-black/[0.03]"
    >
      <Quote className="h-8 w-8 text-brand-500" fill="currentColor" strokeWidth={0} />
      <p className="mt-5 text-[15px] leading-relaxed text-neutral-700">
        &ldquo;{story.quote}&rdquo;
      </p>
      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="leading-tight">
          <div className="font-semibold text-neutral-900">{story.name}</div>
          <div className="mt-0.5 text-sm text-neutral-400">{story.role}</div>
        </div>
        <Avatar name={story.name} color={story.color} size={56} ring />
      </div>
    </motion.div>
  );
}
