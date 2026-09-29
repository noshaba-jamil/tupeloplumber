import { LocationPage } from "@/lib/types";

export const locations: LocationPage[] = [
  {
    slug: "plumber-saltillo-ms",
    tier: 1,
    name: "Saltillo",
    title: "Plumber in Saltillo, MS | Tupelo Plumber",
    h1: "Plumber in Saltillo, MS",
    metaDescription:
      "Plumbing repairs, drains & water heaters in Saltillo, MS — roughly 6 miles north of Tupelo on US-45. Same-day & emergency service available.",
    distanceNote:
      "Saltillo sits directly north of Tupelo in Lee County along the US-45 corridor, roughly 6 miles from downtown Tupelo.",
    reasoning:
      "Saltillo doesn't have to rely on a company based an hour or more away — service that covers Tupelo and the immediate surrounding towns along the US-45 corridor reaches Saltillo just as easily as it reaches Tupelo itself.",
    neighborSlugs: ["plumber-verona-ms", "plumber-shannon-ms", "plumber-guntown-ms"],
    featuredServiceSlugs: [
      "plumbing-repair-tupelo-ms",
      "water-heater-repair-tupelo-ms",
      "drain-cleaning-tupelo-ms",
      "fixture-plumbing-tupelo-ms",
      "residential-plumbing-tupelo-ms",
      "leak-detection-tupelo-ms",
    ],
    localBody: [
      {
        type: "p",
        text: "Saltillo has grown fast over the past couple of decades, and that growth shows up in the plumbing calls: a lot of newer-construction subdivisions sit alongside older homes near the original town center, and the two bring different problems. Newer homes on PEX supply lines tend to have fewer leaks but more fixture and water-heater-sizing questions as families grow into a house. Older homes closer to downtown Saltillo are more likely to still have original galvanized or early-copper supply lines, which is where recurring leaks and dropping water pressure tend to show up first.",
      },
      { type: "h2", text: "Common Calls in Saltillo" },
      {
        type: "list",
        items: [
          "Water heater sizing and replacement in newer subdivisions where household demand has outgrown the original unit",
          "Slab leak checks in homes built on a concrete foundation, which is the standard here for newer construction",
          "Sewer line root intrusion from mature trees along older residential streets near downtown",
          "Fixture upgrades and repairs tied to home renovations, which are common as the town's housing stock has aged into its second or third owner",
        ],
      },
      {
        type: "p",
        text: "This part of Lee County sits in Mississippi's clay-belt soil, which expands and contracts noticeably with wet and dry seasons. That movement is a real factor in underground pipe stress over time — it's part of why a sewer line that was fine for years can develop a joint leak or a root-intrusion point without any single dramatic cause.",
      },
    ],
    faqs: [
      {
        q: "How far is Saltillo from Tupelo?",
        a: "Roughly 6 miles north along US-45 — a short, routine drive for scheduled and emergency service alike.",
      },
      {
        q: "Do newer Saltillo subdivisions need different plumbing service than older parts of town?",
        a: "Somewhat — newer homes on PEX and slab foundations tend to have more fixture and water-heater questions, while older homes nearer downtown are more likely to have aging galvanized or copper lines worth having checked.",
      },
      {
        q: "Is emergency plumbing available in Saltillo, or just Tupelo?",
        a: "Emergency service covers Saltillo the same as Tupelo, including nights and weekends.",
      },
      {
        q: "Can tree roots really get into a sewer line in Saltillo?",
        a: "Yes — mature trees along older residential streets are a common cause of recurring backups, and a sewer camera inspection is the most direct way to confirm it.",
      },
      {
        q: "Is same-day service available for routine repairs in Saltillo?",
        a: "Yes — same-day availability applies to routine repairs in Saltillo, not just emergencies.",
      },
    ],
  },
  {
    slug: "plumber-verona-ms",
    tier: 1,
    name: "Verona",
    title: "Plumber in Verona, MS | Tupelo Plumber",
    h1: "Plumber in Verona, MS",
    metaDescription:
      "Plumbing repairs, drains & water heaters in Verona, MS — roughly 4 miles south of Tupelo on US-45. Same-day & emergency service available.",
    distanceNote: "Verona is immediately south of Tupelo in Lee County on US-45, roughly 4 miles from downtown.",
    reasoning:
      "Verona's proximity to Tupelo means the same provider covering Tupelo reaches Verona without the delay of a company based further out.",
    neighborSlugs: ["plumber-saltillo-ms", "plumber-shannon-ms", "plumber-plantersville-ms"],
    featuredServiceSlugs: [
      "plumbing-repair-tupelo-ms",
      "repiping-tupelo-ms",
      "drain-cleaning-tupelo-ms",
      "water-heater-repair-tupelo-ms",
      "commercial-plumbing-tupelo-ms",
      "leak-detection-tupelo-ms",
    ],
    localBody: [
      {
        type: "p",
        text: "Verona is one of the older, more established communities immediately outside Tupelo, and a meaningful share of the housing stock reflects that — homes built well before PEX and PVC became standard, meaning galvanized steel or early copper supply lines are still common in parts of town. That's the single biggest factor separating a Verona service call from a call to a newer subdivision: it's not just about fixing what broke, it's about recognizing when the pipe material itself, not any one fitting, is the real issue.",
      },
      { type: "h2", text: "Common Calls in Verona" },
      {
        type: "list",
        items: [
          "Repiping consultations for homes with original galvanized supply lines showing declining pressure or recurring pinhole leaks",
          "Water heater replacement, since units in older homes are frequently past their typical service life",
          "Drain and sewer line clearing along mature, tree-lined residential streets",
          "Plumbing for the light commercial and small-business properties along the US-45 corridor through town",
        ],
      },
      {
        type: "p",
        text: "Because Verona sits in the same US-45 corridor as Tupelo and Saltillo, a plumber already working that route reaches Verona without treating it as a special trip — which matters for same-day and emergency response times.",
      },
    ],
    faqs: [
      {
        q: "How far is Verona from Tupelo?",
        a: "Roughly 4 miles south along US-45 — one of the closest communities to Tupelo itself.",
      },
      {
        q: "My house in Verona is older — should I be worried about galvanized pipes?",
        a: "It's worth having checked. Galvanized steel corrodes from the inside over decades, and in a lot of Verona's older housing stock it's still the original supply piping — declining pressure or repeated small leaks are the usual first signs.",
      },
      {
        q: "Is emergency plumbing available in Verona?",
        a: "Yes, the same as in Tupelo, including nights, weekends, and holidays.",
      },
      {
        q: "Do you handle plumbing for small businesses along US-45 in Verona?",
        a: "Yes — commercial plumbing service covers the small businesses and light commercial properties along that corridor, scheduled around business hours where needed.",
      },
      {
        q: "Is same-day service available in Verona?",
        a: "Yes — same-day availability applies to routine repairs in Verona, not just emergencies.",
      },
    ],
  },
  {
    slug: "plumber-shannon-ms",
    tier: 1,
    name: "Shannon",
    title: "Plumber in Shannon, MS | Tupelo Plumber",
    h1: "Plumber in Shannon, MS",
    metaDescription:
      "Plumbing repairs, drains & water heaters in Shannon, MS — roughly 10 miles south of Tupelo on US-45. Same-day & emergency service available.",
    distanceNote:
      "Shannon is in southern Lee County on US-45, about 10 miles south of Tupelo, within the same north-south corridor.",
    reasoning:
      "Shannon sits on the same corridor as Verona and Tupelo, making it a routine part of the same service route rather than a special trip.",
    neighborSlugs: ["plumber-verona-ms", "plumber-okolona-ms"],
    featuredServiceSlugs: [
      "plumbing-repair-tupelo-ms",
      "water-heater-repair-tupelo-ms",
      "sewer-line-repair-tupelo-ms",
      "drain-cleaning-tupelo-ms",
      "water-filtration-tupelo-ms",
      "sump-pump-tupelo-ms",
    ],
    localBody: [
      {
        type: "p",
        text: "Shannon is a smaller, tighter-knit community than Tupelo or Verona, with a mix of in-town housing and properties on larger lots just outside the town limits — some of which rely on private wells rather than the municipal system. That distinction matters for plumbing: well-water households deal with mineral buildup, sediment, and pressure-tank issues that municipal-water homes in Tupelo proper generally don't see as often.",
      },
      { type: "h2", text: "Common Calls in Shannon" },
      {
        type: "list",
        items: [
          "Well-system pressure tank and pressure-switch troubleshooting for properties outside the municipal service area",
          "Water heater sediment buildup, which shows up faster in well-water and hard-water households",
          "Sump pump installation and repair for properties in lower-lying areas of southern Lee County",
          "Standard drain clearing and fixture repair for in-town homes on municipal service",
        ],
      },
      {
        type: "p",
        text: "Whether a property is on the municipal system or a private well changes the diagnosis for a lot of common complaints — cloudy or mineral-tasting water, for instance, points somewhere very different depending on which one applies, which is worth mentioning when describing the problem over the phone.",
      },
    ],
    faqs: [
      {
        q: "How far is Shannon from Tupelo?",
        a: "Roughly 10 miles south along US-45.",
      },
      {
        q: "My property outside Shannon is on a well, not city water — do you work on well systems?",
        a: "Yes — pressure tanks, pressure switches, and well-related plumbing issues are handled the same as municipal-water service calls.",
      },
      {
        q: "Is emergency plumbing available in Shannon?",
        a: "Yes, the same as in Tupelo and Verona.",
      },
      {
        q: "Why does my water heater need flushing more often out here than it did in town?",
        a: "Well water and generally harder water in this area tend to leave more sediment in a tank over time than typical municipal water, so more frequent flushing helps it perform correctly for longer.",
      },
      {
        q: "Is same-day service available in Shannon?",
        a: "Yes — same-day availability applies to routine repairs in Shannon, not just emergencies.",
      },
    ],
  },
  {
    slug: "plumber-mooreville-ms",
    tier: 1,
    name: "Mooreville",
    title: "Plumber in Mooreville, MS | Tupelo Plumber",
    h1: "Plumber in Mooreville, MS",
    metaDescription:
      "Plumbing repairs, drains & water heaters in Mooreville, MS — roughly 8 miles east of Tupelo on Hwy 178. Same-day & emergency service available.",
    distanceNote:
      "Mooreville is an unincorporated community in eastern Lee County, roughly 8 miles from Tupelo along the Highway 178 corridor.",
    reasoning:
      "Being just east of Tupelo along a well-traveled corridor, Mooreville falls within the same routine service range as the city itself.",
    neighborSlugs: ["plumber-fulton-ms", "plumber-mantachie-ms"],
    featuredServiceSlugs: [
      "water-filtration-tupelo-ms",
      "sump-pump-tupelo-ms",
      "plumbing-repair-tupelo-ms",
      "water-heater-repair-tupelo-ms",
      "leak-detection-tupelo-ms",
      "gas-line-services-tupelo-ms",
    ],
    localBody: [
      {
        type: "p",
        text: "Mooreville is unincorporated, which means there's no single town water department the way Tupelo or Saltillo has — coverage here is a mix of rural water association service and private wells, depending on exactly where a property sits along Highway 178. That mix is the main thing that shapes plumbing work out here: water quality and pressure vary property to property more than they do inside an incorporated town with one unified system.",
      },
      { type: "h2", text: "Common Calls in Mooreville" },
      {
        type: "list",
        items: [
          "Water filtration and treatment for properties with taste, odor, or hardness concerns tied to well or rural-association water",
          "Pressure-related troubleshooting, since rural water pressure can run lower or less consistent than in-town municipal service",
          "Propane and gas line work for properties that rely on propane rather than natural gas, common in unincorporated areas",
          "General repair and water heater service for the mix of older farmhouses and newer homes spread through the area",
        ],
      },
      {
        type: "p",
        text: "Being unincorporated doesn't put Mooreville outside the regular service area — it just means a plumber working here needs to ask a couple of extra questions upfront (well or rural water association, propane or electric) that wouldn't come up on a standard in-town call.",
      },
    ],
    faqs: [
      {
        q: "How far is Mooreville from Tupelo?",
        a: "Roughly 8 miles east along Highway 178.",
      },
      {
        q: "Is Mooreville considered part of the regular service area, even though it's unincorporated?",
        a: "Yes — service area is based on proximity and corridor, not incorporation status.",
      },
      {
        q: "My water has a mineral taste or smell — is that normal out here?",
        a: "It's common enough with well or rural-association water in this area that it's worth a look — a water filtration or treatment system is usually the fix, depending on what's actually causing it.",
      },
      {
        q: "Do you work on propane-fed plumbing and gas lines?",
        a: "Yes — properties relying on propane rather than natural gas are handled the same as any other gas line service call.",
      },
      {
        q: "Is same-day service available in Mooreville?",
        a: "Yes — same-day availability applies to routine repairs in Mooreville, not just emergencies.",
      },
    ],
  },
  {
    slug: "plumber-guntown-ms",
    tier: 1,
    name: "Guntown",
    title: "Plumber in Guntown, MS | Tupelo Plumber",
    h1: "Plumber in Guntown, MS",
    metaDescription:
      "Plumbing repairs, drains & water heaters in Guntown, MS — roughly 12 miles north of Tupelo on US-45. Same-day & emergency service available.",
    distanceNote: "Guntown is in northern Lee County, roughly 12 miles north of Tupelo on US-45, past Saltillo.",
    reasoning:
      "Guntown sits further up the same US-45 corridor already covered for Saltillo, keeping it within routine service range.",
    neighborSlugs: ["plumber-saltillo-ms", "plumber-baldwyn-ms"],
    featuredServiceSlugs: [
      "plumbing-repair-tupelo-ms",
      "water-heater-repair-tupelo-ms",
      "drain-cleaning-tupelo-ms",
      "water-line-services-tupelo-ms",
      "residential-plumbing-tupelo-ms",
      "sump-pump-tupelo-ms",
    ],
    localBody: [
      {
        type: "p",
        text: "Guntown is a small town along the same US-45 corridor as Saltillo, a step further north, with a housing stock that's a genuine mix of long-established homes and newer construction on the outskirts. The town's small size means plumbing issues here tend to be straightforward household repairs rather than large commercial jobs — but that also means when something does need a specialist (a water line, a full repipe), it's worth getting an accurate diagnosis rather than guessing, since there isn't a large pool of local competing providers to get a second opinion from quickly.",
      },
      { type: "h2", text: "Common Calls in Guntown" },
      {
        type: "list",
        items: [
          "Standard household repairs — running toilets, dripping faucets, and fixture issues in single-family homes",
          "Water heater replacement as older units in longer-established homes reach the end of their service life",
          "Underground water line issues affecting properties on larger lots at the edge of town",
          "Sump pump service for lower-lying properties, particularly during heavy seasonal rain",
        ],
      },
    ],
    faqs: [
      {
        q: "How far is Guntown from Tupelo?",
        a: "Roughly 12 miles north along US-45.",
      },
      {
        q: "Is emergency plumbing available in Guntown?",
        a: "Yes, the same as closer-in communities like Saltillo.",
      },
      {
        q: "Do you handle bigger jobs like water line replacement in Guntown, or just small repairs?",
        a: "Both — water line repair and replacement, along with standard household repairs, are handled the same as anywhere else in the service area.",
      },
      {
        q: "Is same-day service available in Guntown?",
        a: "Yes — same-day availability applies to routine repairs in Guntown, not just emergencies.",
      },
      {
        q: "Do you handle both emergency and routine plumbing in Guntown?",
        a: "Yes — the full range, from scheduled repairs to 24/7 emergency response, is available in Guntown.",
      },
    ],
  },
  {
    slug: "plumber-baldwyn-ms",
    tier: 1,
    name: "Baldwyn",
    title: "Plumber in Baldwyn, MS | Tupelo Plumber",
    h1: "Plumber in Baldwyn, MS",
    metaDescription:
      "Plumbing repairs, drains & water heaters in Baldwyn, MS — roughly 20 miles north of Tupelo, near the Lee/Prentiss line. Emergency service available.",
    distanceNote:
      "Baldwyn straddles the Lee and Prentiss county line, roughly 20 miles north of Tupelo, midway toward Booneville.",
    reasoning:
      "Baldwyn is further out than Saltillo or Guntown, but still within the same corridor a Tupelo-based provider covers regularly.",
    neighborSlugs: ["plumber-guntown-ms", "plumber-booneville-ms"],
    featuredServiceSlugs: [
      "plumbing-repair-tupelo-ms",
      "commercial-plumbing-tupelo-ms",
      "water-heater-repair-tupelo-ms",
      "sewer-line-repair-tupelo-ms",
      "repiping-tupelo-ms",
      "backflow-prevention-tupelo-ms",
    ],
    localBody: [
      {
        type: "p",
        text: "Baldwyn straddles two counties, which is a small but real distinction — plumbing code enforcement and permitting can technically differ depending on which side of the Lee/Prentiss line a specific property sits on, though the actual plumbing work itself doesn't change. The town has a historic downtown core with older commercial buildings alongside residential streets that mix decades of housing, which means both aging supply lines and older commercial fixtures show up regularly here.",
      },
      { type: "h2", text: "Common Calls in Baldwyn" },
      {
        type: "list",
        items: [
          "Commercial plumbing for the small businesses and storefronts in Baldwyn's historic downtown",
          "Sewer line repair for older residential and commercial buildings with aging clay or cast-iron drain lines",
          "Repiping evaluations for homes with original galvanized supply lines",
          "Backflow prevention testing for any commercial property with an irrigation or fire-suppression connection",
        ],
      },
    ],
    faqs: [
      {
        q: "How far is Baldwyn from Tupelo?",
        a: "Roughly 20 miles north, near the Lee/Prentiss county line.",
      },
      {
        q: "Is Baldwyn too far for regular (non-emergency) service?",
        a: "No — it's part of the regular service area, just further along the same corridor.",
      },
      {
        q: "Does it matter which county my Baldwyn property is in for plumbing work?",
        a: "The plumbing work itself doesn't change — permitting requirements can technically differ by county, which is worth confirming for any larger project.",
      },
      {
        q: "Do you handle plumbing for older commercial buildings in downtown Baldwyn?",
        a: "Yes — older storefront plumbing, including aging drain lines and fixture replacement, is a regular part of commercial service in Baldwyn.",
      },
      {
        q: "Is same-day service available in Baldwyn?",
        a: "Yes — same-day availability applies to routine repairs in Baldwyn, not just emergencies.",
      },
    ],
  },
  {
    slug: "plumber-fulton-ms",
    tier: 1,
    name: "Fulton",
    title: "Plumber in Fulton, MS | Tupelo Plumber",
    h1: "Plumber in Fulton, MS",
    metaDescription:
      "Plumbing repairs, drains & water heaters in Fulton, MS — roughly 16 miles east of Tupelo on Highway 78. Same-day & emergency service available.",
    distanceNote: "Fulton is the seat of Itawamba County, roughly 16 miles east of Tupelo on the Highway 78 corridor.",
    reasoning:
      "As the largest town on the eastern side of the service area, Fulton is a regular part of the same coverage that extends from Tupelo along Highway 78.",
    neighborSlugs: ["plumber-mooreville-ms", "plumber-mantachie-ms"],
    featuredServiceSlugs: [
      "sump-pump-tupelo-ms",
      "water-line-services-tupelo-ms",
      "plumbing-repair-tupelo-ms",
      "commercial-plumbing-tupelo-ms",
      "water-heater-repair-tupelo-ms",
      "sewer-line-repair-tupelo-ms",
    ],
    localBody: [
      {
        type: "p",
        text: "Fulton sits on the Tennessee-Tombigbee Waterway, and that proximity to water is a real factor for plumbing in parts of town — properties closer to the waterway and lower-lying areas deal with a higher water table, which affects everything from sump pump reliability to how a slab foundation settles over time. As the Itawamba County seat, Fulton also has more commercial and municipal-adjacent buildings than the smaller towns further out, which brings a wider range of plumbing work than a typical residential-only community.",
      },
      { type: "h2", text: "Common Calls in Fulton" },
      {
        type: "list",
        items: [
          "Sump pump installation and battery-backup systems for homes in lower-lying areas near the waterway",
          "Underground water line issues on older residential streets, especially where a high water table accelerates pipe corrosion",
          "Commercial plumbing for downtown businesses and county-seat commercial properties",
          "Sewer line inspection for homes where soil saturation near the water has historically been a factor in line settling",
        ],
      },
    ],
    faqs: [
      {
        q: "How far is Fulton from Tupelo?",
        a: "Roughly 16 miles east along Highway 78.",
      },
      {
        q: "Does living near the Tenn-Tom Waterway affect my plumbing?",
        a: "It can — a higher water table near the waterway is a real factor in sump pump demand and can accelerate wear on underground lines over the years, which is worth mentioning when describing a problem.",
      },
      {
        q: "Does service extend beyond Fulton toward Itawamba County?",
        a: "Coverage is centered on Fulton itself and the corridor connecting it to Tupelo.",
      },
      {
        q: "Is emergency plumbing available in Fulton?",
        a: "Yes.",
      },
      {
        q: "Is same-day service available in Fulton?",
        a: "Yes — same-day availability applies to routine repairs in Fulton, not just emergencies.",
      },
    ],
  },
  {
    slug: "plumber-pontotoc-ms",
    tier: 1,
    name: "Pontotoc",
    title: "Plumber in Pontotoc, MS | Tupelo Plumber",
    h1: "Plumber in Pontotoc, MS",
    metaDescription:
      "Plumbing repairs, drains & water heaters in Pontotoc, MS — roughly 17-18 miles west of Tupelo on Highway 6. Emergency service available.",
    distanceNote: "Pontotoc is the seat of Pontotoc County, roughly 17-18 miles west of Tupelo on Highway 6.",
    reasoning:
      "Pontotoc's size and its direct connection to Tupelo via Highway 6 make it a natural extension of the same service area.",
    neighborSlugs: ["plumber-new-albany-ms"],
    featuredServiceSlugs: [
      "commercial-plumbing-tupelo-ms",
      "new-construction-remodeling-plumbing-tupelo-ms",
      "plumbing-repair-tupelo-ms",
      "water-heater-repair-tupelo-ms",
      "drain-cleaning-tupelo-ms",
      "backflow-prevention-tupelo-ms",
    ],
    localBody: [
      {
        type: "p",
        text: "As the Pontotoc County seat, Pontotoc has a downtown commercial core, a courthouse square, and a mix of older in-town housing plus newer residential growth toward the edges of town — a broader range of building types than the smaller communities on this list. That variety means plumbing calls here span everything from historic downtown storefronts to brand-new residential builds, more like a smaller-scale version of Tupelo itself than a purely rural extension.",
      },
      { type: "h2", text: "Common Calls in Pontotoc" },
      {
        type: "list",
        items: [
          "New construction and remodeling plumbing for residential growth on the outskirts of town",
          "Commercial plumbing for businesses around the courthouse square and historic downtown",
          "Water heater and fixture repair for the town's older, established residential neighborhoods",
          "Backflow prevention testing for commercial properties and any irrigation-connected systems",
        ],
      },
    ],
    faqs: [
      {
        q: "How far is Pontotoc from Tupelo?",
        a: "Roughly 17-18 miles west along Highway 6.",
      },
      {
        q: "Is Pontotoc treated as its own separate service area?",
        a: "No — it's covered as part of the same regional service area centered on Tupelo.",
      },
      {
        q: "Do you handle plumbing for new construction in Pontotoc's growing residential areas?",
        a: "Yes — new construction and remodeling plumbing, coordinated with a builder's timeline, is a regular part of service in Pontotoc.",
      },
      {
        q: "Do you work on older commercial buildings around the courthouse square?",
        a: "Yes — older downtown commercial plumbing is handled the same as newer commercial properties.",
      },
      {
        q: "Is same-day service available in Pontotoc?",
        a: "Yes — same-day availability applies to routine repairs in Pontotoc, not just emergencies.",
      },
    ],
  },
  {
    slug: "plumber-nettleton-ms",
    tier: 1,
    name: "Nettleton",
    title: "Plumber in Nettleton, MS | Tupelo Plumber",
    h1: "Plumber in Nettleton, MS",
    metaDescription:
      "Plumbing repairs, drains & water heaters in Nettleton, MS — roughly 16 miles southeast of Tupelo. Same-day & emergency service available.",
    distanceNote: "Nettleton lies southeast of Tupelo on the Lee and Monroe county line, roughly 16 miles out.",
    reasoning:
      "Nettleton sits at the southeastern edge of the regular service corridor, keeping it connected to the same coverage area as Shannon and Verona.",
    neighborSlugs: ["plumber-amory-ms", "plumber-shannon-ms"],
    featuredServiceSlugs: [
      "plumbing-repair-tupelo-ms",
      "water-heater-repair-tupelo-ms",
      "drain-cleaning-tupelo-ms",
      "water-filtration-tupelo-ms",
      "residential-plumbing-tupelo-ms",
      "leak-detection-tupelo-ms",
    ],
    localBody: [
      {
        type: "p",
        text: "Nettleton sits right at the Lee/Monroe county line, which puts it at the far southeastern edge of the regular Tupelo service corridor — close enough to Shannon and the US-45 route to stay a routine stop, but far enough out that it's genuinely on the edge of the map most Tupelo-based providers cover at all. That edge-of-territory position is worth knowing, since it can mean fewer competing local options for residents here than in towns closer to Tupelo.",
      },
      { type: "h2", text: "Common Calls in Nettleton" },
      {
        type: "list",
        items: [
          "Standard residential repairs — leaks, fixture issues, and water heater service across the town's housing stock",
          "Water quality and filtration questions for properties near the county line that may rely on a mix of municipal and well sources",
          "Drain and sewer clearing for older in-town homes",
          "Leak detection for properties where a rising water bill is the first sign of a hidden problem",
        ],
      },
    ],
    faqs: [
      {
        q: "How far is Nettleton from Tupelo?",
        a: "Roughly 16 miles southeast.",
      },
      {
        q: "Does service extend past Nettleton toward Amory?",
        a: "Coverage is centered on Nettleton itself and the corridor connecting it to Tupelo.",
      },
      {
        q: "Is Nettleton too far out for a Tupelo-based plumber to reach quickly?",
        a: "No — it's a routine part of the coverage extending through Shannon along the same corridor, for both scheduled and emergency calls.",
      },
      {
        q: "Is emergency plumbing available in Nettleton?",
        a: "Yes.",
      },
      {
        q: "Is same-day service available in Nettleton?",
        a: "Yes — same-day availability applies to routine repairs in Nettleton, not just emergencies.",
      },
    ],
  },
  {
    slug: "plumber-new-albany-ms",
    tier: 2,
    name: "New Albany",
    title: "Plumber in New Albany, MS | Tupelo Plumber",
    h1: "Plumber in New Albany, MS",
    metaDescription:
      "Plumbing repairs, drains & water heaters in New Albany, MS — roughly 22 miles north of Tupelo on Highway 78.",
    distanceNote:
      "New Albany is the seat of Union County, roughly 22 miles north of Tupelo along the Highway 78 corridor.",
    reasoning:
      "New Albany's direct connection to Tupelo via Highway 78 keeps it within reasonable service range of the same coverage that extends through Union and Lee counties.",
    neighborSlugs: ["plumber-pontotoc-ms"],
    featuredServiceSlugs: [
      "commercial-plumbing-tupelo-ms",
      "sewer-line-repair-tupelo-ms",
      "plumbing-repair-tupelo-ms",
      "water-heater-repair-tupelo-ms",
    ],
    localBody: [
      {
        type: "p",
        text: "New Albany, the Union County seat, sits on the Tallahatchie River and has a downtown built up along the historic rail and river commerce that shaped the town. That older downtown core, paired with residential neighborhoods that have grown up around it over generations, means a fair number of properties here still carry original clay or cast-iron drain lines — the kind of infrastructure that generally holds up fine for decades until root intrusion or ground settling causes a specific, locatable problem.",
      },
      { type: "h2", text: "Common Calls in New Albany" },
      {
        type: "list",
        items: [
          "Sewer line inspection and repair for older residential streets with original clay or cast-iron drain piping",
          "Commercial plumbing for downtown businesses in the historic district",
          "Standard repair and water heater service across New Albany's residential neighborhoods",
        ],
      },
    ],
    faqs: [
      {
        q: "How far is New Albany from Tupelo?",
        a: "Roughly 22 miles north along Highway 78.",
      },
      {
        q: "Is New Albany part of the regular service area?",
        a: "Yes, as part of the extended service area beyond the closest Tier 1 towns.",
      },
      {
        q: "My New Albany home is older — should I worry about the drain lines?",
        a: "It's worth having a sewer camera inspection done if you're seeing recurring backups. A lot of the older housing stock in New Albany still has original clay or cast-iron drain lines, and root intrusion at a joint is a common, fixable cause.",
      },
      {
        q: "Is emergency plumbing available in New Albany?",
        a: "Yes.",
      },
      {
        q: "Is same-day service available in New Albany?",
        a: "Yes — same-day availability applies to routine repairs in New Albany, not just emergencies.",
      },
    ],
  },
  {
    slug: "plumber-amory-ms",
    tier: 2,
    name: "Amory",
    title: "Plumber in Amory, MS | Tupelo Plumber",
    h1: "Plumber in Amory, MS",
    metaDescription:
      "Plumbing repairs, drains & water heaters in Amory, MS — roughly 24 miles southeast of Tupelo, beyond Nettleton.",
    distanceNote: "Amory is in Monroe County, roughly 24 miles southeast of Tupelo, beyond Nettleton.",
    reasoning:
      "Amory continues the same corridor already served through Nettleton, extending coverage a bit further southeast.",
    neighborSlugs: ["plumber-nettleton-ms"],
    featuredServiceSlugs: ["sump-pump-tupelo-ms", "water-line-services-tupelo-ms", "plumbing-repair-tupelo-ms", "water-heater-repair-tupelo-ms"],
    localBody: [
      {
        type: "p",
        text: "Amory grew up around the railroad and sits near the Tombigbee River in Monroe County, and that river proximity is a genuine consideration for plumbing in the lower parts of town — a higher water table means sump pump reliability and underground line condition matter more here than in towns further from the water. Amory is also far enough from Tupelo that it's at the outer edge of a routine service radius, which is worth being upfront about for anything beyond a standard scheduled call.",
      },
      { type: "h2", text: "Common Calls in Amory" },
      {
        type: "list",
        items: [
          "Sump pump installation and repair for properties in lower-lying areas near the river",
          "Underground water line service where a high water table has accelerated pipe wear over time",
          "Standard household repairs and water heater service across Amory's residential neighborhoods",
        ],
      },
    ],
    faqs: [
      {
        q: "How far is Amory from Tupelo?",
        a: "Roughly 24 miles southeast, past Nettleton.",
      },
      {
        q: "Is Amory part of the regular service area?",
        a: "Yes, as an extension of the Nettleton corridor.",
      },
      {
        q: "Does being near the river affect plumbing in Amory?",
        a: "In lower-lying parts of town, a higher water table is a real factor in sump pump demand and can affect how underground lines hold up over the years.",
      },
      {
        q: "Is emergency plumbing available in Amory?",
        a: "Yes.",
      },
      {
        q: "Is same-day service available in Amory?",
        a: "Yes — same-day availability applies to routine repairs in Amory, not just emergencies.",
      },
    ],
  },
  {
    slug: "plumber-booneville-ms",
    tier: 2,
    name: "Booneville",
    title: "Plumber in Booneville, MS | Tupelo Plumber",
    h1: "Plumber in Booneville, MS",
    metaDescription:
      "Plumbing repairs, drains & water heaters in Booneville, MS — roughly 24 miles north of Tupelo, beyond Baldwyn.",
    distanceNote: "Booneville is in Prentiss County, roughly 24 miles north of Tupelo, beyond Baldwyn.",
    reasoning:
      "Booneville continues the same US-45 corridor already served through Saltillo, Guntown, and Baldwyn.",
    neighborSlugs: ["plumber-baldwyn-ms"],
    featuredServiceSlugs: ["commercial-plumbing-tupelo-ms", "water-heater-repair-tupelo-ms", "plumbing-repair-tupelo-ms", "drain-cleaning-tupelo-ms"],
    localBody: [
      {
        type: "p",
        text: "Booneville, the Prentiss County seat, has a downtown built around its courthouse square and a student population tied to Northeast Mississippi Community College, which adds a real mix of rental housing to the usual owner-occupied residential base. Rental properties tend to bring their own pattern of plumbing calls — fixture wear from higher turnover, and repairs that a landlord wants handled quickly and correctly the first time rather than revisited.",
      },
      { type: "h2", text: "Common Calls in Booneville" },
      {
        type: "list",
        items: [
          "Fixture repair and replacement in rental properties near the college",
          "Commercial plumbing for downtown Booneville businesses",
          "Standard water heater and drain service across Booneville's residential neighborhoods",
        ],
      },
    ],
    faqs: [
      {
        q: "How far is Booneville from Tupelo?",
        a: "Roughly 24 miles north, past Baldwyn.",
      },
      {
        q: "Is Booneville part of the regular service area?",
        a: "Yes, as an extension of the Baldwyn corridor.",
      },
      {
        q: "Do you work on rental properties near the college?",
        a: "Yes — fixture repair and general plumbing service for rental properties is handled the same as owner-occupied homes.",
      },
      {
        q: "Is emergency plumbing available in Booneville?",
        a: "Yes.",
      },
      {
        q: "Is same-day service available in Booneville?",
        a: "Yes — same-day availability applies to routine repairs in Booneville, not just emergencies.",
      },
    ],
  },
  {
    slug: "plumber-mantachie-ms",
    tier: 2,
    name: "Mantachie",
    title: "Plumber in Mantachie, MS | Tupelo Plumber",
    h1: "Plumber in Mantachie, MS",
    metaDescription:
      "Plumbing repairs, drains & water heaters in Mantachie, MS — north of Fulton, on the eastern Tupelo service corridor.",
    distanceNote:
      "Mantachie is in Itawamba County, north of Fulton, continuing the eastern service corridor from Tupelo.",
    reasoning: "Mantachie extends the same Highway 78/Fulton corridor a bit further into Itawamba County.",
    neighborSlugs: ["plumber-fulton-ms", "plumber-mooreville-ms"],
    featuredServiceSlugs: ["water-filtration-tupelo-ms", "plumbing-repair-tupelo-ms", "water-heater-repair-tupelo-ms", "gas-line-services-tupelo-ms"],
    localBody: [
      {
        type: "p",
        text: "Mantachie is a smaller Itawamba County town that extends the same eastern corridor already served through Fulton — a mostly residential and rural community where well water is common outside the immediate town center, similar to the pattern seen in Mooreville further toward Tupelo.",
      },
      { type: "h2", text: "Common Calls in Mantachie" },
      {
        type: "list",
        items: [
          "Water filtration and treatment for well-supplied properties",
          "General household repair and water heater service",
          "Propane and gas line work for rural properties",
        ],
      },
    ],
    faqs: [
      {
        q: "How is Mantachie connected to the rest of the service area?",
        a: "It continues the same eastern corridor served through Fulton.",
      },
      {
        q: "Is Mantachie part of the regular service area?",
        a: "Yes, as an extension of the Fulton corridor.",
      },
      {
        q: "Do you handle well-water filtration issues in Mantachie?",
        a: "Yes — filtration and treatment for well-supplied properties is a regular part of service in this area.",
      },
      {
        q: "Is emergency plumbing available in Mantachie?",
        a: "Yes.",
      },
      {
        q: "Is same-day service available in Mantachie?",
        a: "Yes — same-day availability applies to routine repairs in Mantachie, not just emergencies.",
      },
    ],
  },
  {
    slug: "plumber-okolona-ms",
    tier: 2,
    name: "Okolona",
    title: "Plumber in Okolona, MS | Tupelo Plumber",
    h1: "Plumber in Okolona, MS",
    metaDescription:
      "Plumbing repairs, drains & water heaters in Okolona, MS — south of Shannon, on the southern US-45 corridor.",
    distanceNote: "Okolona is in Chickasaw County, south of Shannon, continuing the southern US-45 corridor.",
    reasoning:
      "Okolona extends the same US-45 corridor already covered through Verona and Shannon a bit further south.",
    neighborSlugs: ["plumber-shannon-ms"],
    featuredServiceSlugs: ["sewer-line-repair-tupelo-ms", "plumbing-repair-tupelo-ms", "water-heater-repair-tupelo-ms", "drain-cleaning-tupelo-ms"],
    localBody: [
      {
        type: "p",
        text: "Okolona sits in Mississippi's Black Prairie region, a stretch of the state known for dense clay soil that shifts noticeably between wet and dry seasons. That kind of ground movement puts real, ongoing stress on buried sewer and water lines — it's a big part of why an older Okolona home can develop a line issue that seemed to come from nowhere, when it was actually years of gradual soil movement at work.",
      },
      { type: "h2", text: "Common Calls in Okolona" },
      {
        type: "list",
        items: [
          "Sewer line inspection and repair, with soil movement in this part of the county a real contributing factor",
          "Standard residential repair and water heater service",
          "Drain clearing for older homes in Okolona's established neighborhoods",
        ],
      },
    ],
    faqs: [
      {
        q: "How is Okolona connected to the rest of the service area?",
        a: "It continues the same southern corridor served through Verona and Shannon.",
      },
      {
        q: "Is Okolona part of the regular service area?",
        a: "Yes, as an extension of the Shannon corridor.",
      },
      {
        q: "Why do sewer line problems seem common in this part of the county?",
        a: "The Black Prairie clay soil common in this area shifts with wet and dry seasons, which puts gradual stress on buried pipe over the years — a sewer camera inspection is the clearest way to see exactly what's going on if you're having recurring issues.",
      },
      {
        q: "Is emergency plumbing available in Okolona?",
        a: "Yes.",
      },
      {
        q: "Is same-day service available in Okolona?",
        a: "Yes — same-day availability applies to routine repairs in Okolona, not just emergencies.",
      },
    ],
  },
  {
    slug: "plumber-belden-ms",
    tier: 2,
    name: "Belden",
    title: "Plumber in Belden, MS | Tupelo Plumber",
    h1: "Plumber in Belden, MS",
    metaDescription: "Plumbing repairs, drains & water heaters in Belden, MS — immediately adjacent to Tupelo.",
    distanceNote: "Belden sits immediately adjacent to Tupelo.",
    reasoning:
      "Given the proximity, Belden functions as an extension of Tupelo service rather than a distinct outlying market.",
    neighborSlugs: ["plumber-verona-ms"],
    brief: true,
    faqs: [
      {
        q: "Is Belden treated separately from Tupelo for service purposes?",
        a: "Not meaningfully — given the proximity, service works the same as it does in Tupelo itself.",
      },
      { q: "Is emergency plumbing available in Belden?", a: "Yes." },
      {
        q: "Is same-day service available in Belden?",
        a: "Yes — same-day availability applies to routine repairs in Belden, not just emergencies.",
      },
      {
        q: "Do you handle both emergency and routine plumbing in Belden?",
        a: "Yes — the full range, from scheduled repairs to 24/7 emergency response, is available in Belden.",
      },
    ],
  },
  {
    slug: "plumber-plantersville-ms",
    tier: 2,
    name: "Plantersville",
    title: "Plumber in Plantersville, MS | Tupelo Plumber",
    h1: "Plumber in Plantersville, MS",
    metaDescription:
      "Plumbing repairs, drains & water heaters in Plantersville, MS — on the corridor connecting to Verona.",
    distanceNote: "Plantersville is southwest of Tupelo, near the same corridor that connects to Verona.",
    reasoning: "Plantersville is covered as part of the same nearby corridor connecting to Verona.",
    neighborSlugs: ["plumber-verona-ms"],
    brief: true,
    faqs: [
      {
        q: "Is Plantersville treated separately from Tupelo/Verona for service purposes?",
        a: "Not meaningfully — it's covered as part of the same nearby corridor.",
      },
      { q: "Is emergency plumbing available in Plantersville?", a: "Yes." },
      {
        q: "Is same-day service available in Plantersville?",
        a: "Yes — same-day availability applies to routine repairs in Plantersville, not just emergencies.",
      },
      {
        q: "Do you handle both emergency and routine plumbing in Plantersville?",
        a: "Yes — the full range, from scheduled repairs to 24/7 emergency response, is available in Plantersville.",
      },
    ],
  },
];

export const extendedCommunities: { name: string; county?: string }[] = [
  { name: "Alpine", county: "Union County" },
  { name: "Algoma", county: "Pontotoc County" },
  { name: "Ballardsville" },
  { name: "Barrett Ridge" },
  { name: "Blue Springs", county: "Union County" },
  { name: "Carolina" },
  { name: "Chestersville" },
  { name: "Eggville" },
  { name: "Endville" },
  { name: "Mt. Vernon" },
  { name: "Sherman" },
  { name: "Troy" },
  { name: "Richmond" },
  { name: "Brewer" },
  { name: "Pumpkin Center" },
  { name: "Ingomar" },
  { name: "Ecru" },
  { name: "Friendship" },
  { name: "New Houlka" },
  { name: "Pine Grove" },
  { name: "Hatley" },
  { name: "Turon" },
  { name: "Marietta" },
  { name: "Kirkville", county: "Itawamba County" },
  { name: "Fairview" },
];