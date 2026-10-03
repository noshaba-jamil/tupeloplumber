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
      "fixture-plumbing-tupelo-ms",
      "leak-detection-tupelo-ms",
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
    intro: "Available around the clock for plumbing problems that are actively causing damage right now.",
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
      "water-line-services-tupelo-ms",
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
      "water-heater-repair-tupelo-ms",
      "leak-detection-tupelo-ms",
      "fixture-plumbing-tupelo-ms",
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
    intro: "Plumbing service built around minimizing disruption to your business.",
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
    relatedServiceSlugs: ["fixture-plumbing-tupelo-ms", "repiping-tupelo-ms"],
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
    intro: "Clearing clogged and slow-draining sinks, tubs, showers, and toilets.",
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
      { type: "h2", text: "Drain Cleaning vs. a DIY Plunger or Store-Bought Cleaner" },
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
    relatedServiceSlugs: ["hydro-jetting-tupelo-ms", "sewer-camera-inspection-tupelo-ms", "sewer-line-repair-tupelo-ms"],
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
    relatedServiceSlugs: ["drain-cleaning-tupelo-ms", "sewer-camera-inspection-tupelo-ms", "sewer-line-repair-tupelo-ms", "commercial-plumbing-tupelo-ms"],
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
    intro: "Repairing damaged or failing main sewer lines in Tupelo, from localized problems to partial or full replacement when the line's condition requires it.",
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
    relatedServiceSlugs: ["sewer-camera-inspection-tupelo-ms", "hydro-jetting-tupelo-ms", "drain-cleaning-tupelo-ms"],
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
    intro: "A direct visual look inside the sewer line before deciding on any repair.",
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
    relatedServiceSlugs: ["hydro-jetting-tupelo-ms", "sewer-line-repair-tupelo-ms", "drain-cleaning-tupelo-ms"],
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
    intro: "Diagnosing and fixing no hot water, inconsistent temperature, and noisy units.",
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
    relatedServiceSlugs: ["water-heater-installation-tupelo-ms", "tankless-water-heaters-tupelo-ms"],
    ctaLabel: "No Hot Water? Get It Diagnosed Today",
  },
  {
    slug: "water-heater-installation-tupelo-ms",
    cluster: "Water Heaters",
    navLabel: "Water Heater Installation",
    title: "Water Heater Installation in Tupelo, MS",
    metaDescription:
      "Replacing an old water heater or installing a new one in Tupelo, MS? Get help choosing the right size and type, then get it installed correctly.",
    h1: "Water Heater Installation in Tupelo, MS",
    intro: "New water heater installation and replacement, sized and specced correctly.",
    body: [
      {
        type: "p",
        text: "Whether an old unit has failed beyond repair or a new build needs a water heater from scratch, installation involves more than swapping one unit for another — sizing, fuel type, and unit type all affect how well the new water heater performs.",
      },
      { type: "h2", text: "When Replacement Makes More Sense Than Repair" },
      {
        type: "p",
        text: "A water heater nearing the end of its typical service life, or one with a significant failure like a leaking tank, is usually more cost-effective to replace than to keep repairing.",
      },
      { type: "h2", text: "Choosing the Right Water Heater" },
      {
        type: "list",
        items: [
          "Tank vs. tankless — a tank stores and heats water continuously; tankless heats on demand",
          "Gas vs. electric — largely determined by available utilities",
          "Sizing — correct sizing depends on household size and usage patterns",
        ],
      },
    ],
    faqs: [
      {
        q: "When should I replace my water heater instead of repairing it?",
        a: "An older unit with a major failure is usually more cost-effective to replace.",
      },
      {
        q: "What size water heater do I need?",
        a: "Sizing depends on household size and hot water usage patterns.",
      },
      {
        q: "Should I choose gas or electric?",
        a: "Largely determined by what utility connections are already available.",
      },
      {
        q: "Is a tankless water heater worth the extra cost?",
        a: "It depends on household usage — tankless costs more upfront but provides continuous hot water.",
      },
    ],
    relatedServiceSlugs: ["water-heater-repair-tupelo-ms", "tankless-water-heaters-tupelo-ms"],
    ctaLabel: "Ready for a New Water Heater?",
  },
  {
    slug: "tankless-water-heaters-tupelo-ms",
    cluster: "Water Heaters",
    navLabel: "Tankless Water Heaters",
    title: "Tankless Water Heaters in Tupelo, MS",
    metaDescription:
      "Tankless water heater installation and repair in Tupelo, MS. Continuous hot water without a storage tank — see if it's the right fit.",
    h1: "Tankless Water Heaters in Tupelo, MS",
    intro: "On-demand hot water — installation, repair, and whether it's the right fit.",
    body: [
      {
        type: "p",
        text: "A tankless water heater heats water as it flows through the unit instead of storing and continuously heating a tank of water. That removes the standby tank altogether — no waiting for a tank to refill and reheat.",
      },
      { type: "h2", text: "Tankless vs. Traditional Tank Water Heaters" },
      {
        type: "list",
        items: [
          "Continuous supply — doesn't run out of hot water during heavy simultaneous use",
          "Space — significantly smaller, often wall-mounted",
          "Upfront cost — typically higher than a comparable tank unit",
          "Lifespan — generally longer than tank units",
        ],
      },
      { type: "h2", text: "Repairing an Existing Tankless Unit" },
      {
        type: "p",
        text: "Tankless units have their own set of components — venting requirements, flow sensors, and heat exchangers — distinct from a tank unit's troubleshooting steps.",
      },
    ],
    faqs: [
      {
        q: "How long do tankless water heaters last?",
        a: "Tankless units generally have a longer service life than traditional tank water heaters.",
      },
      {
        q: "Is a tankless water heater a good fit for my household?",
        a: "Households with high or simultaneous hot water demand tend to benefit most.",
      },
      {
        q: "Can a tankless water heater be repaired, or does it need to be replaced?",
        a: "Many tankless issues, including flow sensor and heat exchanger problems, are repairable.",
      },
      {
        q: "Do tankless water heaters need special venting?",
        a: "Gas tankless units generally have specific venting requirements.",
      },
    ],
    relatedServiceSlugs: ["water-heater-installation-tupelo-ms", "water-heater-repair-tupelo-ms"],
    ctaLabel: "Considering Tankless, or Need an Existing Unit Serviced?",
  },

  // ---------- LEAKS & PIPES ----------
  {
    slug: "leak-detection-tupelo-ms",
    cluster: "Leaks & Pipes",
    navLabel: "Leak Detection",
    title: "Leak Detection in Tupelo, MS",
    metaDescription:
      "Unexplained water bill, damp spots, or the sound of running water? Leak detection finds the source before it causes more damage.",
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
          "A noticeably higher water bill with no change in usage",
          "The sound of running water when nothing is turned on",
          "A damp or discolored spot on a wall, ceiling, or floor",
          "A consistently damp area in the yard with no clear cause",
          "Low water pressure that developed gradually",
        ],
      },
      { type: "h2", text: "Could It Be a Slab Leak?" },
      {
        type: "p",
        text: "If the suspected leak is under the concrete slab or foundation — often a warm spot on the floor, or sounds of running water near the foundation — that's a specific case with its own considerations.",
      },
      { type: "h2", text: "When a Leak Points to a Bigger Pattern" },
      {
        type: "p",
        text: "If leak detection turns up more than one leak, or the underlying pipe material looks like the real issue, that's a sign the home may need a broader look at its piping rather than another individual repair.",
      },
    ],
    faqs: [
      {
        q: "How do I know if I have a hidden leak?",
        a: "A rising water bill with no change in usage, the sound of running water with everything off, or unexplained damp spots.",
      },
      {
        q: "What are the signs of a slab leak specifically?",
        a: "A warm spot on the floor, sounds of running water near the foundation, or water pooling near the slab's edge.",
      },
      {
        q: "How is a hidden leak found without tearing open walls?",
        a: "Leak detection tools locate the leak's position first, so any repair is targeted.",
      },
      {
        q: "Why did my water bill suddenly go up?",
        a: "A hidden leak is one of the most common causes of an unexplained water bill increase.",
      },
    ],
    relatedServiceSlugs: ["slab-leak-repair-tupelo-ms", "repiping-tupelo-ms"],
    ctaLabel: "Suspect a Hidden Leak?",
  },
  {
    slug: "slab-leak-repair-tupelo-ms",
    cluster: "Leaks & Pipes",
    navLabel: "Slab Leak Repair",
    title: "Slab Leak Repair in Tupelo, MS",
    metaDescription:
      "Warm spot on the floor or water near your foundation in Tupelo, MS? Slab leak detection and repair — and how to tell it apart from a foundation issue.",
    h1: "Slab Leak Repair in Tupelo, MS",
    intro: "Detecting and repairing leaks under a concrete foundation.",
    body: [
      {
        type: "p",
        text: "A slab leak is a leak in a water line running underneath a home's concrete foundation. Because the pipe is inaccessible without specialized detection, slab leaks tend to go unnoticed longer than other leaks — and they're often confused with foundation problems.",
      },
      { type: "h2", text: "Signs of a Slab Leak" },
      {
        type: "list",
        items: [
          "A warm or noticeably damp spot on an otherwise cool floor",
          "The sound of running water near the foundation with no fixture in use",
          "A water bill that's risen with no change in usage",
          "Reduced water pressure that developed gradually",
        ],
      },
      { type: "h2", text: "Slab Leak vs. Foundation Problem — How to Tell Them Apart" },
      {
        type: "p",
        text: "A slab leak is a plumbing problem — a pipe under the slab has failed. A foundation problem is a structural issue with the slab or footing itself, which needs a foundation repair specialist instead. If water usage or a warm floor spot is the main symptom, that points toward a plumbing leak. If it's primarily cracking or structural movement with no water signs, that's more likely a foundation matter.",
      },
      { type: "h2", text: "Is a Slab Leak an Emergency?" },
      {
        type: "p",
        text: "Not always as urgent as a burst pipe, but it shouldn't be ignored — left unaddressed, it can lead to water damage, mold, and higher water bills over time.",
      },
    ],
    faqs: [
      {
        q: "What is a slab leak?",
        a: "A leak in a water line running underneath a home's concrete foundation.",
      },
      {
        q: "How do I know if it's a slab leak or a foundation problem?",
        a: "Water-related symptoms point toward a plumbing leak; structural symptoms with no water signs point toward a foundation issue.",
      },
      {
        q: "Is a slab leak an emergency?",
        a: "Not usually as urgent as a burst pipe, but shouldn't be ignored.",
      },
      {
        q: "Does the slab have to be broken open to fix it?",
        a: "Sometimes, but not always — the water line can sometimes be rerouted above the slab instead.",
      },
    ],
    relatedServiceSlugs: ["leak-detection-tupelo-ms"],
    ctaLabel: "Suspect a Slab Leak?",
  },
  {
    slug: "repiping-tupelo-ms",
    cluster: "Leaks & Pipes",
    navLabel: "Repiping",
    title: "Repiping in Tupelo, MS",
    metaDescription:
      "Recurring leaks, low pressure, or discolored water can mean it's time to repipe, not just repair. Repiping services in Tupelo, MS.",
    h1: "Repiping in Tupelo, MS",
    intro: "Replacing aging supply piping throughout a home.",
    body: [
      {
        type: "p",
        text: "When a house has one leak, the fix is usually simple: repair that section of pipe. But when leaks keep showing up in different places, water pressure has been dropping, or the water itself looks discolored, the problem often isn't any single pipe — it's the pipe material itself reaching the end of its usable life.",
      },
      { type: "h2", text: "Signs It May Be Time to Repipe" },
      {
        type: "list",
        items: [
          "Leaks appearing in different locations over a short span of time",
          "Water pressure that's gradually dropped throughout the whole house",
          "Discolored or rust-colored water, particularly after the water's been off",
          "Older galvanized steel, aging copper, or polybutylene piping",
        ],
      },
      { type: "h2", text: "Pipe Materials That Commonly Need Replacing" },
      {
        type: "list",
        items: [
          "Galvanized steel — corrodes internally over time",
          "Polybutylene — becomes brittle and fails with age",
          "Aging copper — can develop pinhole leaks in multiple spots",
        ],
      },
      { type: "h2", text: "How Repiping Is Different From a Water Line Replacement" },
      {
        type: "p",
        text: "Repiping refers to the supply piping inside the home. The underground water line from the street or meter to the house is a separate matter.",
      },
    ],
    faqs: [
      {
        q: "How do I know if I need to repipe instead of just repairing a leak?",
        a: "Repeated leaks in different locations, gradually declining water pressure, or discolored water.",
      },
      {
        q: "What pipe materials typically need to be replaced?",
        a: "Galvanized steel and polybutylene are the most common; aging copper can also develop multiple leaks.",
      },
      {
        q: "Is repiping the same as replacing my water line?",
        a: "No — repiping is the supply piping inside the home. The underground line is separate.",
      },
      {
        q: "How do I find out if repiping is actually needed?",
        a: "An in-person evaluation of the home's current piping is the right first step.",
      },
    ],
    relatedServiceSlugs: ["leak-detection-tupelo-ms", "water-line-services-tupelo-ms"],
    ctaLabel: "Noticing Repeated Leaks or Pressure Problems?",
  },
  {
    slug: "water-line-services-tupelo-ms",
    cluster: "Leaks & Pipes",
    navLabel: "Water Line Services",
    title: "Water Line Services in Tupelo, MS",
    metaDescription:
      "Whole-house pressure drop, a wet spot in the yard, or a rising water bill in Tupelo, MS? It may be the underground water line, not interior plumbing.",
    h1: "Water Line Services in Tupelo, MS",
    intro: "Repair and replacement of the buried line from the street to your home.",
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
      { type: "h2", text: "Water Line vs. Interior Plumbing vs. Slab Leak" },
      {
        type: "p",
        text: "Water line problems affect the whole house at once, often showing up outdoors. Interior leaks are usually more localized. Slab leaks are specifically under the foundation, often with a warm floor spot.",
      },
      { type: "h2", text: "Does the Yard Have to Be Dug Up?" },
      {
        type: "p",
        text: "Not always. Depending on the location and extent of the problem, some water line repairs can be done with trenchless methods.",
      },
    ],
    faqs: [
      {
        q: "How do I know if it's my water line and not something inside the house?",
        a: "A whole-house pressure drop, a wet spot in the yard, or a rising water bill with no interior leak found.",
      },
      {
        q: "What's the difference between a water line problem and a slab leak?",
        a: "A water line problem is buried outside the home; a slab leak is under the foundation.",
      },
      {
        q: "Does the yard have to be dug up to repair a water line?",
        a: "Not always — trenchless methods may apply depending on the situation.",
      },
      {
        q: "What causes a water line to fail?",
        a: "Pipe age and material, ground shifting, tree root intrusion, and corrosion.",
      },
    ],
    relatedServiceSlugs: ["repiping-tupelo-ms", "slab-leak-repair-tupelo-ms", "leak-detection-tupelo-ms"],
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
    relatedServiceSlugs: ["leak-detection-tupelo-ms", "repiping-tupelo-ms", "water-line-services-tupelo-ms"],
    ctaLabel: "Dealing With Low or Inconsistent Water Pressure?",
  },

  // ---------- FIXTURES ----------
  {
    slug: "fixture-plumbing-tupelo-ms",
    cluster: "Fixtures",
    navLabel: "Fixture Plumbing",
    title: "Fixture Plumbing in Tupelo, MS",
    metaDescription:
      "Faucet, toilet, sink, or garbage disposal problem in Tupelo, MS? Fixture repair and installation for homes and businesses.",
    h1: "Fixture Plumbing in Tupelo, MS",
    intro: "Repair and installation for faucets, toilets, sinks, and more.",
    body: [
      {
        type: "p",
        text: "Faucets, toilets, sinks, garbage disposals, showers, and bathtubs each fail or wear out in their own specific ways. Fixture plumbing covers repairing or replacing any of them.",
      },
      { type: "h2", text: "Faucets" },
      {
        type: "p",
        text: "A dripping or leaking faucet is usually a worn washer, cartridge, or O-ring. A faucet that's outdated or damaged beyond repair is a replacement instead.",
      },
      { type: "h2", text: "Toilets" },
      {
        type: "p",
        text: "Running toilets, weak flushes, and leaks at the base are typically tied to the flapper, fill valve, or wax ring seal.",
      },
      { type: "h2", text: "Sinks" },
      {
        type: "p",
        text: "Sink issues range from a slow drain at the fixture to a sink that's cracked, outdated, or being replaced.",
      },
      { type: "h2", text: "Garbage Disposals" },
      {
        type: "p",
        text: "A disposal that's jammed, humming without spinning, or leaking usually points to a clog, a worn motor, or a failing seal.",
      },
      { type: "h2", text: "Showers and Bathtubs" },
      {
        type: "p",
        text: "Leaking showerheads, faulty diverter valves, and worn tub/shower faucets are common repairs, along with fixture replacement as part of a remodel.",
      },
      { type: "h2", text: "Repair or Replace?" },
      {
        type: "p",
        text: "A specific worn part on an otherwise sound fixture is usually a repair. Multiple issues, visible damage, or simply updating an older fixture points toward replacement.",
      },
      { type: "h2", text: "A Note on Efficiency When Replacing" },
      {
        type: "p",
        text: "When a fixture is being replaced anyway, WaterSense-certified faucets, showerheads, and toilets — a real EPA efficiency program, not just a marketing label — use meaningfully less water while maintaining normal performance, worth considering for the replacement's long-term cost.",
      },
    ],
    faqs: [
      {
        q: "Should a fixture be repaired or replaced?",
        a: "A specific worn part on an otherwise sound fixture is usually a repair; multiple issues or visible damage points toward replacement.",
      },
      {
        q: "Are new fixtures more water-efficient?",
        a: "Often, yes — WaterSense-certified fixtures use less water while maintaining normal performance, worth factoring in when replacement is already on the table.",
      },
      {
        q: "What are the most common fixture problems?",
        a: "Dripping faucets, running toilets, slow sink drains, jammed disposals, and leaking shower/tub fixtures.",
      },
      {
        q: "Can new fixtures be installed as part of a remodel?",
        a: "Yes — fixture installation is a normal part of a kitchen or bathroom remodel.",
      },
    ],
    relatedServiceSlugs: ["drain-cleaning-tupelo-ms", "new-construction-remodeling-plumbing-tupelo-ms"],
    ctaLabel: "Have a Fixture That Needs Repair or Replacement?",
  },

  // ---------- SPECIALIZED ----------
  {
    slug: "gas-line-services-tupelo-ms",
    cluster: "Specialized",
    navLabel: "Gas Line Services",
    title: "Gas Line Services in Tupelo, MS",
    metaDescription:
      "Gas line repair and installation in Tupelo, MS — for new appliances, extensions, and non-emergency gas line work.",
    h1: "Gas Line Services in Tupelo, MS",
    intro: "Gas line installation and repair — with clear safety guidance for suspected leaks.",
    body: [
      {
        type: "p",
        text: "Gas line work covers everything from installing a new line for a gas appliance to repairing an existing line — most of which is routine, planned work. A suspected gas leak is different, and it's important to be clear about that distinction upfront.",
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
      { type: "h2", text: "Routine Gas Line Services" },
      {
        type: "list",
        items: [
          "New gas line installation for a range, dryer, water heater, or outdoor feature",
          "Gas line repair for a damaged, corroded, or improperly installed line",
          "Gas appliance connections",
        ],
      },
    ],
    faqs: [
      {
        q: "What should I do if I smell gas?",
        a: "Leave the property immediately, avoid anything that could create a spark, and call your gas utility's emergency line or 911 from outside.",
      },
      {
        q: "Can a gas line be extended for a new appliance?",
        a: "Yes — extending an existing line is a common, routine gas line service.",
      },
      {
        q: "What gas line work does a plumber handle versus the gas utility?",
        a: "The utility is generally responsible for the meter and the line up to that point; plumbing work covers the piping from the meter into and through the home.",
      },
    ],
    relatedServiceSlugs: [],
    ctaLabel: "Need Gas Line Installation or Repair?",
  },
  {
    slug: "backflow-prevention-tupelo-ms",
    cluster: "Specialized",
    navLabel: "Backflow Prevention",
    title: "Backflow Prevention in Tupelo, MS",
    metaDescription: "Backflow preventer testing and repair in Tupelo, MS — for compliance requirements or a malfunctioning device.",
    h1: "Backflow Prevention in Tupelo, MS",
    intro: "Backflow preventer testing and repair for homes and businesses.",
    body: [
      {
        type: "p",
        text: "A backflow preventer stops water from flowing backward into the clean water supply — a real risk in situations like irrigation systems, commercial fire suppression lines, or any connection where contaminated water could otherwise be drawn back into the system.",
      },
      { type: "h2", text: "Who Typically Needs Backflow Testing" },
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
        text: "Different situations call for different device types — which one applies depends on the specific connection and its hazard classification, not a one-size-fits-all answer.",
      },
      {
        type: "list",
        items: [
          "RPZ (Reduced Pressure Zone assembly) — used for higher-hazard situations, such as fire suppression systems or connections with a more serious contamination risk",
          "DCVA (Double Check Valve Assembly) — used for lower-hazard cross-connections",
          "PVB (Pressure Vacuum Breaker) — commonly used for irrigation systems connected to municipal water",
        ],
      },
      { type: "h2", text: "Signs a Backflow Preventer May Have Failed" },
      {
        type: "list",
        items: ["Water leaking from the device itself", "Discolored or unusual-tasting water", "Failing a required annual test"],
      },
      { type: "h2", text: "Testing vs. Repair" },
      {
        type: "p",
        text: "Testing confirms the device is functioning correctly — often done specifically to satisfy an annual compliance requirement. Repair follows when a test reveals a problem.",
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
        q: "Who needs backflow testing?",
        a: "Properties with irrigation systems, commercial fire suppression systems, and businesses required by local code.",
      },
      {
        q: "What's the difference between the device types?",
        a: "An RPZ is used for higher-hazard situations like fire suppression; a DCVA is used for lower-hazard connections; a PVB is commonly used for irrigation systems.",
      },
      {
        q: "What happens if a backflow preventer fails?",
        a: "A failed device no longer protects against backflow and typically needs repair or replacement.",
      },
      {
        q: "Is backflow testing required by law?",
        a: "Requirements vary by property type, water utility, and local code — ask when you call and it'll be confirmed for your specific situation.",
      },
    ],
    relatedServiceSlugs: ["commercial-plumbing-tupelo-ms"],
    ctaLabel: "Need Backflow Testing or Repair?",
  },
  {
    slug: "water-filtration-tupelo-ms",
    cluster: "Specialized",
    navLabel: "Water Filtration",
    title: "Water Filtration in Tupelo, MS",
    metaDescription: "Water tastes or smells off, or feels hard in Tupelo, MS? Whole-house filtration and treatment system installation and repair.",
    h1: "Water Filtration in Tupelo, MS",
    intro: "Water treatment and filtration installation and repair.",
    body: [
      {
        type: "p",
        text: "Water quality problems show up in different ways — an off taste or smell, water that feels hard, sediment, or mineral buildup on fixtures over time. Filtration and treatment systems address these issues at the source.",
      },
      { type: "h2", text: "Common Water Quality Issues" },
      {
        type: "list",
        items: [
          "Taste or odor — often addressed with a carbon-based filtration system",
          "Hard water — typically addressed with a water softener",
          "Sediment — often from aging pipes or well water",
          "Well water specifically — may carry mineral, sediment, or bacterial concerns",
        ],
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
        a: "Often, yes — well water can have different mineral, sediment, or bacterial considerations.",
      },
    ],
    relatedServiceSlugs: ["repiping-tupelo-ms"],
    ctaLabel: "Dealing With Water Quality Issues?",
  },
  {    slug: "sump-pump-tupelo-ms",
    cluster: "Specialized",
    navLabel: "Sump Pump",
    title: "Sump Pump Installation & Repair",
    metaDescription: "Basement or crawl space water problems in Tupelo, MS? Sump pump installation and repair, including battery backup options.",
    h1: "Sump Pump Installation & Repair in Tupelo, MS",
    intro: "Keeping basements and crawl spaces dry, including battery backup options.",
    body: [
      {
        type: "p",
        text: "A sump pump moves water away from a basement or crawl space before it accumulates into standing water or damage.",
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
      { type: "h2", text: "Battery Backup Sump Pumps" },
      {
        type: "p",
        text: "Because sump pumps often fail during storms specifically because of power outages, a battery backup system keeps the pump running when the power doesn't.",
      },
      {
        type: "p",
        text: "Emergency plumbing service, including sump pump failures during a storm, is available 24/7.",
      },
    ],
    faqs: [
      {
        q: "Why did my sump pump stop working?",
        a: "Power loss, a stuck float switch, a worn motor, or a clogged discharge line.",
      },
      {
        q: "Do I need a sump pump if I've never had flooding?",
        a: "Homes with a history of water intrusion or a high water table are the clearest candidates.",
      },
      {
        q: "What is a battery backup sump pump, and do I need one?",
        a: "It keeps a sump pump running during a power outage.",
      },
      {
        q: "How urgent is sump pump repair during a storm?",
        a: "A failed pump during active water intrusion is a genuinely urgent situation.",
      },
    ],
    relatedServiceSlugs: [],
    ctaLabel: "Dealing With a Failed Sump Pump or Basement Water?",
  },
];