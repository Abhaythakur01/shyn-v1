import { ArtForm, Expert, MembershipPlan, BlogPost, Testimonial, FaqItem, VideoStat, Like, ImprovementTip, UserProfileStats } from '../types';


export const artForms: ArtForm[] = [
 
  {
    id: 'stand-up-comedy',
    name: 'Stand-up Comedy',
    description: 'Master the art of timing, wit, and public speaking to make audiences laugh.',
    image: 'https://images.pexels.com/photos/2691463/pexels-photo-2691463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'from-orange-500 to-amber-500',
    gradient: 'bg-gradient-to-br from-orange-500/20 to-amber-500/20'
  },
  {
    id: 'poetry',
    name: 'Poetry',
    description: 'Weave words into powerful verses that evoke emotion and tell a story.',
    image: 'https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'from-blue-500 to-cyan-500',
    gradient: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 'storytelling',
    name: 'Storytelling',
    description: 'Captivate listeners with compelling narratives, characters, and plot.',
    image: 'https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'from-yellow-600 to-lime-500',
    gradient: 'bg-gradient-to-br from-yellow-600/20 to-lime-500/20'
  },
  {
    id: 'singing',
    name: 'Singing',
    description: 'Train your voice to hit every note with passion and precision.',
    image: 'https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'from-rose-500 to-red-500',
    gradient: 'bg-gradient-to-br from-rose-500/20 to-red-500/20'
  },
  {
    id: 'dancing',
    name: 'Dancing',
    description: 'Express yourself through movement, rhythm, and grace.',
    image: 'https://images.pexels.com/photos/1700809/pexels-photo-1700809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'from-fuchsia-500 to-pink-500',
    gradient: 'bg-gradient-to-br from-fuchsia-500/20 to-pink-500/20'
  },
  {
    id: 'rap',
    name: 'Rap',
    description: 'Master flow, rhyme, and lyricism to become a powerful MC.',
    image: 'https://images.pexels.com/photos/8745919/pexels-photo-8745919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'from-gray-500 to-slate-500',
    gradient: 'bg-gradient-to-br from-gray-500/20 to-slate-500/20'
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

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'SHYN transformed my hobby into a passion. The one-on-one sessions with experts were a game-changer for my painting skills.',
    authorName: 'Jessica Miller',
    authorTitle: 'Abstract Artist',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '2',
    quote: 'The community here is incredibly supportive. I found collaborators for my new music project and got the confidence to perform live.',
    authorName: 'Michael Chen',
    authorTitle: 'Singer & Songwriter',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '3',
    quote: "I always wanted to try stand-up, but had no idea where to start. SHYN's structured courses gave me the tools and the stage time I needed.",
    authorName: 'Sarah Goldstein',
    authorTitle: 'Stand-up Comedian',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '4',
    quote: "The portfolio feature is amazing. It allowed me to create a professional-looking site to showcase my photography with just a few clicks.",
    authorName: 'David Lee',
    authorTitle: 'Photographer',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '5',
    quote: "The workshops are top-tier. Learning directly from industry leaders has given me insights I couldn't get anywhere else.",
    authorName: 'Maria Garcia',
    authorTitle: 'Digital Illustrator',
    avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '6',
    quote: "As a writer, the feedback from the community and mentors on my poetry has been invaluable. SHYN helped me find my voice.",
    authorName: 'Chris Evans',
    authorTitle: 'Poet & Writer',
    avatar: 'https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '7',
    quote: "From beat-making to lyricism, the rap course covered everything. The platform gave me the confidence to release my first EP.",
    authorName: 'Aisha Ahmed',
    authorTitle: 'Music Producer & MC',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export const faqItems: FaqItem[] = [
  {
    id: '1',
    question: "What if I'm a complete beginner?",
    answer: "SHYN is designed for all skill levels! Our basic courses are perfect for beginners, and our community and experts are here to guide you every step of the way. You'll never feel lost."
  },
  {
    id: '2',
    question: 'Can I cancel my membership anytime?',
    answer: 'Yes, absolutely. You can cancel your membership at any time directly from your account settings. There are no long-term contracts or hidden fees.'
  },
  {
    id: '3',
    question: 'How are the experts selected?',
    answer: 'Our experts are hand-picked based on their professional experience, teaching ability, and passion for their art form. Each one is a leader in their field, dedicated to helping you grow.'
  },
  {
    id: '4',
    question: 'What kind of support can I expect?',
    answer: "You'll have access to community forums, priority email support with our Mastermind plan, and direct 1-on-1 sessions with experts depending on your chosen membership level."
  }
];


// --- NEW MOCK DATA FOR STATISTICS ---

export const videoStats: VideoStat[] = [
  { videoId: '1', title: "My First Stand-up Set", views: 12500, likes: 850, comments: 120, averageWatchTime: "3:15" },
  { videoId: '2', title: "A Poem About a Cat", views: 8200, likes: 620, comments: 88, averageWatchTime: "1:55" },
  { videoId: '3', title: "How to Write a Killer Joke", views: 25000, likes: 1500, comments: 250, averageWatchTime: "5:30" },
  { videoId: '4', title: "My Latest Song Cover", views: 5300, likes: 410, comments: 65, averageWatchTime: "2:10" },
];

export const videoLikes: Like[] = [
    { userId: 'u1', userName: 'Alice', userAvatar: '/path/to/avatar1.png', videoId: '1' },
    { userId: 'u2', userName: 'Bob', userAvatar: '/path/to/avatar2.png', videoId: '3' },
    { userId: 'u3', userName: 'Charlie', userAvatar: '/path/to/avatar3.png', videoId: '1' },
    { userId: 'u4', userName: 'Diana', userAvatar: '/path/to/avatar4.png', videoId: '2' },
];

export const improvementTips: ImprovementTip[] = [
    { id: 't1', title: "Make Thumbnails Pop", description: "Use high-contrast colors and clear, bold text to grab attention.", category: 'Thumbnails' },
    { id: 't2', title: "Write Intriguing Titles", description: "Ask a question or create a curiosity gap in your titles to encourage clicks.", category: 'Titles' },
    { id: 't3', title: "Engage in the Comments", description: "Reply to comments within the first few hours to boost engagement and community.", category: 'Engagement' },
    { id: 't4', title: "Analyze Your Watch Time", description: "Check your analytics to see where viewers drop off and adjust your content to keep them hooked.", category: 'Content' },
];

// --- NEW MOCK DATA FOR USER PROFILE ---

export const userProfileStats: UserProfileStats = {
  followers: 1500, // Change this number to test different levels! (e.g., 50, 500, 1500)
  following: 120,
  totalViews: 150000,
  totalLikes: 8200,
};
