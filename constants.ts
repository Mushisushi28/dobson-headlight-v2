
import { ServicePackage, Review } from './types';

export const PACKAGES: ServicePackage[] = [
  {
    id: 'standard',
    name: 'Standard Restoration',
    priceRange: '$99+',
    description: 'Professional multi-step process for common oxidation.',
    features: [
      'Multi-step oxidation leveling',
      'Precision machine polishing',
      'Industrial UV Top Coat',
      '1-Year Clarity Warranty',
      'Heated Shop Service'
    ]
  },
  {
    id: 'premium',
    name: 'Premium + Ceramic',
    priceRange: '$169+',
    popular: true,
    description: 'Maximum durability for long-term Southern Alberta sun.',
    features: [
      'Everything in Standard',
      'Ceramic Pro 9H Coating',
      'Fog light treatment included',
      '5-Year Clarity Warranty',
      'Highest UV resistance possible'
    ]
  },
  {
    id: 'new-light',
    name: 'New Light Protection',
    priceRange: 'Custom Quote',
    description: 'Industrial Ceramic for factory-new headlights to prevent yellowing.',
    features: [
      'Industrial Ceramic Coating',
      'Decontamination wash',
      'Lifetime Clarity Warranty',
      'Preserves factory clear coat',
      'Stops oxidation before it starts'
    ]
  }
];

export const FLEET_PACKAGES: ServicePackage[] = [
  {
    id: 'fleet-maintenance',
    name: 'Fleet Maintenance',
    priceRange: '$79+',
    description: 'Volume-based regular maintenance for active service vehicles.',
    ctaText: 'Request Fleet Quote',
    features: [
      'Volume Discount (5+ Vehicles)',
      'On-Site Service Available',
      'Annual Maintenance Schedule',
      'DOT Compliance Check',
      'Priority Booking'
    ]
  },
  {
    id: 'commercial-heavy',
    name: 'Heavy Duty / Semi',
    priceRange: '$149+',
    popular: true,
    description: 'Specialized restoration for large surface area truck lenses.',
    ctaText: 'Request Fleet Quote',
    features: [
      'Heavy Duty UV Protection',
      'Deep Oxidation Removal',
      'Stone Chip Smoothing',
      'Minimized Downtime Service',
      'Full Clarity Guarantee'
    ]
  },
  {
    id: 'dealership',
    name: 'Dealership Partner',
    priceRange: 'Wholesale',
    description: 'Maximize resale value for pre-owned inventory.',
    ctaText: 'Request Fleet Quote',
    features: [
      'Wholesale Partner Pricing',
      'Same-Day Turnaround',
      'Inventory Assessment',
      'Billing Accounts Available',
      'Before/After Documentation'
    ]
  }
];

export const FAQS = [
  {
    question: "How much does headlight restoration cost in Lethbridge?",
    answer: "Headlight restoration in Lethbridge starts at $99 CAD for our Standard Package, which includes multi-step oxidation removal, machine polishing, and an industrial UV top coat with 1–2 year durability. Our Premium Package with Ceramic Pro 9H coating starts at $169 CAD and provides 5+ year protection. New light protection for factory-new headlights is available by custom quote. All work comes with a re-do warranty — no results, no pay."
  },
  {
    question: "Is headlight restoration worth it compared to replacement?",
    answer: "Absolutely. Headlight restoration at Dobson costs $99–$169 compared to $200–$1,500+ per assembly for dealer replacement. Yellowed or foggy headlights can reduce your light output by up to 80%, which is both a safety issue and a vehicle inspection risk in Alberta. We restore your lenses to factory clarity in 60–90 minutes, and our results are backed by a re-do warranty. For the vast majority of vehicles, restoration is the smart choice."
  },
  {
    question: "Can cloudy headlights fail a vehicle inspection in Alberta?",
    answer: "Yes. Under Alberta's Vehicle Inspection Program, headlights must meet minimum brightness and beam-alignment standards. Severely yellowed or foggy headlights reduce light output and can cause an inspection failure. Having your headlights professionally restored before an inspection is a straightforward, affordable fix — and our guarantee means you pay nothing if we don't get results."
  },
  {
    question: "Do you offer mobile headlight restoration in Lethbridge?",
    answer: "Yes — we come to you. Dobson Headlight Restoration offers mobile service across Lethbridge and all of Southern Alberta including Taber, Cardston, Raymond, Coaldale, Fort Macleod, and Magrath. During winter months, we work from our heated shop. Your presence is not required — we handle everything and send you a digital payment link when done."
  },
  {
    question: "How long does headlight restoration last?",
    answer: "Our Standard restoration lasts 1–2 years. Our Premium restoration with Ceramic Pro 9H coating lasts 5+ years. Both packages are protected by our re-do warranty — if oxidation returns early, we come back and fix it for free. Results depend on sun exposure, weather, and storage, but our ceramic coating is the most durable option available for Southern Alberta's harsh UV and temperature conditions."
  },
  {
    question: "What is the difference between standard and ceramic headlight restoration?",
    answer: "The Standard Package ($99+) removes oxidation and applies an industrial UV top coat for 1–2 years of protection. The Premium Package ($169+) does everything in the Standard plus applies Ceramic Pro 9H — an industrial-grade ceramic coating that bonds to the lens and provides 5+ years of UV and debris protection. The Premium also includes fog light treatment. If you want maximum longevity, ceramic is the clear choice."
  },
  {
    question: "What areas in Southern Alberta do you serve?",
    answer: "We serve Lethbridge, Taber, Cardston, Raymond, Coaldale, Coalhurst, Fort Macleod, Magrath, and surrounding Southern Alberta communities. If you're not sure whether we reach your area, call or text us at 587-402-4794 and we'll confirm availability. Mobile service is available year-round (weather permitting in winter)."
  },
  {
    question: "What causes headlights to yellow and become foggy?",
    answer: "Headlight lenses are made from polycarbonate plastic, which degrades under UV radiation from the sun. Over time, the factory UV coating wears off, causing oxidation — the yellowing, hazing, or cloudy appearance you see. Alberta's intense summer sun and extreme temperature swings accelerate this process. Road debris and chemical exposure also contribute. Once oxidation starts, it progressively worsens and cannot be reversed by cleaning alone — professional restoration is required."
  },
  {
    question: "Do you restore headlights in winter in Alberta?",
    answer: "Yes. We operate year-round from our heated shop during the winter months. Cold temperatures actually make the polishing process more controlled and consistent. We do not offer outdoor mobile service in freezing conditions, but shop drop-off is always available. Book online or text 587-402-4794 to check current availability."
  },
  {
    question: "What are your business hours?",
    answer: "We are available Monday through Saturday, 8:00 AM to 9:00 PM. Early morning and late evening appointments are available on request to fit around your work schedule. Text 587-402-4794 for the fastest response."
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes — we offer a re-do warranty on all packages. If your headlights show oxidation or fading within the protection period of your chosen package (1–2 years Standard, 5+ years Premium), we come back and restore them again at no charge. We also guarantee results upfront — if we can't restore your headlights to a satisfactory level, you don't pay."
  },
  {
    question: "Will the process damage my car's paint?",
    answer: "Not at all. We use professional-grade automotive masking tape to fully protect all surrounding paint, trim, and rubber seals before we begin. Our process is safe for all vehicle types including new cars, luxury vehicles, and trucks. Over 47 five-star Google reviews confirm the quality of our work."
  }
];

export const SERVICE_AREAS = [
  'Cardston', 'Lethbridge', 'Raymond', 'Glenwood', 'Magrath',
  'Coaldale', 'Coalhurst', 'Fort Macleod', 'Taber'
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Jake M. (Lethbridge)",
    rating: 5,
    comment: "Dobson saved me hundreds. My 2014 truck headlights were yellow and useless at night. Now they look factory new.",
    avatar: "https://picsum.photos/seed/truck/100/100"
  },
  {
    id: 2,
    author: "Sarah W. (Cardston)",
    rating: 5,
    comment: "Super convenient! They came to my office and finished while I worked. Extremely professional.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    id: 3,
    author: "Robert T. (Raymond)",
    rating: 5,
    comment: "I was skeptical of restoration until I saw their process. This isn't a cheap kit, it's a professional job.",
    avatar: "https://picsum.photos/seed/robert/100/100"
  }
];
