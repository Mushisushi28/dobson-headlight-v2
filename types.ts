
export interface ChatAction {
  label: string;
  type: 'link' | 'scroll' | 'text';
  value: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  actions?: ChatAction[];
}

export interface ServicePackage {
  id: string;
  name: string;
  priceRange: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaUrl?: string;
  ctaText?: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  avatar: string;
}
