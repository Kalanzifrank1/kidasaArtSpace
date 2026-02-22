export interface Artwork {
  id: string;
  title: string;
  artistId: string;
  medium: string;
  dimensions: string;
  image: string;
  inspiration: string;
  story: string;
}

export interface Artist {
  id: string;
  name: string;
  portrait: string;
  bio: string;
  statement: string;
  studioImage: string;
}

export interface Exhibition {
  id: string;
  title: string;
  type: 'Current' | 'Past' | 'Future';
  date: string;
  curatorialNote: string;
  image: string;
}

export const artists: Artist[] = [
  {
    id: 'elara-vance',
    name: 'Elara Vance',
    portrait: 'https://picsum.photos/seed/elara/600/800',
    studioImage: 'https://picsum.photos/seed/studio/1200/800',
    bio: 'Elara Vance is a contemporary painter whose work explores the intersection of memory and landscape. Born in the coastal town of St. Ives, her early exposure to the dramatic shifts of light over the Atlantic Ocean became the foundation of her artistic inquiry. For over two decades, she has refined a technique that layers translucent glazes to evoke the feeling of a place rather than its literal representation.',
    statement: 'My work is an attempt to capture the ephemeral. I am less interested in the mountain itself than in the way the mist clings to its side for a fleeting second before vanishing. Each brushstroke is a meditation on transience, a way to hold onto a moment that is already slipping away.'
  }
];

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Whispers of the Tide',
    artistId: 'elara-vance',
    medium: 'Oil and Beeswax on Linen',
    dimensions: '48 x 60 inches',
    image: 'https://picsum.photos/seed/art1/1200/1600',
    inspiration: 'The sound of retreating waves on a pebbled beach at dusk.',
    story: 'This piece was born from a winter residency in a remote lighthouse. I spent fourteen days without speaking to another human soul, listening only to the rhythmic pull of the tide. "Whispers of the Tide" represents the internal dialogue that emerges in profound silence. The beeswax adds a physical depth, trapping light within the layers much like the ocean traps secrets in its depths.'
  },
  {
    id: '2',
    title: 'Ethereal Dawn',
    artistId: 'elara-vance',
    medium: 'Acrylic and Mixed Media',
    dimensions: '36 x 36 inches',
    image: 'https://picsum.photos/seed/art2/1200/1200',
    inspiration: 'The first light breaking through a dense forest canopy.',
    story: 'I remember waking up at 4 AM to hike to the summit of Mount Rainier. The way the light filtered through the ancient pines was almost religious. This painting is my attempt to translate that spiritual awe into color and form.'
  },
  {
    id: '3',
    title: 'Fragmented Memory',
    artistId: 'elara-vance',
    medium: 'Oil on Canvas',
    dimensions: '24 x 30 inches',
    image: 'https://picsum.photos/seed/art3/800/1000',
    inspiration: 'A half-remembered dream of a childhood garden.',
    story: 'Memory is never a complete picture; it is a collection of fragments. Here, I used aggressive palette knife work to suggest the sharp edges of a memory, while the blurred backgrounds represent the parts that have faded over time.'
  },
  {
    id: '4',
    title: 'The Silent Watcher',
    artistId: 'elara-vance',
    medium: 'Charcoal and Graphite',
    dimensions: '20 x 24 inches',
    image: 'https://picsum.photos/seed/art4/800/1000',
    inspiration: 'A solitary oak tree standing in a field of snow.',
    story: 'There is a dignity in endurance. This tree has stood for two hundred years, weathering storms and seasons. It reminded me of my grandfather, a man of few words but immense strength.'
  }
];

export const exhibitions: Exhibition[] = [
  {
    id: 'light-shadow-2024',
    title: 'Light & Shadow: The 2024 Collection',
    type: 'Current',
    date: 'March 1 - May 15, 2024',
    curatorialNote: 'This exhibition brings together works that challenge our perception of contrast. In a world that often demands binary choices, these artists find beauty in the gray areas, the transitions, and the subtle interplay between what is seen and what is hidden.',
    image: 'https://picsum.photos/seed/exh1/1600/900'
  },
  {
    id: 'past-echoes',
    title: 'Echoes of the Renaissance',
    type: 'Past',
    date: 'Nov 2023 - Jan 2024',
    curatorialNote: 'A retrospective look at how classical techniques continue to inform modern abstraction. We explored the lineage of light from Caravaggio to the present day.',
    image: 'https://picsum.photos/seed/exh2/1600/900'
  },
  {
    id: 'future-horizons',
    title: 'Digital Horizons',
    type: 'Future',
    date: 'Coming June 2024',
    curatorialNote: 'Our first foray into generative art and its relationship with physical space. This show will feature interactive installations that respond to the viewer\'s presence.',
    image: 'https://picsum.photos/seed/exh3/1600/900'
  }
];
