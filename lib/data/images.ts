// All images are local .webp files under app/images/services/, imported
// statically so Next.js automatically derives width/height at build time
// (this is what actually prevents layout shift — no manual dimensions to
// keep in sync). Filenames match each page's slug, which doubles as a
// filename-level SEO signal (descriptive, hyphenated, keyword-relevant).
//
// Alt text pattern: [what the photo actually shows] + [service] + [Tupelo, MS].
// IMPORTANT: the alt text below is a strong starting template built from the
// service each image illustrates — once real photos are in place, each alt
// string should be checked against what is actually visible in that specific
// photo (a truck vs. a close-up repair vs. a finished install look different)
// and adjusted to describe the real content. Alt text that doesn't match the
// image hurts accessibility and image-search relevance the same way a
// mismatched stock photo did.

import type { StaticImageData } from "next/image";

import heroImage from "../../app/hero.png";
import emergencyPlumbing from "../../app/images/services/emergency-plumbing-tupelo-ms.webp";
import plumbingRepair from "../../app/images/services/plumbing-repair-tupelo-ms.webp";
import drainCleaning from "../../app/images/services/drain-cleaning-tupelo-ms.webp";
import repiping from "../../app/images/services/repiping-tupelo-ms.webp";
import waterHeaterRepair from "../../app/images/services/water-heater-repair-tupelo-ms.webp";
import waterHeaterInstallation from "../../app/images/services/water-heater-installation-tupelo-ms.webp";
import tanklessWaterHeaters from "../../app/images/services/tankless-water-heaters-tupelo-ms.webp";
import leakDetection from "../../app/images/services/leak-detection-tupelo-ms.webp";
import slabLeakRepair from "../../app/images/services/slab-leak-repair-tupelo-ms.webp";
import sewerLineRepair from "../../app/images/services/sewer-line-repair-tupelo-ms.webp";
import waterLineServices from "../../app/images/services/water-line-services-tupelo-ms.webp";
import waterFiltration from "../../app/images/services/water-filtration-tupelo-ms.webp";
import backflowPrevention from "../../app/images/services/backflow-prevention-tupelo-ms.webp";
import sumpPump from "../../app/images/services/sump-pump-tupelo-ms.webp";
import gasLineServices from "../../app/images/services/gas-line-services-tupelo-ms.webp";
import fixturePlumbing from "../../app/images/services/fixture-plumbing-tupelo-ms.webp";
import residentialPlumbing from "../../app/images/services/residential-plumbing-tupelo-ms.webp";
import commercialPlumbing from "../../app/images/services/commercial-plumbing-tupelo-ms.webp";
import aboutImage from "../../app/images/services/about.webp";
// add near the other imports
import hydroJetting from "../../app/images/services/hydro-jetting-tupelo-ms.webp";
import newConstructionRemodeling from "../../app/images/services/new-construction-remodeling-plumbing-tupelo-ms.webp";
import sewerCameraInspection from "../../app/images/services/sewer-camera-inspection-tupelo-ms.webp";
import waterPressure from "../../app/images/services/water-pressure-tupelo-ms.webp";
export type SiteImage = { url: StaticImageData; alt: string };

export const images: Record<string, SiteImage> = {
  hero: {
    url: heroImage,
    alt: "Licensed plumber providing residential and commercial plumbing service in Tupelo, MS",
  },
  "emergency-plumbing-tupelo-ms": {
    url: emergencyPlumbing,
    alt: "Plumber responding to a 24/7 emergency plumbing call in Tupelo, MS",
  },
  "plumbing-repair-tupelo-ms": {
    url: plumbingRepair,
    alt: "Plumber performing a standard plumbing repair in a Tupelo, MS home",
  },
  "drain-cleaning-tupelo-ms": {
    url: drainCleaning,
    alt: "Plumber clearing a clogged drain during a drain cleaning service in Tupelo, MS",
  },
  "repiping-tupelo-ms": {
    url: repiping,
    alt: "Plumber installing new supply piping during a whole-house repiping job in Tupelo, MS",
  },
  "water-heater-repair-tupelo-ms": {
    url: waterHeaterRepair,
    alt: "Plumber repairing a residential water heater in Tupelo, MS",
  },
  "water-heater-installation-tupelo-ms": {
    url: waterHeaterInstallation,
    alt: "Plumber installing a new water heater in a Tupelo, MS home",
  },
  "tankless-water-heaters-tupelo-ms": {
    url: tanklessWaterHeaters,
    alt: "Plumber servicing a tankless water heater unit in Tupelo, MS",
  },
  "leak-detection-tupelo-ms": {
    url: leakDetection,
    alt: "Plumber using leak detection equipment to locate a hidden water leak in Tupelo, MS",
  },
  "slab-leak-repair-tupelo-ms": {
    url: slabLeakRepair,
    alt: "Plumber diagnosing a slab leak beneath a concrete foundation in Tupelo, MS",
  },
  "sewer-line-repair-tupelo-ms": {
    url: sewerLineRepair,
    alt: "Plumber repairing a main sewer line in Tupelo, MS",
  },
  "water-line-services-tupelo-ms": {
    url: waterLineServices,
    alt: "Plumber working on an underground water line in Tupelo, MS",
  },
  "water-filtration-tupelo-ms": {
    url: waterFiltration,
    alt: "Whole-house water filtration system installed by a Tupelo, MS plumber",
  },
  "backflow-prevention-tupelo-ms": {
    url: backflowPrevention,
    alt: "Plumber testing a backflow prevention device in Tupelo, MS",
  },
  "sump-pump-tupelo-ms": {
    url: sumpPump,
    alt: "Plumber installing a sump pump in a Tupelo, MS basement or crawl space",
  },
  "gas-line-services-tupelo-ms": {
    url: gasLineServices,
    alt: "Plumber installing a gas line connection in Tupelo, MS",
  },
  "fixture-plumbing-tupelo-ms": {
    url: fixturePlumbing,
    alt: "Plumber repairing a faucet fixture in a Tupelo, MS home",
  },
  "residential-plumbing-tupelo-ms": {
    url: residentialPlumbing,
    alt: "Plumber performing residential plumbing service in a Tupelo, MS home",
  },
  "commercial-plumbing-tupelo-ms": {
    url: commercialPlumbing,
    alt: "Plumber servicing commercial plumbing at a Tupelo, MS business",
  },
  about: {
    url: aboutImage,
    alt: "Tupelo Plumber team member performing plumbing work in Tupelo, MS",
  },
  // add these 4 entries inside the `images` object, anywhere in the list
"hydro-jetting-tupelo-ms": {
  url: hydroJetting,
  alt: "Plumber performing hydro jetting drain cleaning in Tupelo, MS",
},
"new-construction-remodeling-plumbing-tupelo-ms": {
  url: newConstructionRemodeling,
  alt: "Plumber installing plumbing for new construction or a remodel in Tupelo, MS",
},
"sewer-camera-inspection-tupelo-ms": {
  url: sewerCameraInspection,
  alt: "Plumber performing a sewer camera inspection in Tupelo, MS",
},
"water-pressure-tupelo-ms": {
  url: waterPressure,
  alt: "Plumber diagnosing low water pressure in a Tupelo, MS home",
},
};