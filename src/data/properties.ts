import { Property } from '../types';
import officeWorkspaceImg from '../assets/images/office_workspace_interior_1791023148822.jpg';
import deepakBuildingImg from '../assets/images/deepak_building_complex_1791023160902.jpg';
import conferenceRoomImg from '../assets/images/conference_boardroom_1791023172876.jpg';
import propertyFacadeImg from '../assets/images/property_experience_facade_1791023185075.jpg';

export const PROPERTIES: Property[] = [
  {
    id: 'prop-office-1',
    title: 'Commercial Office Space',
    category: 'office',
    categoryLabel: 'Office Space',
    location: 'Nehru Place, New Delhi',
    shortDescription: 'Well-appointed commercial office layout designed for business operations, tech firms, and professional practices seeking a reputable corporate address.',
    image: officeWorkspaceImg,
    altText: 'Modern commercial office interior with executive workspaces in Nehru Place, New Delhi',
    highlights: [
      'Prime business hub positioning in Nehru Place',
      'Naturally lit floor plan with executive work zones',
      'Proximity to major corporate centers and banking institutions',
      'Convenient multi-line Delhi Metro connectivity'
    ]
  },
  {
    id: 'prop-commercial-2',
    title: 'Commercial Property & Office Setup',
    category: 'commercial',
    categoryLabel: 'Commercial Property',
    location: 'Nehru Place, New Delhi',
    shortDescription: 'Prominently located commercial property offering excellent accessibility, high business visibility, and proximity to major commercial complexes.',
    image: deepakBuildingImg,
    altText: 'Commercial building entrance and corporate complex in Nehru Place, New Delhi',
    highlights: [
      'High business footfall and established corporate neighborhood',
      'Walking distance from Deepak Building & trade plazas',
      'Accessible building lobbies and commercial elevators',
      'Suited for consultancy, IT firms, and trade offices'
    ]
  },
  {
    id: 'prop-corporate-3',
    title: 'Executive Corporate Space',
    category: 'rental',
    categoryLabel: 'Rental Property',
    location: 'Nehru Place, New Delhi',
    shortDescription: 'Turnkey commercial space tailored for administrative operations, team collaboration, and client executive meetings in South Delhi.',
    image: conferenceRoomImg,
    altText: 'Executive conference room and boardroom setup in a Delhi commercial building',
    highlights: [
      'Executive conference and presentation capabilities',
      'Centralized location with direct access to South Delhi arteries',
      'Suitable for mid-to-large business teams and client meetings',
      'Professional corporate environment'
    ]
  },
  {
    id: 'prop-business-4',
    title: 'Commercial Business Unit',
    category: 'purchase',
    categoryLabel: 'Purchase / Investment',
    location: 'Nehru Place, New Delhi',
    shortDescription: 'Contemporary commercial premise with direct transit links, vibrant commercial infrastructure, and long-term business potential.',
    image: propertyFacadeImg,
    altText: 'Contemporary commercial building exterior in Nehru Place business district',
    highlights: [
      'Direct arterial connectivity to Outer Ring Road and Metro',
      'Located in Delhi’s premier commercial and electronics district',
      'Strategic asset for owner-occupants and corporate entities',
      'Clean title verification and guided advisory support'
    ]
  }
];
