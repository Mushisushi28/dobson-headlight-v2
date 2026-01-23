
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
      'Industrial UV top coat', 
      '1-2 Year Clarity Protection',
      'Mobile service included'
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
      'Upgraded Ceramic Protection', 
      'Fog light treatment included', 
      '5+ Year Clarity Guarantee',
      'Highest UV resistance'
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
      '5-8 Years of EXTRA clarity', 
      'Preserve factory clear coat', 
      'Stops oxidation before it starts'
    ]
  }
];

export const FAQS = [
  {
    question: "What are your business hours?",
    answer: "We are available for mobile service and inquiries from 8:00 AM to 9:00 PM, Monday through Saturday. We can often accommodate early morning or late evening bookings to fit your work schedule."
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes! We offer a re-do warranty. If your headlights show signs of oxidation or fading within the protection period of your chosen package, we will come back and restore them again at no additional cost to you."
  },
  {
    question: "How long does the restoration take?",
    answer: "Most restorations take between 60 to 90 minutes. Since we are mobile, you can stay in the comfort of your home or continue working while we handle the job."
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
