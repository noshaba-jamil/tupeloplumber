// All images below are from Pexels (images.pexels.com), licensed under the
// Pexels License: free for commercial use, no attribution required.
// https://www.pexels.com/license/
//
// Each entry's `source` is the original Pexels photo page — kept here for
// provenance/record-keeping, not because attribution is legally required.
// Alt text describes what is actually visible, plus the service the image
// illustrates. None of these are labeled as "our team" or "our work"; they're
// generic, professional stock photography used to illustrate each service.
//
// Exception: `hero` uses a local image (app/hero.png) instead of Pexels.

import type { StaticImageData } from "next/image";
import heroImage from "../../app/hero.png";

export type SiteImage = { url: string | StaticImageData; alt: string; source?: string };

function pexels(id: number, alt: string): SiteImage {
  return {
    url: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`,
    alt,
    source: `https://www.pexels.com/photo/${id}/`,
  };
}

export const images: Record<string, SiteImage> = {
  hero: {
    url: heroImage,
    alt: "Plumber providing residential and commercial plumbing service in Tupelo, MS",
  },
  "emergency-plumbing-tupelo-ms": pexels(32588548, "Plumber repairing a pipe with a wrench — emergency plumbing service"),
  "plumbing-repair-tupelo-ms": pexels(34927382, "Worker concentrating on a hands-on repair — everyday plumbing repair"),
  "drain-cleaning-tupelo-ms": pexels(16509869, "Worker using a wrench on pipes — drain cleaning and clog repair"),
  "repiping-tupelo-ms": pexels(6419128, "Plumber installing pipe fittings — repiping and pipe replacement"),
  "water-heater-repair-tupelo-ms": pexels(7859953, "Hands adjusting a boiler system's controls — water heater repair"),
  "water-heater-installation-tupelo-ms": pexels(33388391, "Technician working on equipment in a workshop — water heater installation"),
  "tankless-water-heaters-tupelo-ms": pexels(32588556, "Technician working in a workshop — tankless water heater service"),
  "leak-detection-tupelo-ms": pexels(35072812, "Close-up of hands repairing equipment — leak detection and repair"),
  "slab-leak-repair-tupelo-ms": pexels(32208781, "Technician doing maintenance on machinery — slab leak repair"),
  "sewer-line-repair-tupelo-ms": pexels(32588559, "Repairman working on pipework — sewer line repair"),
  "water-line-services-tupelo-ms": pexels(12142829, "Gray metal pipes connected along a wall — water line services"),
  "water-filtration-tupelo-ms": pexels(1029635, "Water filter system with pipes and equipment — water filtration"),
  "backflow-prevention-tupelo-ms": pexels(29248902, "Industrial pipes with colored valves — backflow prevention"),
  "sump-pump-tupelo-ms": pexels(35290675, "Technician working on a water pump — sump pump repair"),
  "gas-line-services-tupelo-ms": pexels(27354192, "Worker welding steel pipe in safety gear — gas line work"),
  "fixture-plumbing-tupelo-ms": pexels(8488058, "Plumber's wrench resting on a wooden surface — fixture plumbing"),
  "residential-plumbing-tupelo-ms": pexels(8486975, "Plumber in protective gear ready for work indoors — residential plumbing"),
  "commercial-plumbing-tupelo-ms": pexels(33388390, "Technician repairing equipment in a workshop — commercial plumbing"),
  about: pexels(8486978, "Plumber in safety gear holding a wrench"),
};