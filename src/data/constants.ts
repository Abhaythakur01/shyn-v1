import { ArtForm, Expert, MembershipPlan, BlogPost } from '../types';

export const artForms: ArtForm[] = [
  {
    id: 'painting',
    name: 'Painting',
    description: 'Express your emotions through colors and brush strokes',
    image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-red-400 to-pink-500',
    gradient: 'bg-gradient-to-br from-red-400/20 to-pink-500/20'
  },
  {
    id: 'sculpture',
    name: 'Sculpture',
    description: 'Shape your vision into three-dimensional reality',
    image: 'https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-stone-400 to-gray-600',
    gradient: 'bg-gradient-to-br from-stone-400/20 to-gray-600/20'
  },
  {
    id: 'music',
    name: 'Music',
    description: 'Create harmony and rhythm that touches souls',
    image: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-purple-400 to-indigo-500',
    gradient: 'bg-gradient-to-br from-purple-400/20 to-indigo-500/20'
  },
  {
    id: 'dance',
    name: 'Dance',
    description: 'Move your body to express the language of emotion',
    image: 'https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-amber-400 to-orange-500',
    gradient: 'bg-gradient-to-br from-amber-400/20 to-orange-500/20'
  },
  {
    id: 'writing',
    name: 'Writing',
    description: 'Craft stories and poetry that inspire and transform',
    image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-emerald-400 to-teal-500',
    gradient: 'bg-gradient-to-br from-emerald-400/20 to-teal-500/20'
  },
  {
    id: 'photography',
    name: 'Photography',
    description: 'Capture moments and freeze beauty in time',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-sky-400 to-blue-500',
    gradient: 'bg-gradient-to-br from-sky-400/20 to-blue-500/20'
  }
];

export const experts: Expert[] = [
  {
    id: '1',
    name: 'Elena Rodriguez',
    specialty: 'Abstract Painting',
    bio: 'Award-winning abstract painter with 15+ years of experience teaching color theory and composition.',
    image: 'https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=400',
    experience: '15+ years',
    rating: 4.9
  },
  {
    id: '2',
    name: 'Marcus Chen',
    specialty: 'Digital Photography',
    bio: 'Professional photographer specializing in portrait and landscape photography techniques.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    experience: '12+ years',
    rating: 4.8
  },
  {
    id: '3',
    name: 'Sofia Williams',
    specialty: 'Contemporary Dance',
    bio: 'Former principal dancer turned instructor, passionate about movement and expression.',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
    experience: '10+ years',
    rating: 4.9
  },
  {
    id: '4',
    name: 'David Kumar',
    specialty: 'Creative Writing',
    bio: 'Published author and writing coach helping artists find their unique voice.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    experience: '8+ years',
    rating: 4.7
  }
];

export const membershipPlans: MembershipPlan[] = [
  {
    id: 'explorer',
    name: 'Explorer',
    price: 29,
    features: [
      'Access to basic courses',
      'Community forums',
      'Monthly challenges',
      'Basic portfolio features'
    ]
  },
  {
    id: 'mastermind',
    name: 'Mastermind',
    price: 79,
    recommended: true,
    features: [
      'All Explorer features',
      'Premium courses & workshops',
      '1-on-1 expert sessions',
      'Advanced portfolio tools',
      'Priority support',
      'Exclusive masterclasses'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 149,
    features: [
      'All Mastermind features',
      'Unlimited expert consultations',
      'Professional portfolio review',
      'Exhibition opportunities',
      'Marketing & business guidance',
      'Revenue sharing program'
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Finding Your Artistic Voice: A Journey of Self-Discovery',
    excerpt: 'Every artist has a unique voice waiting to be discovered. Learn how to uncover and develop your distinctive artistic style.',
    image: 'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Sarah Mitchell',
    date: '2024-01-15',
    readTime: '8 min read'
  },
  {
    id: '2',
    title: 'The Psychology of Color in Visual Arts',
    excerpt: 'Explore how different colors evoke emotions and learn to use color psychology to enhance your artistic expression.',
    image: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Dr. James Wilson',
    date: '2024-01-12',
    readTime: '6 min read'
  },
  {
    id: '3',
    title: 'Building a Sustainable Creative Practice',
    excerpt: 'Discover strategies for maintaining consistency and growth in your artistic journey while balancing creativity with life.',
    image: 'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Maria Garcia',
    date: '2024-01-10',
    readTime: '10 min read'
  }
];