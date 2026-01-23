
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
    ctaUrl: 'mailto:dobsonheadlights@gmail.com',
    ctaText: 'Email for Quote',
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
    ctaUrl: 'mailto:dobsonheadlights@gmail.com',
    ctaText: 'Email for Quote',
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
    ctaUrl: 'mailto:dobsonheadlights@gmail.com',
    ctaText: 'Email for Quote',
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
    question: "What are your business hours?",
    answer: "We are available for inquiries from 8:00 AM to 9:00 PM, Monday through Saturday. We can often accommodate early morning or late evening bookings to fit your work schedule."
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes! We offer a re-do warranty. If your headlights show signs of oxidation or fading within the protection period of your chosen package, we will come back and restore them again at no additional cost to you."
  },
  {
    question: "How long does the restoration take?",
    answer: "Most restorations take between 60 to 90 minutes. We have a comfortable waiting area, or you can drop off your vehicle and we'll text you when it's done."
  },
  {
    question: "Do I need to be present during the service?",
    answer: "Not necessarily! As long as we have access to your vehicle and a power outlet nearby, we can complete the restoration and send you a link for easy digital payment."
  },
  {
    question: "Will the process damage my car's paint?",
    answer: "Absolutely not. We use professional-grade automotive masking tape to protect all surrounding paint and trim before we begin the sanding and polishing process."
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
