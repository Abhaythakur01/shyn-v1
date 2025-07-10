import { ArtForm, Expert, MembershipPlan, BlogPost, Testimonial, FaqItem } from '../types';

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


export const legendaryComics: { id: string; name: string; style: string; image: string; bio: string; }[] = [
  {
    id: '1',
    name: 'George Carlin',
    style: 'Observational, Satire, Black Comedy',
    image: '/images/comics/george-carlin.jpeg',
    bio: `Born May 12, 1937 (New York), Carlin reshaped comedy by satirizing U.S. culture and language. Known for the iconic “Seven Dirty Words” routine, he won five Grammys and starred in specials like “Brain Droppings”. He was posthumously awarded the Mark Twain Prize and remains a cultural touchstone :contentReference[oaicite:4]{index=4}.`
  },
  {
    id: '2',
    name: 'Richard Pryor',
    style: 'Confessional, Observational, Improvisational',
    image: '/images/comics/richard-pryor.jpeg',
    bio: `Praised for his raw honesty, Pryor tackled race, addiction, and family—blending dark humor with vulnerability. A seven-time Grammy winner, his work in “Live in Concert” (1979) is considered groundbreaking in stand-up history.`
  },
  {
    id: '3',
    name: 'Dave Chappelle',
    style: 'Observational, Surreal, Satire',
    image: '/images/comics/dave-chappelle.jpeg',
    bio: `Chappelle gained fame with “Chappelle’s Show” (2003–2006), and his later Netflix specials—like “Sticks & Stones”—solidified his status as a fearless observer of race and society. Winner of multiple Emmys and a Peabody.`
  },
  {
    id: '4',
    name: 'Vir Das',
    style: 'Satire, Political, Observational',
    image: '/images/comics/vir-das.jpeg',
    bio: `Mumbai’s Vir Das rose from Indian comedy circuits to global stages with Netflix specials like “Abroad Understanding” (2017) and “For India” (2020). Known for blending sarcasm with socio-political commentary.`
  },
  {
    id: '5',
    name: 'Zakir Khan',
    style: 'Storytelling, Relatable, Anecdotal',
    image: '/images/comics/zakir-khan.jpeg',
    bio: `Born Aug 20, 1987 (Indore), Zakir became widely popular after winning Comedy Central India’s “India’s Best Stand Up” in 2012. Famous for his “Sakht Launda” persona, his Amazon Prime specials and performances at Royal Albert Hall and Madison Square Garden earned acclaim.`
  },
  {
    id: '6',
    name: 'Norm Macdonald',
    style: 'Anti-humor, Deadpan, Surreal',
    image: '/images/comics/norm-macdonald.jpeg',
    bio: `Known for dry wit and surreal jokes, Macdonald was a “Weekend Update” anchor on SNL and a respected stand-up with a cult following. His sharp delivery turned simple jokes into philosophical gems.`
  },
  {
    id: '7',
    name: 'Kenny Sebastian',
    style: 'Musical, Observational, Relatable',
    image: '/images/comics/kenny-sebastian.jpeg',
    bio: `A visual storyteller from Bangalore, Kenny mixes music and relatability in his stand-up and videos. His specials like “Don’t Be That Guy” and performances at major Indian festivals have made him a youth favorite.`
  },
  {
    id: '8',
    name: 'Biswa Kalyan Rath',
    style: 'Absurdist, Observational, Ranting Style',
    image: '/images/comics/biswa-kalyan-rath.jpeg',
    bio: `An IIT-Kharagpur graduate turned comedian, Biswa rose to fame from “Pretentious Movie Reviews” with Kanan Gill. His Amazon series “Laakhon Mein Ek” and special “Biswa Mast Aadmi” highlight his quirky wit.`
  },
  {
    id: '9',
    name: 'John Cleese',
    style: 'Satire, Physical, Sketch',
    image: '/images/comics/john-cleese.jpeg',
    bio: `Co-founder of Monty Python, Cleese revolutionized sketch comedy with “Flying Circus”. He also starred in hits like “Fawlty Towers” and lent his dry British wit to countless stage and screen productions.`
  },
  {
    id: '10',
    name: 'Robin Williams',
    style: 'Improv, Character, High-energy',
    image: '/images/comics/robin-williams.jpeg',
    bio: `Beloved for his manic improvisation, Williams won an Oscar (“Good Will Hunting”) and created iconic characters. His stand-up and film roles spanned tear-jerking drama to rapid-fire jokes.`
  },
  {
    id: '11',
    name: 'Ellen DeGeneres',
    style: 'Observational, Friendly, Optimistic',
    image: '/images/comics/ellen-degeneres.jpeg',
    bio: `With her clean, witty style, Ellen became a household name through “The Ellen Show” and later as a beloved daytime talk show host. She has won multiple Emmys and a Presidential Medal of Freedom.`
  },
  {
    id: '12',
    name: 'Trevor Noah',
    style: 'Satire, Political, Global',
    image: '/images/comics/trevor-noah.jpeg',
    bio: `Born 1984 (South Africa), Trevor brought global insight to “The Daily Show” (2015–2022). His stand-up and memoir recount life in apartheid South Africa with wit and humanity.`
  },
  {
    id: '13',
    name: 'Daniel Sloss',
    style: 'Dark, Storytelling, Surreal',
    image: '/images/comics/daniel-sloss.jpeg',
    bio: `Scottish comedian Daniel Sloss blends dark humor with personal storytelling. His specials “Jigsaw” and “Daniel Sloss: X” rank among the most-watched on Netflix, pushing boundaries with emotional honesty.`
  },
  {
    id: '14',
    name: 'Bill Burr',
    style: 'Rant, Observational, Satire',
    image: '/images/comics/bill-burr.jpeg',
    bio: `Known for unapologetic rants and sharp observations on society, Burr has top-rated Netflix specials like “Paper Tiger” and “Walk Your Way Out”. He’s also a successful podcaster and actor.`
  },
  {
    id: '15',
    name: 'Ali Wong',
    style: 'Confessional, Feminist, Storytelling',
    image: '/images/comics/ali-wong.jpeg',
    bio: `Ali Wong’s bold specials like “Baby Cobra” and “Hard Knock Wife” showcase her hilarious take on pregnancy, marriage, and motherhood—making her a breakthrough voice in modern stand‑up.`
  },
  {
    id: '16',
    name: 'Hannibal Buress',
    style: 'Low-key, Observational, Surreal',
    image: '/images/comics/hannibal-buress.jpeg',
    bio: `With a relaxed delivery and surreal wit, Buress gained fame from “Broad City” and viral bits like calling Bill Cosby out. He’s known for deadpan yet absurd humor.`
  },
  {
    id: '17',
    name: 'Hannah Gadsby',
    style: 'Narrative, Social Commentary, Emotional',
    image: '/images/comics/hannah-gadsby.jpeg',
    bio: `Gadsby shattered comedy norms with “Nanette,” a powerful blend of pain, identity, and humor. Her follow-up special “Douglas” continues the mix of heart and critique.`
  },
  {
    id: '18',
    name: 'Gabriel Iglesias',
    style: 'Storytelling, Wacky, Voice Impressions',
    image: '/images/comics/gabriel-iglesias.jpeg',
    bio: `“Fluffy” Iglesias is known for family-friendly, energetic performances filled with accents, sound effects, and relatable tales—earning him several Netflix specials and a huge fan base.`
  },
  {
    id: '19',
    name: 'Patton Oswalt',
    style: 'Nerd‑Culture, Observational, Storytelling',
    image: '/images/comics/patton-oswalt.jpeg',
    bio: `Star of “King of Queens” and hit specials like “Talking for Clapping,” Oswalt brings nerdy charm and sharp writing—blending pop culture, grief, and wit with real heart.`
  }

];