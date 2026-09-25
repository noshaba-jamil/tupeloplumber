// All images below are from Pexels (images.pexels.com), licensed under the
// Pexels License: free for commercial use, no attribution required.
// https://www.pexels.com/license/
//
// Each entry's `source` is the original Pexels photo page — kept here for
// provenance/record-keeping, not because attribution is legally required.
// Alt text describes what is actually visible, per the site's own image rules —
// none of these are labeled as "our team" or "our work"; they're generic,
// professional stock photography used to illustrate each service.

export type SiteImage = { url: string; alt: string; source: string };

function pexels(id: number, alt: string): SiteImage {
  return {
    url: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`,
    alt,
    source: `https://www.pexels.com/photo/${id}/`,
  };
}

export const images: Record<string, SiteImage> = {
  hero: pexels(29226620, "Plumber installing a radiator pipe with specialized tools"),
  "emergency-plumbing-tupelo-ms": pexels(32588548, "Plumber working on a pipe repair with a wrench"),
  "plumbing-repair-tupelo-ms": pexels(34927382, "Worker focused on a repair in a workshop setting"),
  "drain-cleaning-tupelo-ms": pexels(16509869, "Worker using a wrench on pipes in an indoor setting"),
  "repiping-tupelo-ms": pexels(6419128, "Plumber installing pipe fittings"),
  "water-heater-repair-tupelo-ms": pexels(7859953, "Hands adjusting a boiler system with precise instrumentation"),
  "water-heater-installation-tupelo-ms": pexels(33388391, "Technician repairing machinery in a workshop setting"),
  "tankless-water-heaters-tupelo-ms": pexels(32588556, "Technician working in a workshop setting"),
  "leak-detection-tupelo-ms": pexels(35072812, "Close-up of hands repairing mechanical equipment"),
  "slab-leak-repair-tupelo-ms": pexels(32208781, "Technician working on machinery maintenance"),
  "sewer-line-repair-tupelo-ms": pexels(32588559, "Repairman working on pipework in a workshop setting"),
  "water-line-services-tupelo-ms": pexels(12142829, "Interconnected gray metal pipes on a wall"),
  "water-filtration-tupelo-ms": pexels(1029635, "A water filter system with pipes and machinery"),
  "backflow-prevention-tupelo-ms": pexels(29248902, "Industrial pipes with colorful valves against a wall"),
  "sump-pump-tupelo-ms": pexels(35290675, "Technician working with a water pump"),
  "gas-line-services-tupelo-ms": pexels(27354192, "Worker welding steel pipes, showcasing safety gear"),
  "fixture-plumbing-tupelo-ms": pexels(8488058, "Close-up of a plumber's wrench on a wooden surface"),
  "residential-plumbing-tupelo-ms": pexels(8486975, "Plumber wearing protective gear, ready for work indoors"),
  "commercial-plumbing-tupelo-ms": pexels(33388390, "Technician repairing equipment in a workshop setting"),
  about: pexels(8486978, "Plumber in safety gear holding a wrench"),
};
