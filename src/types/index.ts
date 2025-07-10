export interface User {
  id: string;
  email: string;
  created_at: string;
}

export interface ArtForm {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
  gradient: string;
}

export interface Expert {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  experience: string;
  rating: number;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
}

// --- UPDATED: Added optional properties ---
export interface ArtFormContent {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
  introduction: {
    title: string;
    body1: string;
    body2: string;
  };
  featuredWorkshop: {
    title: string;
    videoPlaceholder: {
      image: string;
      alt: string;
    };
    description: string;
  };
  whatYouWillLearn: string[];
  courseInfo: {
    students: string;
    modules: string;
    certification: string;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink?: string; // Optional link for the button
  };
  customSections?: { // Optional array for custom content
    title: string;
    content: string;
  }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
