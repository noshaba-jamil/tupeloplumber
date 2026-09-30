// Single source of truth for business info.
// Every component/page must import from here — never hardcode NAP elsewhere.

export const SITE = {
  name: "Tupelo Plumber",
  domain: "plumberstupeloms.com",
  url: "https://www.plumberstupeloms.com",
  phoneDisplay: "(662) 370-8439",
  phoneTel: "+16623708439",
  email: "plumberstupeloms17@gmail.com",
  addressLine1: "1427 Cliff Gookin Blvd",
  addressCity: "Tupelo",
  addressState: "MS",
  addressZip: "38801",
  hoursLabel: "Open 24/7 — Emergency Service Available",
  is24_7: true,
  // Confirmed real business policies — only add fields here once verified true.
  hasNoCallOutFee: true,
  hasUpfrontPricing: true,
  answersAllCalls: true,
  emergencyArrivalMinutes: 60,
  hasSameDayService: true,
} as const;

export const fullAddress = `${SITE.addressLine1}, ${SITE.addressCity}, ${SITE.addressState} ${SITE.addressZip}`;