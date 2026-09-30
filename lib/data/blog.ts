import { BlogPost } from "@/lib/types";

// Each post's publishDate should be the real date it was authored — not a shared/backdated value.
// Replace the placeholder dates below with the actual dates these were written.

export const blogPosts: BlogPost[] = [
  {
    slug: "why-is-my-water-cold",
    category: "Water Heaters",
    title: "Why Is My Water Cold? 7 Common Causes",
    metaDescription:
      "Hot water suddenly gone cold, or never got hot at all? Here are the most common causes and what they usually mean.",
    excerpt: "Hot water that's suddenly cold — or never got hot at all — usually points to one of a handful of causes.",
    publishDate: "2026-08-20", // TODO: replace with the real publish date
    body: [
      {
        type: "p",
        text: "Cold water where hot water should be is one of the most common plumbing complaints, and it has a fairly short list of usual causes. Here's what's typically behind it.",
      },
      { type: "h2", text: "1. The Pilot Light or Ignition Has Gone Out (Gas Units)" },
      {
        type: "p",
        text: "For gas water heaters, a pilot light that's gone out — or an ignition system that's failing — is one of the most common reasons for a sudden loss of hot water.",
      },
      { type: "h2", text: "2. A Tripped Breaker or Failed Heating Element (Electric Units)" },
      {
        type: "p",
        text: "Electric water heaters rely on one or two heating elements. If a breaker has tripped, or an element has failed, hot water can disappear suddenly rather than gradually.",
      },
      { type: "h2", text: "3. Sediment Buildup" },
      {
        type: "p",
        text: "Over time, sediment settles at the bottom of a tank and can interfere with heating efficiency — more of a gradual decline than a sudden loss, but a real contributor.",
      },
      { type: "h2", text: "4. A Faulty Thermostat" },
      {
        type: "p",
        text: "If the thermostat that controls tank temperature fails, water may not heat at all, or may heat inconsistently.",
      },
      { type: "h2", text: "5. Crossed Connections in the Plumbing" },
      {
        type: "p",
        text: "In some cases, a plumbing connection issue can mix cold water into the hot line, especially if work was recently done on the system.",
      },
      { type: "h2", text: "6. The Unit Has Simply Reached the End of Its Life" },
      {
        type: "p",
        text: "Storage tank water heaters typically last around 8-12 years. A unit at or past that age failing outright isn't unusual.",
      },
      { type: "h2", text: "7. High Demand Outpacing Tank Recovery" },
      {
        type: "p",
        text: "Running multiple hot-water fixtures at once (showers, laundry, dishwasher) can outpace a tank's recovery rate, especially in a smaller unit.",
      },
      {
        type: "p",
        text: "If basic checks (breaker, pilot light, thermostat setting) don't explain it, that's the point to have it diagnosed rather than keep guessing.",
      },
      {
        type: "citation",
        text: "For general water heater maintenance and lifespan guidance, see the",
        url: "https://www.portland.gov/water/drinking-water-quality/troubleshooting-drinking-water-quality-home/water-heater-maintenance",
        source: "Portland Water Bureau's water heater maintenance guide",
      },
    ],
    faqs: [
      {
        q: "Is it normal for hot water to run out during a shower?",
        a: "Occasionally, yes — high demand can outpace a tank's recovery rate. If it happens consistently, that points to a sizing or unit-condition issue worth checking.",
      },
      {
        q: "Can I fix a pilot light that's gone out myself?",
        a: "Many gas water heaters have relighting instructions on the unit itself. If it won't stay lit, that usually points to a thermocouple issue worth having looked at.",
      },
    ],
    relatedServiceSlugs: ["water-heater-repair-tupelo-ms", "water-heater-installation-tupelo-ms", "tankless-water-heaters-tupelo-ms"],
  },
  {
    slug: "hydro-jetting-vs-drain-snaking",
    category: "Drain & Sewer",
    title: "Hydro Jetting vs. Drain Snaking: What's the Difference?",
    metaDescription:
      "Not sure whether you need drain snaking or hydro jetting? Here's how the two methods actually differ and when each one applies.",
    excerpt: "Two different tools for two different kinds of clogs — here's how to tell which situation you're in.",
    publishDate: "2026-08-25", // TODO: replace with the real publish date
    body: [
      {
        type: "p",
        text: "Both drain snaking and hydro jetting clear blocked pipes, but they solve different problems — using the wrong one for a recurring issue is a common reason a clog keeps coming back.",
      },
      { type: "h2", text: "What Drain Snaking Does" },
      {
        type: "p",
        text: "A drain snake (or auger) is a flexible cable fed into a pipe to break up or retrieve a specific blockage — hair, a foreign object, a localized clog. It's fast and effective for most everyday clogs.",
      },
      { type: "h2", text: "What Hydro Jetting Does" },
      {
        type: "p",
        text: "Hydro jetting uses high-pressure water to scour the full interior of a pipe, clearing buildup along the entire length rather than just punching through one spot. It's the better option for grease coating, mineral scale, or root intrusion.",
      },
      { type: "h2", text: "How to Tell Which One You Need" },
      {
        type: "list",
        items: [
          "A first-time, localized clog → snaking is usually enough",
          "The same drain clogs again within weeks → likely buildup, not a single blockage — jetting",
          "Multiple fixtures backing up together → may point to a main line issue, worth a camera inspection first",
          "A commercial kitchen line with ongoing grease buildup → jetting is generally the more durable fix",
        ],
      },
      { type: "h2", text: "A Word on Pipe Condition" },
      {
        type: "p",
        text: "Jetting is safe for pipes in good structural condition, but older or already-damaged pipes are often checked with a camera inspection first to confirm they can handle it.",
      },
    ],
    faqs: [
      {
        q: "Can hydro jetting damage older pipes?",
        a: "Jetting is safe for pipes in sound structural condition. Older or already-damaged pipes are often checked with a camera inspection first to confirm they can handle it.",
      },
      {
        q: "How do I know which one I actually need?",
        a: "A first-time, localized clog usually just needs snaking. A drain that keeps clogging in the same spot is the clearest sign jetting is the better fix.",
      },
    ],
    relatedServiceSlugs: ["hydro-jetting-tupelo-ms", "drain-cleaning-tupelo-ms", "sewer-camera-inspection-tupelo-ms"],
  },
  {
    slug: "what-to-do-before-the-plumber-arrives",
    category: "Emergency Plumbing",
    title: "What to Do Before the Plumber Arrives During a Plumbing Emergency",
    metaDescription:
      "Burst pipe or major leak? Here's what to do in the first few minutes while you wait for help to arrive.",
    excerpt: "A few simple steps in the first few minutes can meaningfully limit the damage from a plumbing emergency.",
    publishDate: "2026-08-28", // TODO: replace with the real publish date
    body: [
      {
        type: "p",
        text: "During an active plumbing emergency — a burst pipe, a major leak, water pooling near electrical outlets — what happens in the first few minutes matters. Here's the short version of what to do.",
      },
      { type: "h2", text: "1. Shut Off the Water" },
      {
        type: "p",
        text: "If you can safely access the main shut-off valve, turning it off stops the situation from getting worse while help is on the way.",
      },
      { type: "h2", text: "2. Turn Off Electricity Near the Water" },
      {
        type: "p",
        text: "If water is reaching outlets, wiring, or appliances, shutting off electricity to that area is a safety priority, not an optional step.",
      },
      { type: "h2", text: "3. Move Belongings Out of the Way" },
      {
        type: "p",
        text: "If it's safe to do so, move furniture, electronics, and valuables away from the affected area.",
      },
      { type: "h2", text: "4. Don't Try to Fix It Yourself Under Pressure" },
      {
        type: "p",
        text: "It's tempting to attempt a quick fix on a burst pipe or major leak, but a rushed attempt can sometimes make the damage worse or complicate the actual repair.",
      },
      { type: "h2", text: "5. Have the Basics Ready When You Call" },
      {
        type: "p",
        text: "Being able to describe what's happening — where the water is coming from, whether it's still running, what you've already shut off — helps the call go faster.",
      },
    ],
    howToSteps: [
      { name: "Shut Off the Water", text: "If you can safely access the main shut-off valve, turning it off stops the situation from getting worse while help is on the way." },
      { name: "Turn Off Electricity Near the Water", text: "If water is reaching outlets, wiring, or appliances, shutting off electricity to that area is a safety priority, not an optional step." },
      { name: "Move Belongings Out of the Way", text: "If it's safe to do so, move furniture, electronics, and valuables away from the affected area." },
      { name: "Don't Try to Fix It Yourself Under Pressure", text: "A rushed attempt at a quick fix can sometimes make the damage worse or complicate the actual repair." },
      { name: "Have the Basics Ready When You Call", text: "Being able to describe where the water is coming from, whether it's still running, and what you've already shut off helps the call go faster." },
    ],
    faqs: [
      {
        q: "Should I turn off the main water valve during any plumbing issue?",
        a: "Only if there's active, worsening water loss — a burst pipe or major leak. For a normal repair need, it's usually not necessary.",
      },
      {
        q: "Is it safe to stay in the house during a plumbing emergency?",
        a: "In most cases yes, as long as water isn't reaching electrical outlets or wiring — that's the specific situation where turning off power to the area matters most.",
      },
    ],
    relatedServiceSlugs: ["emergency-plumbing-tupelo-ms", "repiping-tupelo-ms", "sewer-line-repair-tupelo-ms"],
  },
  {
    slug: "signs-you-need-a-sewer-camera-inspection",
    category: "Drain & Sewer",
    title: "Signs You Need a Sewer Camera Inspection",
    metaDescription: "Recurring drain problems or buying an older home? Here are the signs a sewer camera inspection is worth having.",
    excerpt: "A camera inspection turns guesswork about a sewer line into an actual answer — here's when it's worth it.",
    publishDate: "2026-09-03", // TODO: replace with the real publish date
    body: [
      {
        type: "p",
        text: "A sewer line runs out of sight underground, which makes it one of the harder parts of a home's plumbing to diagnose without a direct look. Here are the situations where a camera inspection genuinely earns its cost.",
      },
      { type: "h2", text: "A Drain Keeps Clogging in the Same Spot" },
      {
        type: "p",
        text: "If clearing a clog only buys a few weeks before it's back, the cause is likely something structural or buildup-related further down the line — worth seeing directly rather than repeating the same fix.",
      },
      { type: "h2", text: "Multiple Fixtures Are Slow or Backing Up Together" },
      {
        type: "p",
        text: "This pattern usually points toward the main line rather than any single fixture, which a camera inspection can confirm.",
      },
      { type: "h2", text: "Unexplained Wet Spots, Odor, or Unusually Green Grass in the Yard" },
      {
        type: "p",
        text: "These can be signs of a leaking or damaged sewer line beneath the yard.",
      },
      { type: "h2", text: "Buying or Selling a Home With an Older Sewer Line" },
      {
        type: "p",
        text: "A standard home inspection typically doesn't look inside the sewer line itself. For an older home, a separate camera inspection is the way to actually confirm its condition before a sale closes.",
      },
      { type: "h2", text: "Before Committing to a Repair" },
      {
        type: "p",
        text: "Seeing the actual problem — a root intrusion, a cracked section, general buildup — determines whether the right next step is hydro jetting, a spot repair, or full replacement.",
      },
    ],
    faqs: [
      {
        q: "Does a sewer camera inspection hurt my landscaping?",
        a: "No — it's a diagnostic tool fed through existing access points and doesn't require digging.",
      },
      {
        q: "How often should an older sewer line be inspected?",
        a: "There's no universal schedule; it's typically driven by symptoms (recurring clogs, yard signs) or a real-estate transaction rather than a routine calendar.",
      },
    ],
    relatedServiceSlugs: ["sewer-camera-inspection-tupelo-ms", "sewer-line-repair-tupelo-ms", "hydro-jetting-tupelo-ms"],
  },
];