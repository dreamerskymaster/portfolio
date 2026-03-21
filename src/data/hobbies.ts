export interface Hobby {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  media: {
    type: 'image' | 'video';
    src: string;
    alt: string;
    caption?: string;
  }[];
  highlights: string[];
  funFact: string;
}

export const hobbies: Hobby[] = [
  {
    id: 'travelling',
    name: 'Cultural Exploration & Travel',
    description: 'Exploring new places, cultures, and experiences around the world. From bustling cities to serene mountains, every journey teaches me something new and broadens my perspective on global manufacturing practices.',
    icon: 'plane',
    color: 'from-blue-500 to-purple-600',
    media: [
      { type: 'image', src: '/hobbies/IMG20240927181857.jpg', alt: 'Travel destination', caption: 'Beautiful sunset view' },
      { type: 'image', src: '/hobbies/IMG20241010181331.jpg', alt: 'Travel destination', caption: 'Mountain adventure' },
      { type: 'image', src: '/hobbies/IMG_9627.JPG', alt: 'Travel destination', caption: 'City exploration' },
      { type: 'image', src: '/hobbies/IMG_1651.JPG', alt: 'Travel destination', caption: 'Cultural experience' },
      { type: 'video', src: '/hobbies/IMG_1721.MOV', alt: 'Travel video', caption: 'Adventure moments' }
    ],
    highlights: [
      'Visited 15+ countries',
      'Documented 200+ travel moments',
      'Experienced diverse cultures',
      'Captured stunning landscapes'
    ],
    funFact: 'I once got lost in a foreign city and ended up discovering the best local restaurant!'
  },
  {
    id: 'cooking',
    name: 'Culinary Arts & Innovation',
    description: 'Creating delicious meals and experimenting with different cuisines. From traditional recipes to fusion experiments, cooking develops my creativity and attention to detail - skills that translate well to process optimization.',
    icon: 'utensils',
    color: 'from-orange-500 to-red-600',
    media: [
      { type: 'image', src: '/hobbies/IMG_2536.JPG', alt: 'Cooking creation', caption: 'Homemade pasta' },
      { type: 'image', src: '/hobbies/IMG_2537.JPG', alt: 'Cooking creation', caption: 'Dessert masterpiece' },
      { type: 'image', src: '/hobbies/IMG_2538.JPG', alt: 'Cooking creation', caption: 'Fusion experiment' },
      { type: 'image', src: '/hobbies/IMG_2914.JPG', alt: 'Cooking creation', caption: 'Traditional recipe' },
      { type: 'video', src: '/hobbies/IMG_0130.MOV', alt: 'Cooking process', caption: 'Cooking in action' }
    ],
    highlights: [
      'Mastered 50+ recipes',
      'Experimented with fusion cuisine',
      'Hosted dinner parties',
      'Learned from different cultures'
    ],
    funFact: 'My signature dish is a fusion of Italian and Indian flavors that took 3 months to perfect!'
  },
  {
    id: 'cuisine-exploration',
    name: 'Global Cuisine Discovery',
    description: 'Adventurous foodie exploring authentic flavors from around the world. Every new dish is a journey of taste and culture, teaching me about diverse approaches to problem-solving and innovation.',
    icon: 'utensils',
    color: 'from-green-500 to-teal-600',
    media: [
      { type: 'image', src: '/hobbies/Snapchat-1818034525.jpg', alt: 'Cuisine exploration', caption: 'Authentic street food' },
      { type: 'image', src: '/hobbies/Snapchat-186579657.jpg', alt: 'Cuisine exploration', caption: 'Exotic ingredients' },
      { type: 'image', src: '/hobbies/Snapchat-1952597326.jpg', alt: 'Cuisine exploration', caption: 'Local delicacy' },
      { type: 'image', src: '/hobbies/Snapchat-1972145851.jpg', alt: 'Cuisine exploration', caption: 'Traditional meal' },
      { type: 'video', src: '/hobbies/IMG_1304.MP4', alt: 'Food tasting video', caption: 'Tasting new flavors' }
    ],
    highlights: [
      'Tried 30+ different cuisines',
      'Visited authentic local restaurants',
      'Learned cooking techniques',
      'Documented food experiences'
    ],
    funFact: 'I once ate a dish so spicy that I had to learn the local language to ask for water!'
  },
  {
    id: 'biking',
    name: 'Cycling & Outdoor Fitness',
    description: 'Cycling through different terrains and exploring the world on two wheels. From city rides to mountain trails, biking keeps me active, builds endurance, and teaches me about sustainable transportation solutions.',
    icon: 'bike',
    color: 'from-yellow-500 to-orange-600',
    media: [
      { type: 'image', src: '/hobbies/CAB3B256-F15D-4059-AF1F-C3EEFF4E5A16.jpg', alt: 'Biking adventure', caption: 'Mountain trail ride' },
      { type: 'video', src: '/hobbies/IMG_2425.MP4', alt: 'Biking video', caption: 'Downhill adventure' },
      { type: 'video', src: '/hobbies/IMG_2431.MP4', alt: 'Biking video', caption: 'Scenic route' }
    ],
    highlights: [
      'Completed 1000+ km rides',
      'Explored mountain trails',
      'Joined cycling groups',
      'Maintained fitness routine'
    ],
    funFact: 'I once biked 50km uphill to reach a viewpoint that was totally worth the effort!'
  },
  {
    id: 'hiking',
    name: 'Mountain Hiking & Adventure',
    description: 'Conquering trails and reaching new heights. Hiking teaches me perseverance, strategic planning, and rewards me with breathtaking views and a sense of accomplishment that translates to tackling complex engineering challenges.',
    icon: 'mountain',
    color: 'from-emerald-500 to-green-600',
    media: [
      { type: 'image', src: '/hobbies/IMG_9627.JPG', alt: 'Hiking trail', caption: 'Mountain peak view' },
      { type: 'video', src: '/hobbies/IMG_2572.MP4', alt: 'Hiking video', caption: 'Trail adventure' },
      { type: 'video', src: '/hobbies/IMG_2639.MOV', alt: 'Hiking video', caption: 'Nature exploration' }
    ],
    highlights: [
      'Completed 20+ hiking trails',
      'Reached mountain summits',
      'Explored national parks',
      'Developed navigation skills'
    ],
    funFact: 'I once got caught in a sudden rainstorm during a hike and discovered a hidden waterfall!'
  },
  {
    id: 'music',
    name: 'Music Appreciation & Discovery',
    description: 'Music is my constant companion. From discovering new artists to attending concerts, music fuels my creativity, improves focus during complex problem-solving, and provides the perfect soundtrack to life.',
    icon: 'music',
    color: 'from-purple-500 to-pink-600',
    media: [
      { type: 'image', src: '/hobbies/Snapchat-662689688.jpg', alt: 'Music moment', caption: 'Concert experience' },
      { type: 'video', src: '/hobbies/IMG_2797.MP4', alt: 'Music video', caption: 'Live performance' },
      { type: 'video', src: '/hobbies/IMG_0195.MOV', alt: 'Music video', caption: 'Musical exploration' }
    ],
    highlights: [
      'Discovered 500+ new artists',
      'Attended 15+ concerts',
      'Created 50+ playlists',
      'Explored diverse genres'
    ],
    funFact: 'I have a playlist for every mood and situation - even one for debugging code!'
  },
  {
    id: 'tv-movies',
    name: 'Cinema & Storytelling Analysis',
    description: 'Entertainment enthusiast who loves diving deep into compelling stories. From analyzing cinematography to understanding narrative structures, I appreciate the art of storytelling and its parallels to user experience design.',
    icon: 'tv',
    color: 'from-indigo-500 to-purple-600',
    media: [
      { type: 'image', src: '/hobbies/IMG_2481.jpg', alt: 'Entertainment setup', caption: 'Series marathon' },
      { type: 'video', src: '/hobbies/IMG_2481.mov', alt: 'Entertainment video', caption: 'Cinema experience' },
      { type: 'video', src: '/hobbies/VID20250628163928.mp4', alt: 'Entertainment video', caption: 'Documentary watching' }
    ],
    highlights: [
      'Watched 200+ movies',
      'Completed 50+ TV series',
      'Explored various genres',
      'Analyzed storytelling techniques'
    ],
    funFact: 'I once watched an entire season in one day and then spent the next day analyzing the plot holes!'
  },
  {
    id: 'automotive',
    name: 'Automotive Repair & Upgrades',
    description: "There's something uniquely satisfying about the mechanical purity of an internal combustion engine. I spend my weekends maintaining, repairing, and upgrading my car, applying the same precision I use in industrial manufacturing to my own vehicle.",
    icon: 'wrench',
    color: 'from-slate-700 to-slate-900',
    media: [
      { type: 'image', src: '/hobbies/IMG_1963.JPG', alt: 'Car maintenance', caption: 'Weekend garage session' },
      { type: 'video', src: '/hobbies/IMG_0755.MP4', alt: 'Engine detail', caption: 'Diagnostic and tuning' }
    ],
    highlights: [
      'Engine diagnostic mastery',
      'Performance upgrades implementation',
      'Preventative maintenance specialist',
      'Suspension and brake tuning'
    ],
    funFact: "I once spent a whole weekend upgrading my car's suspension system just to feel the difference in a single corner!"
  }
];

export const getHobbyById = (id: string): Hobby | undefined => {
  return hobbies.find(hobby => hobby.id === id);
};

export const getRandomHobby = (): Hobby => {
  return hobbies[Math.floor(Math.random() * hobbies.length)];
};

export const getHobbiesByCategory = (category: string): Hobby[] => {
  return hobbies.filter(hobby => hobby.id.includes(category));
};
