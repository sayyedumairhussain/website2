export interface Property {
  id: string;
  title: string;
  category: 'office' | 'commercial' | 'rental' | 'purchase';
  categoryLabel: string;
  location: string;
  shortDescription: string;
  image: string;
  altText: string;
  highlights: string[];
}

export interface Review {
  quote: string;
  author: string;
  rating: number;
}

export interface RequirementFormData {
  name: string;
  phone: string;
  email: string;
  businessName?: string;
  propertyType: string;
  locationPreference: string;
  requirementDetails?: string;
}
