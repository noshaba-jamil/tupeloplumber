import { ServicePage } from "@/lib/types";
import { SITE } from "@/lib/site";

export const services: ServicePage[] = [
  // ---------- CORE PLUMBING ----------
  {
    slug: "plumbing-repair-tupelo-ms",
    cluster: "Core Plumbing",
    navLabel: "Plumbing Repair",
    title: "Plumbing Repair in Tupelo, MS",
    metaDescription:
      "Plumbing problem in Tupelo, MS? From running toilets to minor leaks, get it diagnosed and repaired — or find the right specific service below.",
    h1: "Plumbing Repair in Tupelo, MS",
    intro:
      "Everyday repairs for homes and businesses throughout Tupelo and the surrounding area.",
    body: [
      {
        type: "p",
        text: "Not every plumbing problem is an emergency, and not every problem needs a specialized service. A running toilet, a dripping faucet, a slow leak under a sink, or a valve that's stuck — these are the everyday repairs most homes need at some point, and most are straightforward to diagnose and fix.",
      },
      { type: "h2", text: "Is This an Emergency?" },
      {
        type: "p",
        text: "If water is actively flooding, a pipe has burst, or sewage is backing up, that's an emergency — see Emergency Plumbing instead. Most other plumbing issues can be scheduled as a standard repair.",
      },
      { type: "h2", text: "Common Plumbing Repairs" },
      {
        type: "list",
        items: [
          "Running or leaking toilets — usually a worn flapper, fill valve, or flush mechanism, often an inexpensive part-level fix",
          "Dripping faucets — typically a worn washer, cartridge, or O-ring that wears out gradually with normal use",
          "Minor leaks under sinks or at fittings — loose connections or worn seals, sometimes just a matter of tightening or resealing a joint",
          "Slow or stuck shut-off valves — common in older homes where a valve hasn't been operated in years and has partially seized",
          "Inconsistent water flow at a single fixture — often a clogged aerator, a partially closed valve, or a fixture-specific blockage rather than a whole-house issue",
          "Running water sounds with no fixture in use — can be a stuck fill valve, a small leak, or a fixture cycling on its own",
        ],
      },
      { type: "h2", text: "What Plumbing Repair Covers" },
      {
        type: "p",
        text: "Plumbing repair is the general category for issues that don't fall neatly into a more specific service — not every problem is a drain clog, a water heater issue, or a fixture replacement. If something in the house's plumbing isn't working the way it should and it's not clear which specific service applies, that's exactly what a general repair call is for. A plumber can identify the actual cause during the visit rather than requiring a precise diagnosis beforehand.",
      },
      { type: "h2", text: "Repair or Replace?" },
      {
        type: "p",
        text: "Most everyday plumbing issues are repairable — a worn part gets replaced, a loose connection gets resealed, a stuck valve gets freed or swapped. Replacement becomes the better option when a fixture or component has failed in multiple ways, is old enough that replacement parts are hard to source, or when the cost of repeated repairs starts to approach the cost of simply replacing it. An in-person look is the most reliable way to know which applies to a specific situation.",
      },
      { type: "h2", text: "Not Sure What's Wrong?" },
      {
        type: "p",
        text: "Some problems point toward a more specific service: clogged or slow drains, no hot water or water heater issues, a specific fixture needing repair, or a leak you can't locate. If it's not clear which category fits, that's a normal thing to describe over the phone — describing the symptoms is enough to get started.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between a plumbing repair and an emergency?",
        a: "An emergency is active, worsening damage — a burst pipe, major leak, or sewage backup. A repair is something that needs fixing but can be scheduled.",
      },
      {
        q: "What are the most common plumbing repairs?",
        a: "Running toilets, dripping faucets, minor leaks at fittings, and stuck shut-off valves are among the most frequent.",
      },
      {
        q: "I'm not sure what's wrong — how do I know who to call?",
        a: "Describing the symptoms is enough to start — a specific diagnosis doesn't need to happen before calling.",
      },
      {
        q: "Is it cheaper to repair or replace a fixture?",
        a: "Usually repair, for an otherwise sound fixture with a single worn part. Replacement tends to make more sense once a fixture has failed in multiple ways or parts are hard to find.",
      },
      {
        q: "How long does a typical plumbing repair take?",
        a: "Most everyday repairs — a running toilet, a dripping faucet, a stuck valve — are completed in a single visit.",
      },
      {
        q: "Do I need to know exactly what's wrong before calling?",
        a: "No — describing the symptoms is enough. The specific cause gets identified during the visit.",
      },
    ],
    relatedServiceSlugs: [
  "emergency-plumbing-tupelo-ms",
  "drain-cleaning-tupelo-ms",
  "water-heater-repair-tupelo-ms",
  "water-filtration-tupelo-ms",
  "sump-pump-tupelo-ms",
],
    ctaLabel: "Have a Plumbing Problem That Needs Fixing?",
  },
  {
    slug: "emergency-plumbing-tupelo-ms",
    cluster: "Core Plumbing",
    navLabel: "Emergency Plumbing",
    title: "24/7 Emergency Plumber in Tupelo, MS",
    metaDescription:
      "Burst pipe, sewage backup, or no water in Tupelo, MS? 24/7 emergency plumbing with a 60-minute arrival target and no call-out fee.",
    h1: "24/7 Emergency Plumbing in Tupelo, MS",
    intro:
      "Available around the clock for plumbing problems that are actively causing damage right now.",
    body: [
      {
        type: "p",
        text: "Some plumbing problems can wait for a scheduled appointment. Others are actively damaging your home or leaving you without water right now — that's what emergency plumbing service is for, available 24 hours a day, 7 days a week.",
      },
      { type: "h2", text: "Do I Need an Emergency Plumber Right Now?" },
      {
        type: "p",
        text: "Not every plumbing problem needs to be treated the same way. A rough guide:",
      },
      {
        type: "list",
        items: [
          "Call immediately — a burst pipe, an uncontrolled active leak, a sewage backup, water near electrical equipment, or water intruding through a ceiling or wall",
          "Shut off water and arrange prompt service — a leaking water heater, no water anywhere in the home, or a leak that's visibly worsening",
          "Can usually wait for scheduled service — a dripping faucet, a slow drain, a minor running toilet, or a cosmetic fixture issue",
        ],
      },
      { type: "h2", text: "What Counts as a Plumbing Emergency" },
      {
        type: "list",
        items: [
          "A burst or actively leaking supply pipe",
          "Sewage backing up into a sink, tub, or floor drain",
          "Complete loss of water service",
          "A water heater leaking significantly, especially near electrical components",
          "An overflowing toilet that won't stop with the shutoff valve closed",
          "Water coming through a ceiling, wall, or spreading rapidly",
          "Any leak near electrical outlets, wiring, or a breaker panel",
        ],
      },
      { type: "h2", text: "Shutting Off Your Water" },
      {
        type: "p",
        text: "Most homes have a main shut-off valve near where the water line enters the house — often in a basement, crawl space, utility closet, or near the water meter. Turning this off stops water flow to the entire home, which is the right first move for almost any active leak or burst pipe while help is on the way. If you don't already know where yours is, it's worth locating it before an emergency happens, not during one.",
      },
      { type: "h2", text: "A Burst Pipe" },
      {
        type: "p",
        text: "Shut off the main water valve first, then the water heater if the burst section is on the hot-water side. Open a nearby faucet to relieve pressure in the line, and move anything valuable away from the area. A single burst pipe can be an isolated failure, but repeated failures, visible corrosion, or discolored water afterward can be signs the surrounding piping has aged out more broadly — see Repiping if that pattern sounds familiar.",
      },
      { type: "h2", text: "A Sewage Backup" },
      {
        type: "p",
        text: "Stop using drains and toilets in the affected area immediately — running more water through a backed-up line makes the problem worse. Keep people and pets away from the affected area, since sewage backups are a health hazard, not just a mess. A backup that keeps recurring, or affects more than one fixture at once, often points to the main sewer line rather than a single clog — see Sewer Line Repair for how that's diagnosed.",
      },
      { type: "h2", text: "An Overflowing Toilet" },
      {
        type: "p",
        text: "Stop flushing — each flush adds more water to an already-overflowing bowl. If accessible, close the toilet's own shutoff valve, usually on the wall or floor behind it; if you can't find it or it doesn't stop the flow, shut off the home's main water valve instead. A toilet that overflows repeatedly, rather than as a one-time clog, is worth having looked at — see Plumbing Repair.",
      },
      { type: "h2", text: "A Water Heater Leaking or Failing Suddenly" },
      {
        type: "p",
        text: "Shut off the water supply to the unit and, if it's electric, the breaker; if it's gas, the gas shut-off valve at the unit. Where the leak is coming from matters: a leak from the tank body itself usually means the tank has failed and needs replacement, while a leak from a connection, valve, or fitting is often repairable without replacing the whole unit. See Water Heater Repair for how that distinction gets made.",
      },
      { type: "h2", text: "Complete Loss of Water" },
      {
        type: "p",
        text: "If every fixture in the house has lost water at the same time, the cause can be a few different things — a municipal water interruption, the main shutoff having been closed, a failed pressure regulator, a frozen or damaged line, or the underground water line from the street. If an underground line turns out to be the cause, see Water Line Services for how that's diagnosed and repaired.",
      },
      { type: "h2", text: "If You Smell Gas" },
      {
        type: "p",
        text: "A suspected gas leak is a safety emergency, not a standard plumbing call. Leave the property immediately, don't operate light switches or anything that could create a spark, and call your gas utility's emergency line or 911 from outside the home. Don't return until it's been confirmed safe.",
      },
      { type: "h2", text: "If Water Reaches Electrical Equipment" },
      {
        type: "p",
        text: "This is the one situation where electrical safety comes before the plumbing problem itself. Do not enter standing water near outlets, a breaker panel, or wiring. Do not touch any electrical switch or outlet with wet hands or while standing in water. If power can be shut off at the breaker box without stepping into water, do so; if it can't be reached safely, leave the area and wait for help rather than risk it.",
      },
      { type: "h2", text: "Residential vs. Commercial Emergencies" },
      {
        type: "p",
        text: "The response is the same 24/7 service either way, but a business emergency often comes with added considerations — protecting inventory, limiting customer-facing disruption, or coordinating around operating hours. See Commercial Plumbing for how that's handled specifically.",
      },
      { type: "h2", text: "What Happens When You Call" },
      {
        type: "p",
        text: `Call ${SITE.phoneDisplay} and describe what's happening — a specific diagnosis isn't needed to get started. Emergency calls target a ${SITE.emergencyArrivalMinutes}-minute arrival, there's no charge just for someone to come look at the problem, and pricing is confirmed before any work begins.`,
      },
      { type: "h2", text: "What Affects Emergency Plumbing Cost" },
      {
        type: "p",
        text: "Emergency and after-hours calls typically cost more than a standard scheduled repair, since they involve immediate response outside normal hours. As a general market reference for the Tupelo area — not a fixed price list — plumbing service calls commonly run $70–170, with the total cost depending on factors like the type of emergency, how accessible the problem is, parts needed, and whether excavation or specialized equipment is involved. The exact cost is always confirmed before work starts.",
      },
      { type: "h2", text: "Emergency Plumbing Near Tupelo" },
      {
        type: "p",
        text: "Emergency plumbing service is available in Tupelo and the surrounding communities served, including Saltillo, Verona, Shannon, Mooreville, Guntown, Baldwyn, Fulton, Pontotoc, and Nettleton. See the full list of service areas for coverage further out.",
      },
    ],
    faqs: [
      {
        q: "What counts as a plumbing emergency?",
        a: "Active leaks, burst pipes, sewage backups, and a total loss of water are the clearest examples.",
      },
      {
        q: "Should I shut off my home's water during a plumbing emergency?",
        a: "In most active-leak situations, yes — shutting off the main valve stops the damage from getting worse while help is on the way.",
      },
      {
        q: "What should I do if a pipe bursts?",
        a: "Shut off the main water valve, then the water heater if the burst is on the hot side, open a nearby faucet to relieve pressure, and move valuables away from the area.",
      },
      {
        q: "What should I do if sewage is backing up?",
        a: "Stop using drains and toilets in the affected area right away, and keep people and pets clear — it's a health hazard, not just a mess.",
      },
      {
        q: "Can a plumbing emergency happen without a visible leak?",
        a: "Yes — a complete loss of water, a sudden water heater failure, or a hidden slab leak can all be genuine emergencies with little or no visible water at first.",
      },
      {
        q: "Where is my main water shut-off valve?",
        a: "Most commonly near where the water line enters the home — a basement, crawl space, utility closet, or near the water meter outside.",
      },
      {
        q: "Is it safe to touch anything electrical during a plumbing emergency?",
        a: "Only if it can be done without entering standing water or touching anything while wet — if there's any doubt, leave power off and wait for help.",
      },
      {
        q: "How quickly can someone get here for an emergency?",
        a: `Emergency calls target a ${SITE.emergencyArrivalMinutes}-minute arrival.`,
      },
      {
        q: "Is there a charge just to have someone come look at an emergency?",
        a: "No — there's no call-out fee, and pricing is confirmed before any work starts.",
      },
      {
        q: "Do you provide emergency plumbing for businesses?",
        a: "Yes — commercial emergency plumbing is available with the same 24/7 response as residential service.",
      },
      {
        q: "What areas around Tupelo do you serve for emergency plumbing?",
        a: "Tupelo and the surrounding communities, including Saltillo, Verona, Shannon, Mooreville, Guntown, Baldwyn, Fulton, Pontotoc, and Nettleton.",
      },
      {
        q: "Is emergency service available nights and weekends?",
        a: "Yes — emergency plumbing service is available 24/7, including nights, weekends, and holidays.",
      },
    ],
    relatedServiceSlugs: [
  "plumbing-repair-tupelo-ms",
  "sewer-line-repair-tupelo-ms",
  "water-heater-repair-tupelo-ms",
  "sump-pump-tupelo-ms",
  "commercial-plumbing-tupelo-ms",
],
    ctaLabel: "Dealing With a Plumbing Emergency Right Now?",
  },
  {
    slug: "residential-plumbing-tupelo-ms",
    cluster: "Core Plumbing",
    navLabel: "Residential Plumbing",
    title: "Residential Plumbing in Tupelo, MS",
    metaDescription:
      "Plumbing services for homes in Tupelo, MS — from everyday repairs to water heaters, drains, and repiping.",
    h1: "Residential Plumbing in Tupelo, MS",
    intro: "The full range of plumbing service for homes in and around Tupelo.",
    body: [
      {
        type: "p",
        text: "Plumbing service for homes in Tupelo covers everything from everyday repairs to bigger jobs like repiping or a new water heater — the full range a homeowner might need over the life of a house.",
      },
      { type: "h2", text: "What's Covered" },
      {
        type: "list",
        items: [
          "Everyday repairs — leaks, running toilets, dripping faucets",
          "Emergency situations — active leaks, burst pipes, sewage backups",
          "Drains and sewer lines — clogs, buildup, and line issues",
          "Water heaters — repair, installation, and tankless options",
          "Leaks and pipe issues — hidden leaks, slab leaks, repiping",
          "Fixtures — faucets, toilets, sinks, garbage disposals, showers, bathtubs",
          "Water quality — filtration and treatment for taste, odor, or hardness concerns",
        ],
      },
      { type: "h2", text: "Routine Repairs and Bigger Projects" },
      {
        type: "p",
        text: "Residential plumbing spans both ends of that range — a single worn-out faucet cartridge and a whole-house repiping job are both residential plumbing work, just at very different scales.",
      },
      { type: "h2", text: "Plumbing Through the Life of a Home" },
      {
        type: "p",
        text: "A newer home and an older home tend to need different things from residential plumbing. Newer construction on PEX supply lines and a concrete slab foundation is more likely to need fixture work and the occasional slab leak check. Older homes are more likely to still have original galvanized or early copper supply lines, aging clay or cast-iron drain lines, and fixtures nearing the end of their service life — which tends to mean more repiping and sewer line conversations over time.",
      },
      { type: "h2", text: "New Homeowner and Pre-Purchase Considerations" },
      {
        type: "p",
        text: "Buying an older home is a common reason to have the plumbing looked at before or shortly after move-in — a standard home inspection doesn't always go deep into pipe material or run a sewer camera inspection, so problems that weren't obvious at the walkthrough can show up in the first year of ownership. Getting ahead of that with an inspection of the home's actual plumbing condition can avoid surprises.",
      },
      { type: "h2", text: "Rental and Landlord Plumbing" },
      {
        type: "p",
        text: "Rental properties bring their own pattern of plumbing needs — higher fixture turnover from tenant changes, and repairs that a landlord typically wants handled quickly and correctly the first time. The same residential services apply; scheduling and communication are often just handled with a property manager or landlord directly rather than the occupant.",
      },
    ],
    faqs: [
      {
        q: "What residential plumbing services are offered?",
        a: "Everything from everyday repairs and emergency plumbing to drains, sewer lines, water heaters, leak detection, repiping, fixture repair, and water filtration.",
      },
      {
        q: "Does residential plumbing include bigger jobs like repiping, or just small repairs?",
        a: "Both. Residential plumbing covers the full range.",
      },
      {
        q: "Should I have the plumbing inspected in a home I just bought?",
        a: "It's worth considering, especially for an older home — a standard home inspection doesn't always catch pipe material or sewer line issues that show up later.",
      },
      {
        q: "Do you work with rental properties and landlords?",
        a: "Yes — rental and landlord-managed properties receive the same residential plumbing service, typically coordinated through the property manager or landlord.",
      },
      {
        q: "Does an older home need different plumbing service than a newer one?",
        a: "Often, yes — older homes are more likely to have aging supply and drain line materials, while newer homes tend to have more fixture and water-heater-sizing needs.",
      },
    ],
relatedServiceSlugs: [
  "plumbing-repair-tupelo-ms",
  "emergency-plumbing-tupelo-ms",
  "drain-cleaning-tupelo-ms",
  "gas-line-services-tupelo-ms",
  "leak-detection-tupelo-ms",
  "sump-pump-tupelo-ms",
  "repiping-tupelo-ms",
],
 ctaLabel: "Looking for Plumbing Service for Your Home?",
  },
  {
    slug: "commercial-plumbing-tupelo-ms",
    cluster: "Core Plumbing",
    navLabel: "Commercial Plumbing",
    title: "Commercial Plumbing in Tupelo, MS",
    metaDescription:
      "Plumbing services for businesses and commercial properties in Tupelo, MS — repairs, drains, water heaters, and more, with minimal disruption.",
    h1: "Commercial Plumbing in Tupelo, MS",
    intro:
      "Plumbing service built around minimizing disruption to your business.",
    body: [
      {
        type: "p",
        text: "Plumbing problems at a business come with a different set of concerns than at a home — downtime affects customers and operations, not just convenience. Commercial plumbing service covers the same range of work as residential, applied with that difference in mind.",
      },
      { type: "h2", text: "What's Covered" },
      {
        type: "list",
        items: [
          "General repairs — leaks, fixture issues, everyday problems",
          "Emergency situations affecting the business",
          "Drains and sewer lines — commercial kitchens and heavier drain demands",
          "Water heaters — commercial-scale needs",
          "New construction and remodeling — build-outs, renovations, tenant improvements",
          "Backflow prevention testing — often required by code for commercial properties with irrigation or fire suppression connections",
        ],
      },
      { type: "h2", text: "What's Different About Commercial Plumbing" },
      {
        type: "p",
        text: "The underlying plumbing work isn't fundamentally different from residential — a clogged drain or a failing water heater behaves the same way regardless of the building type. What changes is the surrounding context: higher usage volume, code requirements specific to commercial properties, and the operational impact of downtime. A restaurant's grease trap and heavy drain demand, for instance, is a different maintenance picture than a typical home kitchen.",
      },
      { type: "h2", text: "Working Around Business Hours" },
      {
        type: "p",
        text: "Scheduling around a business's operating hours to limit disruption is a normal part of commercial work — worth raising directly when describing the job. Before- or after-hours service can often be arranged for work that would otherwise interrupt customers or staff.",
      },
      { type: "h2", text: "Types of Commercial Properties Served" },
      {
        type: "list",
        items: [
          "Retail and office spaces",
          "Restaurants and food service, including grease trap and kitchen drain concerns",
          "Multi-unit and rental properties",
          "Light industrial and warehouse space",
        ],
      },
      { type: "h2", text: "Commercial Emergency Plumbing" },
      {
        type: "p",
        text: "A business emergency gets the same 24/7 response as a residential one, with added attention to protecting inventory, minimizing customer-facing disruption, and coordinating with staff or management on-site. See Emergency Plumbing for what counts as an emergency and what to do while help is on the way.",
      },
    ],
    faqs: [
      {
        q: "What commercial plumbing services are offered?",
        a: "Everything from general repairs and emergency service to drains, water heaters, new construction/remodeling plumbing, and backflow prevention testing.",
      },
      {
        q: "Can plumbing work be scheduled around business hours?",
        a: "Working around a business's operating hours to minimize disruption is a normal part of commercial scheduling, including before- or after-hours service where needed.",
      },
      {
        q: "Do you work with restaurants and commercial kitchens?",
        a: "Yes — commercial kitchens have their own drain and grease trap considerations, and that's a regular part of commercial service.",
      },
      {
        q: "Is backflow prevention testing required for my business?",
        a: "It depends on the property type and local code — properties with irrigation or fire suppression systems are the most common candidates. See Backflow Prevention for more detail.",
      },
      {
        q: "Is commercial plumbing handled differently from residential?",
        a: "The plumbing work itself is similar, but commercial properties often have higher usage volume, specific code requirements, and scheduling needs tied to business hours.",
      },
      {
        q: "Do you handle emergency plumbing for businesses?",
        a: "Yes — the same 24/7 emergency response applies to commercial properties as residential.",
      },
    ],
    relatedServiceSlugs: [
      "plumbing-repair-tupelo-ms",
      "emergency-plumbing-tupelo-ms",
      "drain-cleaning-tupelo-ms",
      "hydro-jetting-tupelo-ms",
      "water-heater-repair-tupelo-ms",
      "backflow-prevention-tupelo-ms",
      "new-construction-remodeling-plumbing-tupelo-ms",
    ],
    ctaLabel: "Need Plumbing Service for Your Business?",
  },
  {
    slug: "new-construction-remodeling-plumbing-tupelo-ms",
    cluster: "Core Plumbing",
    navLabel: "New Construction & Remodeling",
    title: "New Construction & Remodeling Plumbing",
    metaDescription:
      "Planning a remodel or new build in Tupelo, MS? Plumbing for kitchens, bathrooms, additions, and new construction, coordinated with your project.",
    h1: "New Construction & Remodeling Plumbing in Tupelo, MS",
    intro: "Plumbing planned around your build or renovation timeline.",
    body: [
      {
        type: "p",
        text: "Plumbing for a new build or a remodel is different from a standard repair — it's planned as part of a larger project, often coordinated with a contractor's timeline, and involves decisions that don't come up when fixing something that already exists.",
      },
      { type: "h2", text: "What's Involved" },
      {
        type: "list",
        items: [
          "New construction — plumbing rough-in for a new home or addition",
          "Kitchen and bathroom remodels — relocating or updating plumbing to match a new layout",
          "Additions — extending plumbing service to a new room or structure",
          "Fixture upgrades — installing new fixtures as part of a broader renovation",
        ],
      },
      { type: "h2", text: "Remodel Plumbing vs. Repiping an Existing Home" },
      {
        type: "p",
        text: "Repiping replaces aging pipe material in a home that isn't otherwise being renovated, while remodel plumbing is part of a broader construction project that's already relocating walls, fixtures, or layout.",
      },
    ],
    faqs: [
      {
        q: "What plumbing work is involved in a remodel?",
        a: "Relocating supply and drain lines, installing new fixtures, and coordinating rough-in work with the rest of the renovation.",
      },
      {
        q: "Can plumbing be coordinated directly with my contractor?",
        a: "Yes — working directly with a general contractor or builder's timeline is normal.",
      },
      {
        q: "Is this different from repiping my current home?",
        a: "Yes — repiping addresses aging pipe material in a home that isn't otherwise being renovated.",
      },
    ],
   relatedServiceSlugs: ["fixture-plumbing-tupelo-ms", "repiping-tupelo-ms", "gas-line-services-tupelo-ms"],
    ctaLabel: "Planning a Remodel or New Build?",
  },

  // ---------- DRAIN & SEWER ----------
  {
    slug: "drain-cleaning-tupelo-ms",
    cluster: "Drain & Sewer",
    navLabel: "Drain Cleaning",
    title: "Drain Cleaning in Tupelo, MS",
    metaDescription:
      "Clogged or slow drain in Tupelo, MS? Fast, thorough drain cleaning for sinks, tubs, showers, and toilets.",
    h1: "Drain Cleaning in Tupelo, MS",
    intro:
      "Clearing clogged and slow-draining sinks, tubs, showers, and toilets.",
    body: [
      {
        type: "p",
        text: "A clogged or slow-draining sink, tub, shower, or toilet is one of the most common plumbing calls — and usually one of the more straightforward to fix.",
      },
      { type: "h2", text: "Common Causes of a Clogged Drain" },
      {
        type: "list",
        items: [
          "Kitchen sinks — grease, food debris, and buildup over time; grease is a particular problem because it coats the inside of the pipe rather than washing straight through",
          "Bathroom sinks and tubs — hair and soap buildup, which tends to form a mat that catches more debris as it grows",
          "Toilets — foreign objects, excess paper, or in some cases a partial blockage further down the line rather than at the toilet itself",
          "Floor drains — debris and sediment buildup, often in utility rooms, garages, or basements where they're easy to forget about",
        ],
      },
      { type: "h2", text: "Signs a Drain Needs Attention" },
      {
        type: "list",
        items: [
          "Water draining slower than normal, even if it's not fully blocked yet",
          "Gurgling sounds from a drain when another fixture is used",
          "A recurring smell from a specific drain",
          "Water backing up briefly before draining",
        ],
      },
      { type: "h2", text: "What Drain Cleaning Involves" },
      {
        type: "p",
        text: "A plumber identifies where the blockage is and clears it using the appropriate method for that drain — typically a drain snake or auger for a specific, localized clog. The goal is removing the actual blockage, not just temporarily improving flow.",
      },
      { type: "h2", text: "When It's More Than a Simple Clog" },
      {
        type: "p",
        text: "If the same drain keeps clogging despite being cleared, the cause is often buildup along the pipe itself — grease coating, mineral scale, or root intrusion — rather than a single blockage. Hydro jetting may be more appropriate for recurring buildup because it can clean along more of the pipe rather than clearing only one blockage point. For buildup caused by something other than coating or scale — a structural issue, for instance — a different diagnosis may be needed, which is where a sewer camera inspection comes in.",
      },
      {
        type: "p",
        text: "One fixture draining slowly is usually a localized blockage in that drain's own line. If several fixtures are slow or backing up at the same time, that's more likely to point toward the main sewer line rather than any single drain — see Sewer Line Repair for that distinction.",
      },
      {
        type: "h2",
        text: "Drain Cleaning vs. a DIY Plunger or Store-Bought Cleaner",
      },
      {
        type: "p",
        text: "A plunger handles many everyday clogs on its own, and there's no need to call a plumber for every slow drain. Chemical drain cleaners are worth approaching carefully — they can be hard on older pipes with repeated use, and they don't address buildup further down the line. If a clog doesn't respond to a plunger, keeps coming back, or multiple drains are affected, that's when it's worth having looked at professionally.",
      },
    ],
    faqs: [
      {
        q: "What causes a clogged drain?",
        a: "Grease and food debris in kitchen drains, hair and soap in bathroom drains, and general buildup over time.",
      },
      {
        q: "Do I need a plumber, or can I clear it myself?",
        a: "Many everyday clogs respond to a plunger. It's worth calling a plumber if the clog doesn't clear, keeps coming back, or water is backing up elsewhere.",
      },
      {
        q: "What's the difference between drain cleaning and hydro jetting?",
        a: "Drain cleaning clears a specific blockage. Hydro jetting clears buildup along the full length of a pipe.",
      },
      {
        q: "Are chemical drain cleaners safe to use?",
        a: "They can clear minor clogs, but repeated use can be hard on older pipes, and they don't address buildup further down the line the way professional cleaning does.",
      },
      {
        q: "Why does my drain gurgle when I run another fixture?",
        a: "That's often a sign of a partial blockage or a venting issue affecting how air moves through the drain system — worth having checked if it happens regularly.",
      },
      {
        q: "How often should drains be professionally cleaned?",
        a: "There's no fixed schedule — it depends on usage and whether a specific drain has a history of slow draining or recurring clogs.",
      },
    ],
    relatedServiceSlugs: [
      "hydro-jetting-tupelo-ms",
      "sewer-camera-inspection-tupelo-ms",
      "sewer-line-repair-tupelo-ms",
    ],
    ctaLabel: "Dealing With a Clogged Drain?",
  },
  {
    slug: "hydro-jetting-tupelo-ms",
    cluster: "Drain & Sewer",
    navLabel: "Hydro Jetting",
    title: "Hydro Jetting in Tupelo, MS",
    metaDescription:
      "Hydro jetting clears stubborn clogs, grease buildup, and root intrusion that standard drain cleaning can't fully remove. Serving Tupelo, MS.",
    h1: "Hydro Jetting in Tupelo, MS",
    intro:
      "High-pressure water cleaning for buildup inside drain and sewer pipes that standard cleaning may not fully remove.",
    body: [
      {
        type: "p",
        text: "Hydro jetting uses specialized high-pressure water equipment to clean stubborn buildup from inside drain and sewer pipes, making it useful for recurring clogs, grease, scale, and other deposits that standard drain cleaning may not fully remove.",
      },
      { type: "h2", text: "How Hydro Jetting Works" },
      {
        type: "p",
        text: "A specialized nozzle feeds into the line on a pressurized hose, directing water at high pressure against the inside walls of the pipe as it moves through. This scours away buildup clinging to the pipe wall, rather than just pushing through the center of a blockage the way a drain snake does.",
      },
      { type: "h2", text: "Drain Snaking vs. Hydro Jetting" },
      {
        type: "p",
        text: "Drain snaking may be the right fit when one localized clog is blocking a single fixture, the obstruction needs to be physically broken up or retrieved, or the problem is otherwise straightforward.",
      },
      {
        type: "p",
        text: "Hydro jetting may be more appropriate when buildup keeps returning after snaking, grease has accumulated along a line, mineral scale is restricting flow, a longer section of pipe needs cleaning rather than a single point, or previous drain cleaning has only provided temporary relief.",
      },
      { type: "h2", text: "What Hydro Jetting Is Used For" },
      {
        type: "list",
        items: [
          "Recurring clogs that keep coming back after standard snaking",
          "Grease buildup, particularly in kitchen lines and commercial kitchen drains",
          "Mineral and scale buildup narrowing the inside of a pipe over time",
          "Root intrusion — jetting can cut through and clear roots that have grown into a line",
        ],
      },
      { type: "h2", text: "When Hydro Jetting Is Not the Right Solution" },
      {
        type: "p",
        text: "Jetting cleans a pipe's interior — it doesn't repair a damaged one. A structurally collapsed or severely cracked pipe, a line with a separated joint, or a pipe in unknown condition generally needs a camera inspection first, and may need repair rather than cleaning. Clearing roots from a line also doesn't fix whatever let the roots in — if root intrusion is a recurring problem at the same spot, that's usually a sign of a crack or joint issue worth having looked at directly. See Sewer Camera Inspection to find out what's actually going on inside the line, and Sewer Line Repair if a structural problem is confirmed.",
      },
      { type: "h2", text: "What Happens During Hydro Jetting" },
      {
        type: "list",
        items: [
          "The affected drain or sewer line is identified based on the symptoms described",
          "Access points are checked to confirm jetting equipment can reach the affected section",
          "If the line's condition is uncertain, a camera inspection may be recommended first",
          "The appropriate jetting equipment and nozzle are selected for that pipe and situation",
          "Controlled high-pressure water clears buildup from the interior of the pipe",
          "Flow is checked afterward to confirm the clog or buildup has actually cleared",
          "If a structural problem remains, camera inspection or sewer line repair is recommended",
        ],
      },
      { type: "h2", text: "Is Hydro Jetting Safe for Older Pipes?" },
      {
        type: "p",
        text: "Jetting is standard practice for pipe materials in good structural condition. A line that's already cracked, deteriorated, or of unknown condition may need a camera inspection first, since jetting a severely compromised pipe isn't the right approach — cleaning doesn't fix structural damage, and in a bad enough line it can make an existing problem worse.",
      },
      { type: "h2", text: "Commercial Drain Lines" },
      {
        type: "p",
        text: "Hydro jetting comes up often in commercial settings where drains see heavier use or recurring grease buildup — restaurant kitchen lines being the most common example. See Commercial Plumbing for the broader range of commercial drain and plumbing service.",
      },
    ],
    faqs: [
      {
        q: "What is hydro jetting used for?",
        a: "Clearing recurring clogs, grease buildup, mineral scale, and root intrusion that standard snaking hasn't fully resolved.",
      },
      {
        q: "Will hydro jetting damage my pipes?",
        a: "Jetting is safe for pipes in sound structural condition. Pipes that are already cracked, deteriorated, or of unknown condition are typically checked with a camera inspection first.",
      },
      {
        q: "How is hydro jetting different from a regular drain snake?",
        a: "A snake breaks up or retrieves a specific blockage by pushing through it. Jetting uses high-pressure water to scour buildup off the inside walls of the pipe along the accessible section, not just open a path through one spot.",
      },
      {
        q: "Do I need a camera inspection before hydro jetting?",
        a: "Not always, but it's common, especially when the pipe's condition isn't already known or the cause of a recurring clog hasn't been confirmed.",
      },
      {
        q: "Can hydro jetting remove grease buildup?",
        a: "Yes — grease buildup along the inside of a pipe is one of the most common reasons jetting is used, particularly in kitchen lines.",
      },
      {
        q: "Can hydro jetting remove tree roots from a pipe?",
        a: "Jetting can cut through and clear roots that have grown into a line, but it doesn't repair whatever let the roots in in the first place — a recurring root problem at the same spot is worth having inspected directly.",
      },
      {
        q: "Does hydro jetting fix a damaged sewer pipe?",
        a: "No — jetting cleans the inside of a pipe. A damaged, cracked, or collapsed pipe needs repair, not cleaning.",
      },
      {
        q: "How long does hydro jetting take?",
        a: "It depends on the length of line being cleaned and how much buildup is present — most jobs are completed in a single visit.",
      },
      {
        q: "How often should a line be hydro jetted?",
        a: "There's no fixed schedule — it depends on usage and whether a specific line has a history of recurring buildup.",
      },
    ],
    relatedServiceSlugs: [
      "drain-cleaning-tupelo-ms",
      "sewer-camera-inspection-tupelo-ms",
      "sewer-line-repair-tupelo-ms",
      "commercial-plumbing-tupelo-ms",
    ],
    ctaLabel: "Ready to Clear a Stubborn Drain?",
  },
  {
    slug: "sewer-line-repair-tupelo-ms",
    cluster: "Drain & Sewer",
    navLabel: "Sewer Line Repair",
    title: "Sewer Line Repair in Tupelo, MS",
    metaDescription:
      "Sewer backups, recurring clogs, or a damaged main line in Tupelo, MS? Sewer line repair and replacement, diagnosed correctly first.",
    h1: "Sewer Line Repair in Tupelo, MS",
    intro:
      "Repairing damaged or failing main sewer lines in Tupelo, from localized problems to partial or full replacement when the line's condition requires it.",
    body: [
      {
        type: "p",
        text: "When more than one drain backs up at once, or the same sewage backup keeps happening no matter how many times a single clog gets cleared, the problem is often the main sewer line itself.",
      },
      { type: "h2", text: "Signs of a Sewer Line Problem" },
      {
        type: "list",
        items: [
          "Multiple fixtures backing up or draining slowly at the same time",
          "Sewage odor in the yard or near the foundation",
          "An unusually green or soggy patch of lawn, often over the line's path",
          "Gurgling sounds from drains when other fixtures are used",
          "A toilet that bubbles or backs up when a washing machine drains",
        ],
      },
      { type: "h2", text: "What Causes Sewer Line Problems" },
      {
        type: "list",
        items: [
          "Tree root intrusion — roots are drawn to the moisture inside a sewer line and can work their way in through small cracks or joints",
          "Age and material — older clay or cast-iron lines are more prone to cracking, shifting, or corroding over time than modern materials",
          "Ground movement — soil that expands and contracts with wet and dry seasons can gradually shift or stress a buried line",
          "Grease and debris buildup — a heavier version of what causes drain clogs, but along the main line rather than a single fixture's drain",
        ],
      },
      { type: "h2", text: "Repair vs. Replacement" },
      {
        type: "p",
        text: "A localized issue — a root intrusion at one joint, or a single cracked section — can often be repaired directly without touching the rest of the line. More extensive damage, especially along an older line showing multiple problem areas, may call for full or partial replacement. Trenchless sewer repair is one method worth knowing about: it repairs or replaces a line without fully excavating the yard, where the situation allows.",
      },
      { type: "h2", text: "Getting an Accurate Diagnosis First" },

      {
        type: "p",
        text: "A sewer camera inspection is the most direct way to see exactly what's happening inside the line and determine the right level of repair — rather than guessing based on symptoms alone and potentially digging in the wrong spot. If sewage is actively backing up into the home or creating an immediate sanitation risk, that's an emergency — see Emergency Plumbing rather than waiting for a scheduled inspection.",
      },
      { type: "h2", text: "What to Expect From Sewer Line Repair" },
      {
        type: "p",
        text: "The process typically starts with a camera inspection to locate and assess the problem, followed by a decision on the right repair method based on what's actually found — a spot repair, a trenchless lining or bursting method, or a full dig-and-replace if the line's condition calls for it. The specific approach depends on where the problem is, how extensive it is, and what's accessible at that location.",
      },
    ],
    faqs: [
      {
        q: "How do I know if it's a sewer line problem and not just a clog?",
        a: "Multiple fixtures backing up at once, recurring backups, or signs like yard odors and soggy patches point toward the main line.",
      },
      {
        q: "What's the difference between sewer line repair and replacement?",
        a: "Repair addresses a localized issue; replacement is for more extensive damage along the line's length.",
      },
      {
        q: "What is trenchless sewer repair?",
        a: "A method of repairing or replacing a sewer line without fully excavating the yard, when the situation allows.",
      },
      {
        q: "Can hydro jetting fix a sewer line problem instead of repair?",
        a: "Sometimes — if the issue is buildup or roots rather than structural damage.",
      },
      {
        q: "What causes tree roots to get into a sewer line?",
        a: "Roots are drawn to the moisture inside the line and can work their way in through small existing cracks or joints, then grow and worsen the opening.",
      },
      {
        q: "Does my whole yard need to be dug up to fix a sewer line?",
        a: "Not always — trenchless methods can repair or replace a line in many situations without full excavation.",
      },

      {
        q: "How is a sewer line problem actually diagnosed?",
        a: "A sewer camera inspection allows the plumber to see the inside of the line directly and identify visible problems before deciding on the appropriate repair.",
      },
    ],
    relatedServiceSlugs: [
      "sewer-camera-inspection-tupelo-ms",
      "hydro-jetting-tupelo-ms",
      "drain-cleaning-tupelo-ms",
    ],
    ctaLabel: "Dealing With Recurring Backups or a Sewer Line Issue?",
  },
  {
    slug: "sewer-camera-inspection-tupelo-ms",
    cluster: "Drain & Sewer",
    navLabel: "Sewer Camera Inspection",
    title: "Sewer Camera Inspection in Tupelo, MS",
    metaDescription:
      "See what's actually happening inside your sewer line. Camera inspections diagnose recurring clogs, root intrusion, cracks, and pipe condition in Tupelo, MS.",
    h1: "Sewer Camera Inspection in Tupelo, MS",
    intro:
      "A direct visual look inside the sewer line before deciding on any repair.",
    body: [
      {
        type: "p",
        text: "A sewer line runs underground, out of sight, which makes it one of the hardest parts of a home's plumbing to diagnose by guesswork. A sewer camera inspection provides a direct visual view inside the accessible portion of the line, helping identify problems that cannot be confirmed reliably from symptoms alone.",
      },
      { type: "h2", text: "How a Sewer Camera Inspection Works" },
      {
        type: "p",
        text: "A waterproof camera, mounted on a flexible cable, is fed through an accessible cleanout or drain opening and guided through the line. The camera transmits a live video view as it travels, letting the plumber see the actual condition of the pipe's interior in real time rather than relying on symptoms alone.",
      },
      { type: "h2", text: "What a Camera Inspection Can Reveal" },
      {
        type: "list",
        items: [
          "Blockages and buildup along the pipe wall",
          "Tree root intrusion at joints or cracks",
          "Cracks and fractures in the pipe material",
          "Misaligned or separated joints",
          "Collapsed or partially collapsed sections",
          "General pipe material and condition, including signs of aging",
        ],
      },
      { type: "h2", text: "When a Camera Inspection Is Useful" },
      {
        type: "list",
        items: [
          "A drain keeps clogging in the same place despite being cleared",
          "Multiple fixtures are slow or backing up and the cause isn't obvious from the surface",
          "A wet spot, unusual growth, or odor in the yard suggests a line problem",
          "Confirming a line's condition before deciding between repair and replacement",
          "A 'before' look ahead of hydro jetting or drain cleaning on a line with an unknown history",
        ],
      },
      { type: "h2", text: "Limitations of a Camera Inspection" },
      {
        type: "p",
        text: "A camera can only travel through accessible, navigable sections of pipe — a severe blockage, a fully collapsed section, or an inaccessible access point can limit how much of the line is actually seen in a single pass. A camera inspection is a diagnostic tool, not a guarantee that every possible issue in a line has been found; it's the most direct way to confirm what's visible, not an exhaustive certification of the entire system's condition.",
      },
      { type: "h2", text: "Buying or Selling a Home With an Older Sewer Line" },
      {
        type: "p",
        text: "Standard home inspections generally focus on what's visible and accessible inside the home — underground sewer line condition typically isn't something a general inspection evaluates. A separate camera inspection gives a direct look at the line's actual condition before a sale closes, which can surface a problem that wouldn't otherwise show up until it became a bigger issue after move-in. The inspection provides information about the line's current condition — it doesn't guarantee how the line will perform in the future, especially for an older line nearing the end of its typical service life.",
      },
      { type: "h2", text: "Does It Damage the Pipe?" },
      {
        type: "p",
        text: "A sewer camera inspection is a diagnostic procedure rather than a repair method. The camera is designed to travel through the accessible sewer line to provide a visual view of its interior without affecting the pipe itself.",
      },
      { type: "h2", text: "After the Inspection" },
      {
        type: "p",
        text: "What happens next depends on what the camera shows. Buildup or a recurring clog with no structural issue may point toward hydro jetting. If the inspection identifies a crack, misalignment, root intrusion at a joint, or a collapsed section, the next step is typically a sewer line repair or replacement assessment based on what was actually found.",
      },
    ],
    faqs: [
      {
        q: "What does a sewer camera inspection find?",
        a: "Blockages, buildup, tree root intrusion, cracks, misaligned joints, and collapsed or partially collapsed sections of pipe.",
      },
      {
        q: "Do I need a camera inspection before hydro jetting?",
        a: "Not always, but it's common, especially when the cause of a recurring clog isn't already known or the pipe's condition is uncertain.",
      },
      {
        q: "Should I get a sewer camera inspection before buying a house?",
        a: "It's worth considering for any home with an older sewer line, since standard home inspections typically don't evaluate underground sewer line condition.",
      },
      {
        q: "Will the inspection damage my pipes?",
        a: "No — it's a diagnostic procedure. The camera is designed to travel through the line to provide a view of its interior without affecting the pipe.",
      },
      {
        q: "Can a camera inspection see the entire sewer line?",
        a: "It can see accessible, navigable sections of the line. A severe blockage or collapsed section can limit how much of the line is visible in a single pass.",
      },
      {
        q: "What happens after a camera inspection?",
        a: "It depends on what's found — buildup with no structural issue may point toward hydro jetting, while a crack, misalignment, or collapsed section typically points toward sewer line repair.",
      },
      {
        q: "Does a camera inspection guarantee there are no other problems in the line?",
        a: "No — it confirms what's visible in the accessible sections inspected, not an exhaustive certification of the entire line's condition.",
      },
    ],
    relatedServiceSlugs: [
      "hydro-jetting-tupelo-ms",
      "sewer-line-repair-tupelo-ms",
      "drain-cleaning-tupelo-ms",
    ],
    ctaLabel: "Want to See What's Really Going On?",
  },
  // ---------- WATER HEATERS ----------
  {
    slug: "water-heater-repair-tupelo-ms",
    cluster: "Water Heaters",
    navLabel: "Water Heater Repair",
    title: "Water Heater Repair in Tupelo, MS",
    metaDescription:
      "No hot water or a water heater acting up? Get it diagnosed and repaired in Tupelo, MS. Common causes, what to check first, and when to call.",
    h1: "Water Heater Repair in Tupelo, MS",
    intro:
      "Diagnosing and fixing no hot water, inconsistent temperature, and noisy units.",
    body: [
      {
        type: "p",
        text: "No hot water — or hot water that's inconsistent, running out fast, or making strange noises — is one of the most common reasons people call a plumber. Most water heater problems have a specific, identifiable cause, and many are repairable without replacing the whole unit.",
      },
      { type: "h2", text: "What to Check First" },
      {
        type: "list",
        items: [
          "For gas units: confirm the pilot light is lit and the gas supply is on",
          "For electric units: check that the breaker hasn't tripped",
          "For either type: check that the thermostat setting hasn't been changed",
        ],
      },
      {
        type: "p",
        text: "These are basic, safe checks only — gas valves, electrical components, and internal parts of the unit are best left to a plumber to open up or adjust.",
      },
      { type: "h2", text: "No Hot Water at All" },
      {
        type: "p",

        text: "On an electric unit, this is commonly a failed heating element — the component that actually heats the water can burn out over time, especially on an older tank. On a gas unit, a pilot light that's gone out or an ignition problem is the more typical cause. These problems can often be repaired without replacing the entire tank, depending on the condition of the unit.",
      },
      { type: "h2", text: "Inconsistent or Lukewarm Water" },
      {
        type: "p",
        text: "This is often a thermostat problem — either a faulty thermostat or one that's simply been set lower than expected. Sediment buildup in the bottom of the tank is another common cause, since it can interfere with how efficiently the unit heats and holds water.",
      },
      { type: "h2", text: "Water Heater Making Noise" },
      {
        type: "p",
        text: "Popping, rumbling, or cracking sounds are usually sediment buildup at the bottom of the tank — as water heats underneath a layer of sediment, it creates these sounds. This is common in units that haven't been flushed in a while, particularly in areas with harder water.",
      },
      { type: "h2", text: "Water Heater Leaking" },
      {
        type: "p",
        text: "Where the leak is coming from matters. A leak from a loose fitting, valve, or connection is often a straightforward repair. A leak from the tank body itself generally means the tank has corroded through, which typically means replacement rather than repair — see Water Heater Installation for what that process looks like.",
      },
      { type: "h2", text: "Should the Water Heater Be Repaired or Replaced?" },
      {
        type: "p",
        text: "A unit nearing the end of its typical service life with a significant failure — like a leaking tank — is often more cost-effective to replace than repair. Component-level issues on an otherwise sound unit, like a heating element or thermostat, are usually straightforward repairs. An in-person diagnosis is the most reliable way to know which applies to a specific unit.",
      },
      { type: "h2", text: "Gas vs. Electric Water Heater Repair" },
      {
        type: "p",
        text: "The two types fail in different ways and get diagnosed differently. Gas units involve the pilot light, thermocouple, gas valve, and venting; electric units involve heating elements, thermostats, and the electrical connection. Both are repaired by the same plumber, but the specific troubleshooting steps differ.",
      },
    ],
    faqs: [
      {
        q: "What is the most common problem with a water heater?",
        a: "For electric units, a failed heating element is common. For gas units, pilot light or ignition problems.",
      },
      {
        q: "Is it cheaper to repair a water heater or replace it?",
        a: "Depends on the unit's age and the specific issue.",
      },
      {
        q: "What is the first thing to check when there's no hot water?",
        a: "For gas units, the pilot light and gas supply. For electric units, the breaker.",
      },
      {
        q: "What is the average lifespan of a water heater?",
        a: "Typical storage tank water heaters last roughly 8-12 years.",
      },
      {
        q: "Should I flush my water heater?",
        a: "Periodic flushing helps remove sediment buildup, particularly in areas with harder water.",
      },
      {
        q: "Why is my water heater making popping or rumbling noises?",
        a: "Usually sediment buildup at the bottom of the tank, which is common in units that haven't been flushed in a while.",
      },
      {
        q: "My water heater is leaking — does that always mean I need a new one?",
        a: "Not always. A leak from a connection or valve is often repairable; a leak from the tank body itself usually means replacement.",
      },
      {
        q: "Does it matter if my water heater is gas or electric for repair?",
        a: "The failure points and troubleshooting steps differ between the two, but the same plumber handles both.",
      },
    ],
    relatedServiceSlugs: [
      "water-heater-installation-tupelo-ms",
      "tankless-water-heaters-tupelo-ms",
    ],
    ctaLabel: "No Hot Water? Get It Diagnosed Today",
  },
  {
    slug: "water-heater-installation-tupelo-ms",
    cluster: "Water Heaters",
    navLabel: "Water Heater Installation",
    title: "Water Heater Installation in Tupelo, MS",
    metaDescription:
      "New water heater or replacement in Tupelo, MS? Get help choosing the right type, size, and fuel source, then get it installed correctly.",
    h1: "Water Heater Installation in Tupelo, MS",
    intro:
      "New water heater installation and replacement, sized and specced correctly.",
    body: [
      {
        type: "p",
        text: "Whether an old unit has failed beyond repair or a new build needs a water heater from scratch, installation involves more than swapping one unit for another — the right type, fuel source, and sizing all affect how well the new water heater actually performs for the household it serves.",
      },
      { type: "h2", text: "When Replacement Makes More Sense Than Repair" },
      {
        type: "p",
        text: "A leaking tank, repeated failures, frequent repairs, or an aging unit can all be reasons to consider replacement. The right choice depends on the condition of the unit, what the repair would actually involve, and how much service life the unit likely has left — not simply its age on its own. See Water Heater Repair if the unit's current problem hasn't been diagnosed yet; a problem doesn't automatically mean replacement is the answer.",
      },
      { type: "h2", text: "Signs Your Water Heater May Need Replacement" },
      {
        type: "list",
        items: [
          "The tank itself is leaking, rather than a fitting or connection",
          "The unit has needed repeated repairs",
          "Hot water has become increasingly unreliable",
          "Visible corrosion or deterioration on the tank or connections",
          "The unit no longer keeps up with the household's hot water demand",
        ],
      },
      { type: "h2", text: "Choosing the Right Water Heater" },
      { type: "h2", text: "Tank vs. Tankless" },
      {
        type: "p",
        text: "A tank water heater stores and continuously heats a reserve of hot water; a tankless unit heats water on demand as it flows through, with no standby tank. Which one fits better depends on household hot water demand, available utilities, installation space, and budget. Tankless units typically cost more upfront and can provide continuous hot water within the system's rated flow and capacity. See Tankless Water Heaters for a deeper look at that option specifically.",
      },
      { type: "h2", text: "Gas vs. Electric" },
      {
        type: "p",
        text: "Selection is often largely determined by what utility connections are already available at the installation location, but it can also depend on electrical capacity, venting requirements for gas units, and the specific installation space. Switching fuel types — gas to electric or the reverse — isn't a simple one-for-one swap, since it can involve different connections, venting, or electrical requirements than the existing setup. The right fit for a given home is confirmed during the installation assessment rather than decided in the abstract.",
      },
      { type: "h2", text: "Sizing" },
      {
        type: "p",
        text: "Correct sizing depends on household size, typical hot water usage, and peak demand — multiple showers running at once, along with appliances like a dishwasher or washing machine, is a different sizing situation than a single-occupant household. For a tank system, recovery capacity (how quickly the tank reheats after use) factors in alongside overall tank size. Getting sizing right matters for both comfort and the practical cost of the unit.",
      },
      { type: "h2", text: "What Water Heater Installation Involves" },
      {
        type: "list",
        items: [
          "Assessing the existing setup or installation location",
          "Determining the appropriate water heater type and capacity for the household",
          "Checking available fuel and electrical connections",
          "Confirming installation requirements and compatibility with the space",
          "Removing the existing unit, when replacement is involved",
          "Installing and connecting the new water heater",
          "Checking connections and confirming the system is operating correctly",
        ],
      },
      { type: "h2", text: "Why Professional Installation Matters" },
      {
        type: "p",
        text: "Correct installation isn't just connecting a new unit — it involves confirming compatibility with the home's existing plumbing and electrical or gas setup, proper venting where applicable, correct sizing for the household, and safe operation once everything's connected. Getting any of these wrong can affect how well the unit performs or how safely it operates, which is why installation is handled as an assessed job rather than a standardized swap.",
      },
      { type: "h2", text: "Water Heater Replacement vs. New Installation" },
      {
        type: "p",
        text: "Replacement means swapping out an existing water heater that's failing, aging, or no longer the right fit for the household. New installation means putting in a water heater where one doesn't currently exist — most commonly as part of new construction or a larger remodeling project. See New Construction & Remodeling for how that's coordinated with a broader build or renovation timeline.",
      },
      { type: "h2", text: "Factors That Affect the Right Installation" },
      {
        type: "p",
        text: "Beyond the unit itself, the installation location, existing plumbing configuration, available space, and how the new unit needs to connect into the home's current setup all factor into what a given installation actually involves. This is part of why an in-person assessment, rather than a decision made over the phone alone, is the most reliable way to confirm what's needed.",
      },
    ],
    faqs: [
      {
        q: "When should I replace my water heater instead of repairing it?",
        a: "An older unit with a major failure, or one needing repeated repairs, is often more cost-effective to replace — but the right call depends on the unit's actual condition.",
      },
      {
        q: "What size water heater do I need?",
        a: "Sizing depends on household size, hot water usage patterns, and how much simultaneous demand the household places on the system.",
      },
      {
        q: "Should I choose gas or electric?",
        a: "Largely determined by what utility connections are already available, though electrical capacity and venting requirements can also factor in.",
      },
      {
        q: "What's the difference between a tank and tankless water heater?",
        a: "A tank stores and continuously heats a reserve of water; a tankless unit heats water on demand with no standby tank. See Tankless Water Heaters for more detail.",
      },
      {
        q: "Can an existing water heater be replaced with a different type?",
        a: "Often, yes — switching between tank and tankless, or gas and electric, is possible depending on existing utilities, available space, and installation requirements, which get confirmed during an assessment.",
      },
      {
        q: "Can a water heater be installed during a remodeling project?",
        a: "Yes — new water heater installation is a normal part of new construction and remodeling work. See New Construction & Remodeling.",
      },
      {
        q: "What should I consider before replacing my water heater?",
        a: "Unit type, fuel source, sizing, available space, and installation requirements are the main factors — along with whether the current unit's issue is actually something that needs replacement at all.",
      },
      {
        q: "How do I know if my water heater needs repair or replacement?",
        a: "A leaking tank or repeated failures tend to point toward replacement, while a single component issue on an otherwise sound unit is often a repair. See Water Heater Repair for how that diagnosis is made.",
      },
      {
        q: "How long does water heater installation take?",
        a: "It varies depending on the existing setup, the type of unit being installed, access to the installation location, and whether any modifications are needed — a straightforward replacement is typically quicker than a new installation requiring new connections.",
      },
    ],
    relatedServiceSlugs: [
      "water-heater-repair-tupelo-ms",
      "tankless-water-heaters-tupelo-ms",
      "new-construction-remodeling-plumbing-tupelo-ms",
    ],
    ctaLabel: "Ready for a New Water Heater?",
  },
  {
    slug: "tankless-water-heaters-tupelo-ms",
    cluster: "Water Heaters",
    navLabel: "Tankless Water Heaters",
    title: "Tankless Water Heaters in Tupelo, MS",
    metaDescription:
      "Considering tankless in Tupelo, MS? Advantages, tradeoffs, sizing, installation, maintenance, and repair for on-demand water heaters.",
    h1: "Tankless Water Heaters in Tupelo, MS",
    intro:
      "On-demand hot water — whether it's the right fit, installation, maintenance, and repair.",
    body: [
      {
        type: "p",
        text: "A tankless water heater heats water as it flows through the unit instead of storing and continuously heating a tank of water. That removes the standby tank altogether, but it also means performance depends on the system's rated capacity rather than how much water happens to be sitting in a tank.",
      },
      { type: "h2", text: "What Is a Tankless Water Heater?" },
      {
        type: "p",
        text: "Water enters the unit, passes over a heating element or heat exchanger, and comes out hot — all in the time it takes to flow through, with no tank storing water in advance. Because there's no reservoir, a tankless unit's performance depends on its rated flow and heating capacity relative to how much hot water is actually being asked of it at once, along with the temperature of the water coming in.",
      },
      { type: "h2", text: "Tankless vs. Traditional Tank Water Heaters" },
      {
        type: "p",
        text: "Tankless systems have some real advantages: on-demand heating with no large storage tank, a smaller, often wall-mounted footprint, reduced standby heat loss since there's no tank sitting full of hot water around the clock, and often a longer service life than a typical tank unit. The tradeoffs are a higher upfront equipment cost, flow and capacity limits that depend on the specific unit, more particular installation requirements, and system sizing that matters more than it does with a tank.",
      },
      {
        type: "p",
        text: "A traditional tank system stores and continuously heats a reserve of hot water. It generally costs less upfront, needs physical space for the tank, and draws from that stored reserve during periods of high demand rather than heating water in real time. Neither type is universally better — the right choice depends on the household and the installation itself.",
      },
      { type: "h2", text: "Is a Tankless Water Heater Right for Your Home?" },
      {
        type: "p",
        text: "Suitability depends on more than household size. Relevant factors include how much hot water demand happens simultaneously (multiple showers, a dishwasher, and a washing machine all running at once is a different situation than one fixture at a time), the flow rate and temperature rise a household actually needs, the incoming water temperature, available fuel source and electrical capacity, the installation location, and budget. A properly sized tankless system can provide continuous hot water while demand stays within its rated flow and heating capacity — but demand that exceeds that capacity will still be limited, the same way an undersized tank runs out.",
      },
      { type: "h2", text: "Tankless Water Heater Sizing" },
      {
        type: "p",
        text: "Sizing a tankless unit is a different calculation than choosing a tank's storage capacity. It comes down to the maximum simultaneous flow the household needs — how many fixtures might reasonably run at once — along with the temperature rise required, which depends on how cold the incoming water is relative to the desired output temperature. Available gas or electrical capacity at the installation location also factors in, since larger-capacity units require more fuel or power to operate. The right size for a specific home is confirmed against the manufacturer's rated output during an assessment, not estimated from a general rule.",
      },
      { type: "h2", text: "Tankless Water Heater Installation" },
      {
        type: "list",
        items: [
          "Assess the existing system and installation location",
          "Determine the appropriate tankless system and capacity for the household",
          "Confirm available fuel or electrical service",
          "Evaluate required connections and installation conditions",
          "Address venting requirements for applicable gas systems",
          "Connect water lines and system components",
          "Configure and test the system",
          "Confirm proper operation",
        ],
      },
      {
        type: "p",
        text: "See Water Heater Installation for the broader installation and replacement process that applies across water heater types.",
      },
      { type: "h2", text: "Tankless Water Heater Maintenance" },
      {
        type: "p",
        text: "Maintenance needs vary by unit and water conditions. Mineral and scale buildup inside the heat exchanger is the most common long-term concern, particularly with harder water, since it can affect efficiency and performance over time. Some systems have filters that need periodic attention. Manufacturer-specific maintenance recommendations are the most reliable guide for a given unit, rather than a single fixed interval that applies to every system.",
      },
      { type: "h2", text: "Repairing an Existing Tankless Water Heater" },
      {
        type: "p",
        text: "Tankless units have their own set of failure points, distinct from a tank system's troubleshooting — flow sensors, heat exchangers, ignition components on gas units, and error codes the unit itself can display. Common symptoms include inconsistent hot water, a unit that isn't heating at all, reduced flow, or an active error condition. Diagnosis depends on the specific unit and symptoms, so a plumber identifying the actual cause is more reliable than guessing from the symptom alone. See Water Heater Repair for general water heater troubleshooting that applies across unit types.",
      },
      {
        type: "h2",
        text: "When Tankless Repair May Make More Sense Than Replacement",
      },
      {
        type: "p",
        text: "Whether to repair or replace a tankless unit depends on its age and condition, what the specific failure is, whether replacement components are reasonably available, and whether the unit still meets the household's current hot water demand. A component-level issue on an otherwise sound unit is often repairable; a unit that's failed significantly or no longer meets household needs may be a better candidate for replacement.",
      },
      {
        type: "h2",
        text: "Can You Replace a Traditional Water Heater With Tankless?",
      },
      {
        type: "p",
        text: "Often, yes, but it's not always a simple one-for-one equipment swap. Switching from tank to tankless can involve evaluating available fuel source, electrical capacity, venting requirements for gas units, how water lines connect, the installation location, and whether the plumbing configuration needs any adjustment. See Water Heater Installation for how that evaluation works.",
      },
    ],
    faqs: [
      {
        q: "What is a tankless water heater?",
        a: "A water heater that heats water on demand as it flows through the unit, rather than storing and continuously heating a tank of water in advance.",
      },
      {
        q: "Are tankless water heaters worth it?",
        a: "It depends on the household — tankless systems offer space savings and reduced standby heat loss, but cost more upfront. The right fit depends on hot water demand, budget, and installation requirements.",
      },
      {
        q: "Can a tankless water heater run multiple showers at once?",
        a: "It depends on the unit's rated flow capacity, the incoming water temperature, and the required temperature rise — demand within the unit's capacity is fine, but exceeding it will limit performance the same way an undersized tank would.",
      },
      {
        q: "How long do tankless water heaters last?",
        a: "Tankless units can have a longer service life than many traditional tank systems, though actual lifespan depends on the unit, water conditions, and maintenance.",
      },
      {
        q: "Do tankless water heaters need maintenance?",
        a: "Maintenance needs can be important depending on the system and local water conditions, particularly around mineral and scale buildup in the heat exchanger.",
      },
      {
        q: "Do gas tankless water heaters need special venting?",
        a: "Gas tankless units can have specific venting requirements that depend on the equipment and installation — this gets confirmed as part of the installation assessment.",
      },
      {
        q: "Can a traditional water heater be replaced with tankless?",
        a: "Often, yes, but it requires evaluating available fuel source, electrical capacity, venting, and the installation location rather than assuming a direct swap.",
      },
      {
        q: "What size tankless water heater do I need?",
        a: "Sizing depends on simultaneous flow demand, incoming water temperature, and required temperature rise, confirmed against a specific unit's rated output during an assessment.",
      },
      {
        q: "Can a tankless water heater be repaired?",
        a: "Many tankless issues — including flow sensor, heat exchanger, and ignition-related problems — are repairable, depending on the specific unit and failure.",
      },
      {
        q: "Why isn't my tankless water heater producing enough hot water?",
        a: "Possible causes include demand exceeding the unit's rated capacity, scale buildup affecting the heat exchanger, or a sensor or component issue — a plumber can confirm the actual cause for a specific unit.",
      },
    ],
    relatedServiceSlugs: [
      "water-heater-installation-tupelo-ms",
      "water-heater-repair-tupelo-ms",
    ],
    ctaLabel: "Considering Tankless, or Need an Existing Unit Serviced?",
  },

  // ---------- LEAKS & PIPES ----------
  {
    slug: "leak-detection-tupelo-ms",
    cluster: "Leaks & Pipes",
    navLabel: "Leak Detection",
    title: "Leak Detection in Tupelo, MS",
    metaDescription:
      "Unexplained water bill, damp spots, or the sound of running water in Tupelo, MS? Leak detection finds the source before it causes more damage.",
    h1: "Leak Detection in Tupelo, MS",
    intro: "Finding hidden leaks before they cause more damage.",
    body: [
      {
        type: "p",
        text: "Not every leak announces itself with a puddle. Some show up as a water bill that's crept up for no clear reason, a damp spot with no obvious source, or the sound of water running when every fixture is off. Leak detection finds where the water is actually going before the damage gets worse.",
      },
      { type: "h2", text: "Signs You May Have a Hidden Leak" },
      {
        type: "list",
        items: [
          "An increase in water usage with no change in habits",
          "The sound of running water when nothing is turned on",
          "A damp or discolored spot on a wall, ceiling, or floor",
          "A consistently damp area in the yard with no clear cause",
          "Low water pressure that developed gradually",
        ],
      },
      { type: "h2", text: "What Leak Detection Does" },
      {
        type: "p",
        text: "Leak detection is about locating the source of a hidden or hard-to-trace leak, rather than repairing a leak that's already visible. A dripping faucet or a leaking fitting under a sink is usually a straightforward plumbing repair — leak detection is for the cases where something's clearly wrong, but it isn't obvious where the water is actually coming from.",
      },
      { type: "h2", text: "How Leak Detection Works" },
      {
        type: "list",
        items: [
          "Reviewing the symptoms and where water or its effects are showing up",
          "Checking accessible plumbing and fixtures first to rule out the obvious",
          "Narrowing down the suspected leak location based on what's been found so far",
          "Using appropriate detection methods for the situation to pinpoint the source",
          "Identifying the likely source and the area affected",
          "Recommending the appropriate repair based on what's actually found",
        ],
      },
      { type: "h2", text: "Where Hidden Leaks Can Occur" },
      {
        type: "list",
        items: [
          "Inside walls, behind fixtures or supply lines",
          "Beneath floors, including slab leaks under a concrete foundation",
          "In the underground water line between the street or meter and the house",
          "At concealed supply pipe connections not visible without investigation",
          "Around fixture connections that aren't actively dripping but are seeping slowly",
        ],
      },
      { type: "h2", text: "Could It Be a Slab Leak?" },
      {
        type: "p",
        text: "If the suspected leak is under the concrete slab or foundation — which can sometimes be associated with a warm spot on the floor, or the sound of running water near the foundation — that's a specific situation with its own considerations. Leak detection finds where a hidden leak is occurring; slab leak repair addresses a leak that's been located beneath or associated with the foundation. See Slab Leak Repair for that distinction in more detail.",
      },
      { type: "h2", text: "When Should You Consider Leak Detection?" },
      {
        type: "list",
        items: [
          "The source of dampness or moisture isn't obvious",
          "Water usage has increased without a clear reason",
          "Running water sounds continue with everything turned off",
          "A wall, floor, or ceiling keeps becoming damp despite no visible cause",
          "Water pressure has changed gradually with no obvious plumbing event behind it",
          "An underground or concealed leak is suspected but hasn't been confirmed",
        ],
      },
      { type: "h2", text: "What Happens After a Leak Is Located?" },
      {
        type: "p",
        text: "What happens next depends entirely on what's found. A leak at an accessible fitting or connection is often a straightforward repair. A leak under a slab points toward slab leak repair. A leak in an underground supply line may call for water line service, depending on where the leak is located and what the inspection finds. And if leak detection turns up more than one leak, or the pipe material itself looks like the underlying issue, that's a sign worth evaluating the home's piping more broadly — see Repiping for what that conversation looks like.",
      },
    ],
    faqs: [
      {
        q: "How do I know if I have a hidden leak?",
        a: "An increase in water usage with no change in habits, the sound of running water with everything off, or unexplained damp spots can be signs of a hidden leak, particularly when they occur without an obvious plumbing cause.",
      },
      {
        q: "What are the signs of a slab leak specifically?",
        a: "A warm spot on the floor, sounds of running water near the foundation, or water pooling near the slab's edge.",
      },
      {
        q: "How is a hidden leak found without tearing open walls?",
        a: "Depending on the location and type of leak, appropriate detection methods can help narrow down where the leak is occurring before opening walls, floors, or other areas for repair.",
      },
      {
        q: "Why did my water bill suddenly go up?",
        a: "An unexplained increase in water usage can be a sign of a hidden leak, especially when your normal water-use habits haven't changed.",
      },
      {
        q: "What's the difference between leak detection and slab leak repair?",
        a: "Leak detection finds where a hidden leak is occurring. Slab leak repair addresses a leak that's been located beneath or associated with the foundation.",
      },
      {
        q: "What happens if leak detection finds more than one leak?",
        a: "Multiple leaks, or a pipe material that looks like the underlying issue, can be a sign the home's piping needs a broader evaluation rather than another individual repair — see Repiping.",
      },
      {
        q: "Is leak detection the same as plumbing repair?",
        a: "No — leak detection is the diagnostic step that finds where a leak is coming from. The repair itself, whether it's a fitting, a slab leak, or a water line, is a separate next step based on what's found.",
      },
    ],
    relatedServiceSlugs: [
      "slab-leak-repair-tupelo-ms",
      "repiping-tupelo-ms",
      "water-line-services-tupelo-ms",
      "plumbing-repair-tupelo-ms",
    ],
    ctaLabel: "Suspect a Hidden Leak?",
  },
  {
    slug: "slab-leak-repair-tupelo-ms",
    cluster: "Leaks & Pipes",
    navLabel: "Slab Leak Repair",
    title: "Slab Leak Repair in Tupelo, MS",
    metaDescription:
      "Warm spot on the floor or water near your foundation in Tupelo, MS? Slab leak repair, diagnosis, and how it's different from a foundation issue.",
    h1: "Slab Leak Repair in Tupelo, MS",
    intro: "Repairing leaks beneath or associated with a concrete foundation.",
    body: [
      {
        type: "p",
        text: "A slab leak generally refers to a leak in plumbing located beneath or associated with a home's concrete slab foundation. Because the pipe is inaccessible without specialized detection, slab leaks tend to go unnoticed longer than other leaks — and they're often confused with foundation problems.",
      },
      { type: "h2", text: "Signs of a Slab Leak" },
      {
        type: "list",
        items: [
          "A warm or noticeably damp spot on an otherwise cool floor",
          "The sound of running water near the foundation with no fixture in use",
          "An unexplained increase in water usage",
          "Reduced water pressure that developed gradually",
          "Persistent moisture or water appearing near the slab edge",
        ],
      },
      {
        type: "p",
        text: "No single symptom on its own confirms a slab leak — these can be signs worth having looked at, particularly in combination or without another obvious explanation.",
      },
      { type: "h2", text: "What Causes Slab Leaks" },
      {
        type: "list",
        items: [
          "Pipe deterioration or corrosion over time, depending on the pipe material and condition",
          "Damaged connections or joints beneath the slab",
          "Ground shifting or movement placing stress on the piping",
          "Pressure-related stress on a section of line",
          "General age and material-related deterioration",
        ],
      },
      { type: "h2", text: "How a Slab Leak Is Diagnosed" },
      {
        type: "p",
        text: "Diagnosis typically starts the same way leak detection does more broadly — reviewing symptoms, checking accessible plumbing, and narrowing down the likely location before deciding on a repair approach. See Leak Detection for more on how that process works. Once a leak is confirmed to be under or associated with the slab, the next step is figuring out the right repair approach for that specific location and pipe condition.",
      },
      { type: "h2", text: "Slab Leak Repair Options" },
      {
        type: "p",
        text: "The right approach depends on the location and condition of the affected line. Depending on the situation, repair may involve accessing the affected area through the slab to repair or replace that section directly, or rerouting the affected water line above the slab instead, where the layout and situation allow for it. Neither approach is automatically the right call for every slab leak — the specific location, extent of damage, and plumbing layout determine which makes more sense.",
      },
      { type: "h2", text: "Does the Slab Always Need to Be Opened?" },
      {
        type: "p",
        text: "Not every slab leak requires the same repair approach. Depending on where the leak is located, the condition of the piping, and the layout of the plumbing system, repair may involve accessing the affected section directly or considering an alternate routing approach that avoids opening the slab at all. Which option applies is confirmed once the leak's location and the surrounding plumbing are actually assessed.",
      },
      {
        type: "h2",
        text: "Slab Leak vs. Foundation Problem — How to Tell Them Apart",
      },
      {
        type: "p",
        text: "A slab leak is a plumbing problem — a pipe under the slab has failed. A foundation problem is a structural issue with the slab or footing itself, which needs a foundation repair specialist instead. Water-related symptoms can point toward a plumbing leak, while cracking or structural movement without accompanying water symptoms may warrant evaluation by a foundation specialist. When the signs overlap, professional assessment is needed to determine the cause.",
      },
      { type: "h2", text: "Is a Slab Leak an Emergency?" },
      {
        type: "p",
        text: "Not always as urgent as a burst pipe, but it shouldn't be ignored — left unaddressed, it can lead to water damage, mold, and higher water bills over time. A slab leak that's actively causing significant water intrusion is worth treating with more urgency; see Emergency Plumbing if water is actively flooding or spreading.",
      },
      { type: "h2", text: "What Happens After a Slab Leak Is Located" },
      {
        type: "p",
        text: "Once the leak's location and the affected pipe's condition are confirmed, the repair options are evaluated against that specific situation — direct access and repair, or rerouting above the slab — and the appropriate approach is carried out. After the repair, the affected plumbing can be checked to verify that the leak has been addressed and the system is functioning as expected.",
      },
    ],
    faqs: [
      {
        q: "What is a slab leak?",
        a: "A leak in plumbing located beneath or associated with a home's concrete slab foundation.",
      },
      {
        q: "What are the signs of a slab leak?",
        a: "A warm or damp spot on the floor, the sound of running water near the foundation, an unexplained rise in water usage, or gradually reduced water pressure.",
      },
      {
        q: "How is a slab leak diagnosed?",
        a: "The process starts with reviewing symptoms and checking accessible plumbing, similar to leak detection generally, before narrowing down the leak's specific location beneath or near the slab.",
      },
      {
        q: "Does a slab leak always require breaking the concrete?",
        a: "Not always — depending on the leak's location and the plumbing layout, rerouting the affected line above the slab can sometimes avoid opening the slab at all.",
      },
      {
        q: "Can a slab leak be repaired without opening the slab?",
        a: "In some situations, yes, by rerouting the affected water line above the slab instead of accessing it directly — whether that's an option depends on the specific leak and layout.",
      },
      {
        q: "How serious is a slab leak?",
        a: "It's not always as urgent as a burst pipe, but it shouldn't be ignored — left unaddressed, it can lead to water damage, mold, and rising water bills over time.",
      },
      {
        q: "Is a slab leak an emergency?",
        a: "Not usually as urgent as a burst pipe, but it's worth prompt attention. If water is actively flooding or spreading, treat it as an emergency.",
      },
      {
        q: "How do I know if it's a slab leak or a foundation problem?",
        a: "Water-related symptoms point toward a plumbing leak; structural symptoms like cracking or movement with no water signs point toward a foundation issue instead.",
      },
      {
        q: "What happens after a slab leak is located?",
        a: "The repair options are evaluated based on the leak's specific location and the pipe's condition, the appropriate repair is carried out, and the surrounding plumbing is checked afterward to confirm the issue is resolved.",
      },
    ],
    relatedServiceSlugs: [
      "leak-detection-tupelo-ms",
      "water-line-services-tupelo-ms",
      "plumbing-repair-tupelo-ms",
    ],
    ctaLabel: "Suspect a Slab Leak?",
  },
  {
    slug: "repiping-tupelo-ms",
    cluster: "Leaks & Pipes",
    navLabel: "Repiping",
    title: "Repiping in Tupelo, MS",
    metaDescription:
      "Recurring leaks, low pressure, or discolored water in Tupelo, MS? Repiping evaluation, scope, and process — and how it differs from a single repair.",
    h1: "Repiping in Tupelo, MS",
    intro: "Replacing deteriorating supply piping throughout a home.",
    body: [
      {
        type: "p",
        text: "When a house has one leak, the fix is usually simple: repair that section of pipe. But when leaks keep showing up in different places, water pressure has been dropping, or the water itself looks discolored, the problem may not be limited to any single pipe — repeated issues can indicate that the existing piping is deteriorating or that broader replacement should be evaluated.",
      },
      { type: "h2", text: "Signs It May Be Time to Repipe" },
      {
        type: "list",
        items: [
          "Leaks appearing in different locations over a short span of time",
          "Water pressure that's gradually dropped throughout the whole house",
          "Discolored or rust-colored water, particularly after the water's been off",
          "Older galvanized steel, aging copper, or polybutylene piping, particularly when combined with recurring leaks or other performance problems",
        ],
      },
      { type: "h2", text: "Repiping vs. Repair" },
      {
        type: "p",
        text: "An isolated, single leak is usually a case for a standard repair — see Plumbing Repair. Repeated leaks showing up in different areas of the home over time are what starts to make repiping worth evaluating, since they can point toward the pipe material itself deteriorating rather than one unlucky fitting. Widespread deterioration across the system is where replacement tends to make more sense than continuing to chase individual repairs. A localized problem doesn't automatically mean the whole house needs repiping — that's exactly what an evaluation is for.",
      },
      { type: "h2", text: "Partial Repiping vs. Whole-House Repiping" },
      {
        type: "p",
        text: "Repiping doesn't always mean replacing every pipe in the house. The actual scope can depend on the condition of the existing piping, how extensive the deterioration is, which areas are affected, accessibility, and any piping that's already been replaced in past work. Some homes genuinely need a full whole-house repipe; others may only need specific sections addressed. What applies to a given home is determined during an evaluation, not assumed upfront.",
      },
      { type: "h2", text: "What a Repiping Evaluation Looks At" },
      {
        type: "list",
        items: [
          "The material of the existing piping",
          "The visible condition of accessible pipe sections",
          "History of repeated leaks and where they've occurred",
          "Water pressure patterns throughout the house",
          "Which fixtures or areas are affected",
          "How accessible the piping is for replacement work",
          "The overall extent of deterioration",
        ],
      },
      { type: "h2", text: "Pipe Materials That Commonly Need Replacing" },
      {
        type: "list",
        items: [
          "Galvanized steel — can corrode internally over time, narrowing the pipe and affecting pressure",
          "Polybutylene — can become brittle with age and condition, increasing the risk of failure",
          "Aging copper — can develop pinhole leaks in multiple spots as it deteriorates",
        ],
      },
      { type: "h2", text: "The Repiping Process" },
      {
        type: "list",
        items: [
          "Evaluate the existing piping's material, condition, and history",
          "Identify which sections of piping are affected and need replacement",
          "Determine the appropriate scope — partial or whole-house",
          "Plan access and routing for the new piping",
          "Replace the affected piping",
          "Test the system to confirm pressure and connections are working correctly",
        ],
      },
      { type: "h2", text: "What Homeowners Should Expect" },
      {
        type: "p",
        text: "Access to walls, ceilings, or floors may be necessary depending on how the existing piping is routed and what the project's scope ends up being. Water service is typically interrupted for portions of the work while connections are made. How much disruption a project involves — and what's needed to restore access points afterward — depends heavily on the home's layout and the actual scope of the work, which is why these details get confirmed during the evaluation rather than promised in advance.",
      },
      {
        type: "h2",
        text: "How Repiping Is Different From a Water Line Replacement",
      },
      {
        type: "p",
        text: "Repiping refers to the supply piping inside the home. The underground water line from the street or meter to the house is a separate matter — see Water Line Services for that distinction.",
      },
    ],
    faqs: [
      {
        q: "How do I know if I need repiping?",
        a: "Repeated leaks in different locations, gradually declining water pressure, or discolored water can be signs that broader piping replacement should be evaluated. An in-person evaluation helps determine whether repiping is actually appropriate.",
      },
      {
        q: "Is repiping better than repairing repeated leaks?",
        a: "It depends on the pattern — an isolated leak is usually a standard repair, while leaks recurring in different areas can point toward the pipe material itself needing replacement.",
      },
      {
        q: "Does repiping mean replacing every pipe in the house?",
        a: "Not necessarily — the scope depends on the condition and extent of deterioration, and can range from specific sections to a full whole-house repipe.",
      },
      {
        q: "Can only part of a house be repiped?",
        a: "In many cases, yes — partial repiping can be appropriate when deterioration is limited to specific areas rather than the whole system.",
      },
      {
        q: "What pipe materials typically need to be replaced?",
        a: "Galvanized steel and polybutylene are examples of piping that may warrant replacement depending on their condition; aging copper can also develop multiple leaks over time.",
      },
      {
        q: "Is repiping the same as replacing my water line?",
        a: "No — repiping is the supply piping inside the home. The underground water line between the street or meter and the house is a separate matter.",
      },
      {
        q: "What happens during a repiping project?",
        a: "The existing piping is evaluated, the appropriate scope is determined, the affected piping is replaced, and the system is tested afterward to confirm everything's working correctly.",
      },
      {
        q: "Will walls or ceilings need to be opened?",
        a: "Possibly, depending on how the existing piping is routed and the project's scope — this gets confirmed during the evaluation.",
      },
      {
        q: "How do I find out if repiping is actually needed?",
        a: "An in-person evaluation of the home's current piping — material, condition, leak history, and affected areas — is the right first step.",
      },
    ],
    relatedServiceSlugs: [
      "leak-detection-tupelo-ms",
      "water-line-services-tupelo-ms",
      "plumbing-repair-tupelo-ms",
    ],
    ctaLabel: "Noticing Repeated Leaks or Pressure Problems?",
  },
  {
    slug: "water-line-services-tupelo-ms",
    cluster: "Leaks & Pipes",
    navLabel: "Water Line Services",
    title: "Water Line Services in Tupelo, MS",
    metaDescription:
      "Whole-house pressure drop, a wet spot in the yard, or a rising water bill in Tupelo, MS? Water line repair and replacement, diagnosed correctly first.",
    h1: "Water Line Services in Tupelo, MS",
    intro:
      "Repair and replacement of the buried line from the street to your home.",
    body: [
      {
        type: "p",
        text: "The water line is the buried pipe that carries water from the street or meter to the house — separate from the plumbing inside the home. When it fails, the symptoms can look like an interior plumbing problem at first.",
      },
      { type: "h2", text: "Signs the Water Line May Be the Problem" },
      {
        type: "list",
        items: [
          "A drop in water pressure affecting the entire house",
          "A consistently wet or unusually green patch of yard along the line's path",
          "A water bill that's risen with no leak found inside the home",
          "The sound of running water near where the line enters the property",
        ],
      },
      { type: "h2", text: "What Can Cause an Underground Water Line Problem" },
      {
        type: "list",
        items: [
          "Pipe age and material — older pipe materials can deteriorate or corrode over time",
          "Ground shifting — soil movement can stress or shift a buried line",
          "Tree root intrusion — roots can work into a line through an existing crack or joint, where conditions allow",
          "Corrosion — depending on the pipe material and soil conditions",
        ],
      },
      { type: "h2", text: "Water Line Repair vs. Replacement" },
      {
        type: "p",
        text: "The right solution depends on where the failure is, the condition of the pipe, how extensive the damage is, and the pipe material. A single, localized failure can often be repaired directly at that section. More extensive damage, or a line showing problems in multiple places, may call for full or partial replacement. A failed water line doesn't automatically mean the entire line needs replacing — that's determined by what's actually found once the line is evaluated.",
      },
      { type: "h2", text: "How a Water Line Problem Is Diagnosed" },
      {
        type: "p",
        text: "Diagnosis generally starts with the symptoms, then checking accessible interior plumbing to help determine whether the issue is inside the home or in the buried line itself. From there, the affected section is located, the pipe's condition is evaluated, and the appropriate repair or replacement scope is determined based on what's found.",
      },
      {
        type: "h2",
        text: "Underground Water Line vs. Interior Leak vs. Slab Leak",
      },
      {
        type: "p",
        text: "A water line problem can affect water pressure throughout the home and may show up as unexplained moisture or other signs outdoors — a wet yard, running water sounds near where the line enters the property, or pressure loss throughout the whole house. An interior leak tends to be more localized, affecting one fixture or area rather than the entire home. A slab leak involves plumbing beneath or associated with the home's foundation and may produce different signs depending on where the leak occurs. Symptoms alone don't always identify the exact source — see Leak Detection if it's not clear which of these applies.",
      },
      { type: "h2", text: "Water Line Repair and Replacement Process" },
      {
        type: "list",
        items: [
          "Evaluate the symptoms and the water line itself",
          "Locate the affected section",
          "Determine the pipe's condition and the appropriate scope",
          "Choose a repair or replacement approach suited to the situation",
          "Access the affected line",
          "Complete the repair or replacement",
          "Test the system afterward to confirm pressure and connections",
        ],
      },
      { type: "h2", text: "Does the Yard Have to Be Dug Up?" },
      {
        type: "p",
        text: "Not always. Depending on the location and extent of the problem, some water line repairs can be done with trenchless methods, where the situation and access allow for it. Whether that's an option for a specific line is determined during the evaluation.",
      },
    ],
    faqs: [
      {
        q: "What is a residential water line?",
        a: "The buried pipe that carries water from the street or meter to the house, separate from the plumbing inside the home.",
      },
      {
        q: "How do I know if my water line is leaking?",
        a: "A whole-house pressure drop, a wet or unusually green patch of yard along the line's path, or a rising water bill with no interior leak found are the clearest signs.",
      },
      {
        q: "How do I tell whether the problem is the water line or indoor plumbing?",
        a: "Water line problems tend to affect the whole house and show up outdoors; interior leaks are usually more localized to one area. An evaluation, or leak detection, can confirm which applies.",
      },
      {
        q: "What causes underground water lines to fail?",
        a: "Pipe age and material, ground shifting, tree root intrusion, and corrosion are the most common contributing factors.",
      },
      {
        q: "Does a water line always need to be replaced?",
        a: "No — a localized failure can often be repaired directly. More extensive or widespread damage is what tends to call for replacement.",
      },
      {
        q: "Can a water line be repaired instead of replaced?",
        a: "Yes, when the damage is localized to one section rather than affecting the line more broadly.",
      },
      {
        q: "Does the yard have to be excavated?",
        a: "Not always — trenchless methods may apply depending on the location and extent of the problem.",
      },
      {
        q: "What is trenchless water line repair?",
        a: "A method of repairing or replacing a water line without fully excavating the yard, where the situation and access allow for it.",
      },
      {
        q: "How is an underground water line problem diagnosed?",
        a: "By reviewing the symptoms, checking accessible interior plumbing to help narrow down the source, then locating and evaluating the affected section of the line.",
      },
    ],
    relatedServiceSlugs: [
      "repiping-tupelo-ms",
      "slab-leak-repair-tupelo-ms",
      "leak-detection-tupelo-ms",
    ],
    ctaLabel: "Suspect a Water Line Problem?",
  },
  {
    slug: "water-pressure-tupelo-ms",
    cluster: "Leaks & Pipes",
    navLabel: "Water Pressure",
    title: "Low Water Pressure Repair in Tupelo, MS",
    metaDescription:
      "Low, dropping, or inconsistent water pressure in Tupelo, MS? Find the plumbing cause and get it fixed.",
    h1: "Low Water Pressure Repair in Tupelo, MS",
    intro: "Diagnosing and fixing weak or fluctuating water pressure.",
    body: [
      {
        type: "p",
        text: "Water pressure that's weak, has dropped gradually, or fluctuates unpredictably usually has a specific plumbing cause — and it's not always the same cause.",
      },
      { type: "h2", text: "Common Causes of Low Water Pressure" },
      {
        type: "list",
        items: [
          "A faulty or poorly set pressure regulator",
          "Sediment or mineral buildup in pipes or fixtures",
          "A hidden leak",
          "Aging pipe material narrowing the effective diameter",
          "A water line problem affecting the whole house",
        ],
      },
      { type: "h2", text: "Whole-House vs. Single-Fixture Pressure Problems" },
      {
        type: "p",
        text: "If only one fixture has weak pressure, the cause is usually localized. If the whole house is affected, the cause is more likely upstream.",
      },
    ],
    faqs: [
      {
        q: "What causes low water pressure?",
        a: "A faulty pressure regulator, sediment buildup, a hidden leak, aging pipe material, or a water line problem.",
      },
      {
        q: "Why did my water pressure suddenly drop?",
        a: "A sudden drop is more likely tied to a specific event — a leak starting, a regulator failing, or a water line issue.",
      },
      {
        q: "Is low water pressure a sign of a leak?",
        a: "It can be — a leak diverts water that would otherwise reach your fixtures.",
      },
      {
        q: "Can a pressure regulator fix low water pressure?",
        a: "If the regulator itself is the cause, adjusting or replacing it can resolve the issue.",
      },
    ],
    relatedServiceSlugs: [
      "leak-detection-tupelo-ms",
      "repiping-tupelo-ms",
      "water-line-services-tupelo-ms",
    ],
    ctaLabel: "Dealing With Low or Inconsistent Water Pressure?",
  },

  // ---------- FIXTURES ----------
  {
    slug: "fixture-plumbing-tupelo-ms",
    cluster: "Fixtures",
    navLabel: "Fixture Plumbing",
    title: "Fixture Plumbing in Tupelo, MS",
    metaDescription:
      "Faucet, toilet, sink, or garbage disposal problem in Tupelo, MS? Fixture repair, installation, and replacement for homes and businesses.",
    h1: "Fixture Plumbing in Tupelo, MS",
    intro: "Repair and installation for faucets, toilets, sinks, and more.",
    body: [
      {
        type: "p",
        text: "Faucets, toilets, sinks, garbage disposals, showers, and bathtubs each fail or wear out in their own specific ways. Fixture plumbing covers repairing, replacing, or installing any of them.",
      },
      { type: "h2", text: "Faucets" },
      {
        type: "p",
        text: "A dripping or leaking faucet can result from a worn washer, cartridge, O-ring, valve component, connection, or another internal issue, depending on the fixture. A faucet that's outdated or damaged beyond repair is a replacement instead.",
      },
      { type: "h2", text: "Toilets" },
      {
        type: "p",
        text: "Running toilets, weak flushes, and leaks at the base can have different causes, including problems with the flapper, fill valve, flush components, or the toilet's seal.",
      },
      { type: "h2", text: "Sinks" },
      {
        type: "p",
        text: "Sink issues range from a slow drain at the fixture to a sink that's cracked, outdated, or being replaced.",
      },
      { type: "h2", text: "Garbage Disposals" },
      {
        type: "p",
        text: "A disposal that's jammed, humming without spinning, or leaking can have several causes, including an obstruction, a motor or component problem, or a failed seal.",
      },
      { type: "h2", text: "Showers and Bathtubs" },
      {
        type: "p",
        text: "Leaking showerheads, faulty diverter valves, and worn tub/shower faucets are common repairs, along with fixture replacement as part of a remodel.",
      },
      { type: "h2", text: "Fixture Installation and Replacement" },
      {
        type: "p",
        text: "Fixture installation covers putting in a new faucet, toilet, sink, garbage disposal, or shower/tub fixture — whether replacing something old or adding a new one as part of a renovation. The replacement fixture needs to be compatible with the existing plumbing connections, configuration, and available space, which is confirmed as part of the installation.",
      },
      { type: "h2", text: "Repair or Replace?" },
      {
        type: "p",
        text: "A specific worn part on an otherwise sound fixture is usually a repair. Multiple issues, repeated failures, visible cracking or corrosion, a fixture that's no longer functioning properly, or simply wanting to update an older fixture as part of a renovation or design change all point toward replacement instead.",
      },
      { type: "h2", text: "A Note on Efficiency When Replacing" },
      {
        type: "p",
        text: "When replacing a fixture, WaterSense-labeled faucets, showerheads, and toilets are worth considering for their water-efficiency benefits while maintaining performance standards established by the EPA program.",
      },
    ],
    faqs: [
      {
        q: "Should a fixture be repaired or replaced?",
        a: "A specific worn part on an otherwise sound fixture is usually a repair; multiple issues, repeated failures, or visible damage points toward replacement.",
      },
      {
        q: "What plumbing fixtures can you repair or replace?",
        a: "Faucets, toilets, sinks, garbage disposals, and shower or tub fixtures.",
      },
      {
        q: "Should I repair or replace my faucet?",
        a: "A single worn part — a washer, cartridge, or O-ring — is usually repairable. A faucet that's outdated, damaged, or failed in multiple ways is better replaced.",
      },
      {
        q: "Can you install fixtures during a bathroom remodel?",
        a: "Yes — fixture installation is a normal part of a kitchen or bathroom remodel, coordinated with the rest of the renovation.",
      },
      {
        q: "Can you replace an existing toilet or sink?",
        a: "Yes — replacement fixtures are confirmed for compatibility with the existing plumbing connections and space before installation.",
      },
      {
        q: "What should I consider when choosing a replacement fixture?",
        a: "Compatibility with existing plumbing connections and space, along with water efficiency — WaterSense-labeled fixtures are worth considering for that.",
      },
      {
        q: "Can a plumbing fixture problem actually be a drain problem?",
        a: "Yes — a slow drain at a sink, tub, or shower can look like a fixture issue but actually be a clog. See Drain Cleaning if that's the case.",
      },
      {
        q: "Are new fixtures more water-efficient?",
        a: "Often, yes — WaterSense-labeled fixtures use less water while maintaining normal performance, worth factoring in when replacement is already on the table.",
      },
    ],
    relatedServiceSlugs: [
      "drain-cleaning-tupelo-ms",
      "new-construction-remodeling-plumbing-tupelo-ms",
      "plumbing-repair-tupelo-ms",
    ],
    ctaLabel: "Have a Fixture That Needs Repair or Replacement?",
  },
  // ---------- SPECIALIZED ----------
  {
    slug: "gas-line-services-tupelo-ms",
    cluster: "Specialized",
    navLabel: "Gas Line Services",
    title: "Gas Line Services in Tupelo, MS",
    metaDescription:
      "Gas line installation, repair, and appliance connections in Tupelo, MS — plus clear safety guidance if you suspect a gas leak.",
    h1: "Gas Line Services in Tupelo, MS",
    intro:
      "Gas line installation and repair — with clear safety guidance for suspected leaks.",
    body: [
      {
        type: "p",
        text: "Gas line work covers everything from installing a new line for a gas appliance to repairing an existing one — most of which is routine, planned work. A suspected gas leak is different, and it's important to be clear about that distinction upfront.",
      },
      { type: "h2", text: "If You Smell Gas Right Now" },
      {
        type: "list",
        items: [
          "Leave the property immediately — don't operate switches, appliances, or anything that could spark",
          "Call your gas utility's emergency line or 911 from outside the home",
          "Do not return until it's confirmed safe",
        ],
      },
      { type: "h2", text: "Gas Line Services" },
      {
        type: "list",
        items: [
          "New gas line installation for a range, dryer, water heater, or outdoor feature",
          "Gas line extensions for a new appliance or addition",
          "Gas line repair for a damaged, corroded, or improperly installed line",
          "Gas appliance connections",
        ],
      },
      { type: "h2", text: "Signs a Gas Line May Need Attention" },
      {
        type: "p",
        text: "Visible corrosion or damage to accessible piping, concerns about an appliance's connection, a suspicion of damaged piping after work elsewhere in the home, or needing to evaluate existing piping after a remodel or appliance relocation are all reasons to have a gas line looked at. If there's ever an actual smell of gas, treat that as the emergency above rather than something to evaluate casually — don't inspect or attempt to manipulate gas piping yourself.",
      },
      { type: "h2", text: "Gas Line Installation and Extension" },
      {
        type: "p",
        text: "Installation and extension work covers adding new gas piping — for a new appliance, an addition to the home, or an outdoor feature like a grill or fire pit — or extending existing piping to reach a new location. This is planned work, coordinated around what's being added and where it needs to connect.",
      },
      { type: "h2", text: "Gas Line Repair" },
      {
        type: "p",
        text: "Repair addresses an existing gas line that's damaged, corroded, or was improperly installed. Unlike installation, repair starts with evaluating what's actually wrong with the existing piping before determining the right fix.",
      },
      { type: "h2", text: "Gas Appliance Connections" },
      {
        type: "p",
        text: "Connecting a range, dryer, water heater, or other gas appliance to the existing gas line is routine work, whether it's a new appliance or replacing an existing one.",
      },
      { type: "h2", text: "How Gas Line Service Works" },
      {
        type: "list",
        items: [
          "Understand the appliance, project, or reported problem",
          "Evaluate accessible gas piping and connections",
          "Determine whether installation, extension, repair, or replacement is appropriate",
          "Complete the required gas line work",
          "Test the completed work as appropriate",
        ],
      },
      {
        type: "h2",
        text: "Gas Line Work During Remodeling or Appliance Changes",
      },
      {
        type: "p",
        text: "Adding a gas appliance, relocating one, or changing a kitchen or outdoor layout during a remodel often means the existing gas piping needs to be extended, rerouted, or evaluated for the new configuration. See New Construction & Remodeling for how gas line work coordinates with a broader renovation project.",
      },
      { type: "h2", text: "Gas Utility vs. Plumber" },
      {
        type: "p",
        text: "Gas utility responsibility typically includes the meter and utility-side service equipment, while a plumber may handle gas piping on the customer side of the meter. Exact responsibility can vary by utility and location.",
      },
    ],
    faqs: [
      {
        q: "What should I do if I smell gas?",
        a: "Leave the property immediately, avoid anything that could create a spark, and call your gas utility's emergency line or 911 from outside.",
      },
      {
        q: "Can a gas line be extended for a new appliance?",
        a: "Yes — extending an existing line to reach a new appliance or addition is a common, routine gas line service.",
      },
      {
        q: "What's the difference between gas line installation and repair?",
        a: "Installation adds new piping for an appliance or project. Repair addresses an existing line that's damaged, corroded, or was improperly installed.",
      },
      {
        q: "What gas line work does a plumber handle versus the gas utility?",
        a: "The utility typically handles the meter and utility-side equipment, while a plumber may handle gas piping on the customer side — exact responsibility can vary by utility and location.",
      },
      {
        q: "Can gas line work be done during a kitchen or outdoor remodel?",
        a: "Yes — relocating or extending gas piping for a new layout or appliance is a normal part of remodeling work.",
      },
      {
        q: "How do I know if my gas line needs repair?",
        a: "Visible corrosion or damage to accessible piping, concerns about an appliance connection, or changes to the gas piping after other work in the home may be reasons to have the system professionally evaluated. If you smell gas, leave the property and follow the emergency steps above rather than inspecting or manipulating the piping yourself.",
      },
      {
        q: "Can a gas appliance be connected to an existing line?",
        a: "Yes — connecting a new or replacement gas appliance to existing gas piping is routine work.",
      },
      {
        q: "Is it safe to try to find a gas leak myself?",
        a: "No — if you smell gas, leave the property and call your gas utility's emergency line or 911 rather than trying to locate or address it yourself.",
      },
    ],
    relatedServiceSlugs: [
      "new-construction-remodeling-plumbing-tupelo-ms",
      "plumbing-repair-tupelo-ms",
      "emergency-plumbing-tupelo-ms",
    ],
    ctaLabel: "Need Gas Line Installation or Repair?",
  },
  {
    slug: "backflow-prevention-tupelo-ms",
    cluster: "Specialized",
    navLabel: "Backflow Prevention",
    title: "Backflow Prevention in Tupelo, MS",
    metaDescription:
      "Backflow preventer testing and repair in Tupelo, MS — for compliance requirements or a malfunctioning device.",
    h1: "Backflow Prevention in Tupelo, MS",
    intro: "Backflow preventer testing and repair for homes and businesses.",
    body: [
      {
        type: "p",
        text: "A backflow preventer stops water from flowing backward into the clean water supply — a real risk in situations like irrigation systems, commercial fire suppression lines, or any connection where contaminated water could otherwise be drawn back into the system.",
      },
      { type: "h2", text: "Backflow Prevention vs. Backflow Testing" },
      {
        type: "p",
        text: "Backflow prevention is the protection provided by an appropriate device or assembly installed at the connection. Backflow testing evaluates whether an already-installed device is functioning correctly. Testing doesn't replace the need for an appropriately selected and properly maintained backflow preventer in the first place.",
      },
      { type: "h2", text: "Who May Need Backflow Testing" },
      {
        type: "list",
        items: [
          "Properties with irrigation systems connected to the water supply",
          "Commercial properties with fire suppression systems",
          "Businesses required by local code to have annual testing on file",
        ],
      },
      { type: "h2", text: "Common Backflow Preventer Types" },
      {
        type: "p",
        text: "Different situations call for different device types — which one applies depends on the specific connection, its hazard classification, and applicable local and water-system requirements, not a one-size-fits-all answer.",
      },
      {
        type: "list",
        items: [
          "RPZ (Reduced Pressure Zone assembly) — used where the applicable cross-connection requirements call for protection against a higher degree of contamination hazard",
          "DCVA (Double Check Valve Assembly) — used for certain cross-connections where the applicable requirements call for this type of backflow protection",
          "PVB (Pressure Vacuum Breaker) — commonly associated with certain irrigation applications, depending on the system configuration and applicable requirements",
        ],
      },
      { type: "h2", text: "What Backflow Testing Involves" },
      {
        type: "p",
        text: "A qualified tester evaluates the backflow prevention assembly to determine whether it's functioning as intended. The process can include identifying the device, checking its condition, performing the applicable test, and documenting the results.",
      },
      { type: "h2", text: "Signs a Backflow Preventer May Have Failed" },
      {
        type: "list",
        items: [
          "Water leaking from the device itself",
          "Discolored or unusual-tasting water",
          "Failing a required annual test",
        ],
      },
      { type: "h2", text: "Testing vs. Repair" },
      {
        type: "p",
        text: "Testing evaluates whether the device is functioning correctly and meeting the applicable testing requirements — often done specifically to satisfy an annual compliance requirement. Repair may be needed when testing reveals a problem.",
      },
      { type: "h2", text: "When Repair or Replacement May Be Needed" },
      {
        type: "p",
        text: "A failed test, a leaking device, damaged components, corrosion or deterioration, or a device that's no longer functioning as required are all reasons repair may be needed. Replacement becomes the better option when repair isn't appropriate for the device's condition — not every failed test means a device needs to be replaced.",
      },
      {
        type: "citation",
        text: "For background on why cross-connection control matters for drinking water safety, see the",
        url: "https://www.epa.gov/system/files/documents/2021-12/ds-toolbox-fact-sheets_ccc.pdf",
        source: "EPA's cross-connection control fact sheet",
      },
    ],
    faqs: [
      {
        q: "What is backflow, and why does it matter?",
        a: "Backflow is water flowing backward into the clean water supply, which can draw in contaminants.",
      },
      {
        q: "What's the difference between backflow testing and repair?",
        a: "Testing evaluates whether an already-installed device is functioning correctly. Repair addresses a problem the test reveals.",
      },
      {
        q: "Who may need backflow testing?",
        a: "Properties with irrigation systems, commercial fire suppression systems, and businesses required by local code to have testing on file.",
      },
      {
        q: "What's the difference between the device types?",
        a: "An RPZ is used where requirements call for protection against a higher contamination hazard; a DCVA is used for certain lower-hazard cross-connections; a PVB is commonly associated with certain irrigation applications. Which applies depends on the specific connection and applicable requirements.",
      },
      {
        q: "What happens if a backflow preventer fails?",
        a: "A device that fails the applicable test may not be providing the required backflow protection and may need repair or replacement, depending on the cause and condition.",
      },
      {
        q: "Can a backflow preventer that fails testing be repaired?",
        a: "Often, yes, depending on what's causing the failure and the device's overall condition — replacement is the better option when repair isn't appropriate.",
      },
      {
        q: "How often does a backflow preventer need to be tested?",
        a: "Testing frequency depends on the property, device, water utility, and applicable local requirements — some properties may be subject to annual testing requirements.",
      },
      {
        q: "Does every home need a backflow preventer?",
        a: "Requirements depend on the property, its connections, the hazards involved, and applicable local requirements — not every home needs one.",
      },
      {
        q: "Is backflow testing required by law?",
        a: "Requirements vary by property type, water utility, and local code — ask when you call and it'll be confirmed for your specific situation.",
      },
    ],
    relatedServiceSlugs: [
      "commercial-plumbing-tupelo-ms",
      "water-filtration-tupelo-ms",
    ],
    ctaLabel: "Need Backflow Testing or Repair?",
  },
  {
    slug: "water-filtration-tupelo-ms",
    cluster: "Specialized",
    navLabel: "Water Filtration",
    title: "Water Filtration in Tupelo, MS",
    metaDescription:
      "Water tastes or smells off, or feels hard in Tupelo, MS? Whole-house filtration and treatment system installation, repair, and maintenance.",
    h1: "Water Filtration in Tupelo, MS",
    intro: "Water treatment and filtration installation and repair.",
    body: [
      {
        type: "p",
        text: "Water quality problems show up in different ways — an off taste or smell, water that feels hard, sediment, or mineral buildup on fixtures over time. Filtration and treatment systems address these issues at the source, but the right system depends on what's actually causing the problem.",
      },
      { type: "h2", text: "Common Water Quality Issues" },
      {
        type: "list",
        items: [
          "Taste or odor — often addressed with a carbon-based filtration system",
          "Hard water — typically addressed with a water softener",
          "Sediment — can come from well water, disturbed plumbing, aging infrastructure, or other conditions depending on the water source and plumbing system",
          "Well water specifically — can present different treatment considerations than municipal water, including sediment, minerals, and other water-quality concerns",
        ],
      },
      { type: "h2", text: "What Water Filtration Can Address" },
      {
        type: "p",
        text: "The right treatment depends on what's actually affecting the water. Carbon filtration may help with certain taste and odor issues, while sediment filtration targets suspended particles. Hardness is generally addressed with a water softener rather than a conventional filter. Where a specific contaminant is suspected, water testing can help determine what treatment is appropriate — not every water-quality problem should be treated with the same system.",
      },
      { type: "h2", text: "Water Testing and Treatment Selection" },
      {
        type: "p",
        text: "Choosing a filtration or treatment system starts with understanding the water problem. Taste, odor, sediment, hardness, and other water-quality concerns can have different causes. Where the cause isn't clear, appropriate water testing can help identify what needs to be treated and prevent choosing a system that doesn't address the actual problem.",
      },
      { type: "h2", text: "Water Softener vs. Water Filter" },
      {
        type: "p",
        text: "A water softener addresses hardness. A water filter addresses taste, odor, sediment, or specific contaminants. Some households need both.",
      },
      { type: "h2", text: "Whole-House vs. Point-of-Use Filtration" },
      {
        type: "p",
        text: "A whole-house system treats all water entering the home. A point-of-use filter addresses one specific fixture.",
      },
      { type: "h2", text: "Water Filtration Installation" },
      {
        type: "p",
        text: "Installation depends on the type of treatment being installed, where the system needs to go, the available plumbing connections, whether it's a whole-house or point-of-use setup, and what access the system needs for ongoing maintenance.",
      },
      { type: "h2", text: "Water Filtration Repair and Maintenance" },
      {
        type: "p",
        text: "Common issues include reduced water flow, leaks around the system, a clogged or loaded filter, and changes in system performance over time. Filter and media replacement is a normal part of upkeep — manufacturer requirements for a specific system are the most reliable guide for how often that's needed.",
      },
      { type: "h2", text: "Well Water Considerations" },
      {
        type: "p",
        text: "Well water can present different treatment considerations than municipal water, including sediment, minerals, and other water-quality concerns. The appropriate treatment depends on the characteristics of the specific water supply, and filtration isn't automatically a guarantee that an otherwise unsafe well water supply becomes safe to drink.",
      },
    ],
    faqs: [
      {
        q: "Why does my water taste or smell bad?",
        a: "Often addressed with carbon-based filtration, though the specific cause can vary.",
      },
      {
        q: "What's the difference between a water softener and a water filter?",
        a: "A softener addresses hardness; a filter addresses taste, odor, sediment, or contaminants.",
      },
      {
        q: "Do I need whole-house filtration or just a filter at the tap?",
        a: "Depends on whether the issue affects the whole home or is isolated to one tap.",
      },
      {
        q: "Is water treatment different for well water vs. city water?",
        a: "Often, yes — well water can have different mineral, sediment, or bacterial considerations than municipal water.",
      },
      {
        q: "What does a whole-house water filter do?",
        a: "It treats water entering the home so the selected treatment applies to multiple fixtures rather than only one tap. What it removes or reduces depends on the specific filtration technology.",
      },
      {
        q: "Can a water filter remove hard water?",
        a: "A conventional water filter isn't the same as a water softener. Hardness is generally addressed with a water-softening system designed for that purpose.",
      },
      {
        q: "How do I know what type of water treatment I need?",
        a: "The appropriate system depends on the water-quality issue and, where necessary, testing or evaluation of the water source.",
      },
      {
        q: "How often do water filters need to be replaced?",
        a: "Replacement frequency varies by filter type, water quality, system design, and usage — the manufacturer's requirements for a specific system are the most reliable guide.",
      },
    ],
    relatedServiceSlugs: ["repiping-tupelo-ms", "plumbing-repair-tupelo-ms"],
    ctaLabel: "Dealing With Water Quality Issues?",
  },
  {
    slug: "sump-pump-tupelo-ms",
    cluster: "Specialized",
    navLabel: "Sump Pump",
    title: "Sump Pump Installation & Repair",
    metaDescription:
      "Basement or crawl space water problems in Tupelo, MS? Sump pump installation, repair, and battery backup options.",
    h1: "Sump Pump Installation & Repair in Tupelo, MS",
    intro:
      "Keeping basements and crawl spaces dry, including battery backup options.",
    body: [
      {
        type: "p",
        text: "A sump pump moves water away from a basement or crawl space before it accumulates into standing water or damage.",
      },
      { type: "h2", text: "When You May Need a Sump Pump" },
      {
        type: "p",
        text: "Recurring water in a basement or crawl space, water accumulating in an existing sump pit, a high water table, previous water intrusion, or drainage conditions that direct groundwater toward the foundation are all reasons a sump pump may be worth considering. Not every home with one of these conditions automatically needs a pump — whether one makes sense depends on the specific property and situation.",
      },
      { type: "h2", text: "Sump Pump Installation" },
      {
        type: "p",
        text: "Installation involves considering whether a suitable sump pit already exists, the right pump capacity for the application, how the discharge line will be routed, available power at the location, whether a battery backup is needed, and how the system will be accessed for future maintenance. These factors are confirmed as part of the installation rather than assumed in advance.",
      },
      { type: "h2", text: "Why a Sump Pump Stops Working" },
      {
        type: "list",
        items: [
          "Power loss — a sump pump can't run without electricity",
          "A stuck or failed float switch",
          "A worn-out motor",
          "A clogged or frozen discharge line",
        ],
      },
      { type: "h2", text: "Sump Pump Repair" },
      {
        type: "p",
        text: "Troubleshooting a sump pump that's stopped working or isn't performing as expected can involve checking the power supply, the float switch, the pump motor, the discharge line, and the check valve or other components where applicable. The goal is distinguishing a repairable component issue from a pump that's reached the end of its usable life.",
      },
      { type: "h2", text: "When Replacement May Make More Sense" },
      {
        type: "p",
        text: "A sump pump may need replacement when the motor or pump assembly has failed, the unit has become repeatedly unreliable, or the existing pump is no longer appropriate for the application's needs. A single failure doesn't automatically mean the entire system needs replacement — that depends on what's actually found during repair.",
      },
      { type: "h2", text: "Battery Backup Sump Pumps" },
      {
        type: "p",
        text: "A primary sump pump handles normal pumping, typically running on household power. A battery backup provides pumping capability when the primary pump can't operate because of a power outage or certain primary-pump failures, depending on the system. Storms can increase the need for sump pump operation while power outages can prevent a primary electric pump from running, which is why battery backup can be valuable — though backup runtime varies by system and isn't unlimited.",
      },
      { type: "h2", text: "What Happens During Sump Pump Service" },
      {
        type: "p",
        text: "Service starts with understanding the symptom — a pump that's stopped running, isn't keeping up, or a system that needs to be installed from scratch. From there, the relevant components are checked, the cause is identified, and the appropriate repair, part replacement, or new installation is carried out.",
      },
      {
        type: "p",
        text: "Emergency plumbing service, including sump pump failures during a storm, is available 24/7.",
      },
    ],
    faqs: [
      {
        q: "What does a sump pump do?",
        a: "It moves water away from a basement or crawl space before it accumulates into standing water or damage.",
      },
      {
        q: "Why did my sump pump stop working?",
        a: "Common causes include power loss, a stuck float switch, a worn motor, or a clogged discharge line.",
      },
      {
        q: "When does a home need a sump pump?",
        a: "Recurring basement or crawl space water, a high water table, previous water intrusion, or drainage that directs groundwater toward the foundation are the clearest indicators — whether one's actually needed depends on the specific property.",
      },
      {
        q: "What is a battery backup sump pump, and do I need one?",
        a: "It keeps a sump pump running during a power outage, when the primary pump otherwise couldn't operate. Whether one makes sense depends on how reliant the home is on sump pump operation during storms.",
      },
      {
        q: "Should I repair or replace my sump pump?",
        a: "A component-level issue — the float switch, motor, or discharge line — is often repairable. A pump that's failed repeatedly or is no longer right for the application may be a better candidate for replacement.",
      },
      {
        q: "How urgent is sump pump repair during a storm?",
        a: "A failed pump during active water intrusion is a genuinely urgent situation.",
      },
      {
        q: "Can a sump pump s against all basement flooding?",
        a: "A sump pump can help manage groundwater entering a sump pit, but it isn't designed to prevent every possible source of basement or crawl space water intrusion.",
      },
    ],
    relatedServiceSlugs: [
      "emergency-plumbing-tupelo-ms",
      "plumbing-repair-tupelo-ms",
    ],
    ctaLabel: "Dealing With a Failed Sump Pump or Basement Water?",
  },
];
