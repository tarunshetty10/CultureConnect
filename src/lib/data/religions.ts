import type { Religion } from '@/lib/types';

export const religions: Religion[] = [
  {
    id: '1',
    name: 'Hinduism',
    slug: 'hinduism',
    summary: 'An ancient religion from India, characterized by a diversity of beliefs and practices.',
    description: 'Hinduism is one of the oldest living religions in the world, with roots going back thousands of years. For many people in India and Nepal, it is not just a religion but a way of life that guides daily habits, values, traditions, and celebrations. Hinduism teaches ideas like dharma (duty and righteousness), karma (actions and their consequences), and moksha (spiritual freedom). It encourages living a life of truth, compassion, respect, and harmony with nature. There are many gods and goddesses in Hinduism, each representing different qualities of life and the universe. The three main deities, often called the Trimurti, are Brahma – the creator, Vishnu – the protector, and Shiva – the transformer. Hinduism’s sacred texts include the Vedas, Upanishads, Puranas, the epic stories Ramayana and Mahabharata, and the spiritual guide Bhagavad Gita, which teaches important life lessons about duty, devotion, and self-realization.',
    heroImageId: 'hindu-hero',
    traditions: [
      { 
        id: 't1', 
        name: 'Yoga', 
        description: 'Yoga began in ancient India and is much more than physical exercise. It is a practice that connects the body, mind, and soul. It includes physical postures (asanas), breathing techniques (pranayama), and meditation and mindfulness. The goal of yoga is inner peace, balance, and spiritual growth.' 
      },
      { 
        id: 't2', 
        name: 'Aarti', 
        description: 'Aarti is a beautiful and devotional ritual performed during worship (puja). In this ceremony, a small lamp made with ghee (clarified butter) or oil is lit and gently moved in circular motions before a deity. It symbolizes removing darkness, inviting positivity, and offering gratitude and devotion. Aarti is often accompanied by singing hymns and ringing bells, creating a peaceful and uplifting atmosphere.' 
      },
    ],
    festivals: [
      { 
        id: 'f1', 
        name: 'Diwali', 
        description: 'Diwali is known as the Festival of Lights. It celebrates the victory of light over darkness, good over evil, and knowledge over ignorance. People celebrate by lighting oil lamps (diyas), decorating homes with rangoli, sharing sweets, and praying for prosperity and happiness. It is a time of joy, family bonding, and new beginnings.' 
      },
      { 
        id: 'f2', 
        name: 'Holi', 
        description: 'Holi is the vibrant Festival of Colors. It marks the arrival of spring and celebrates the triumph of good over evil. During Holi, people throw colored powders (gulal), dance and sing, enjoy festive foods, and forgive and forget past misunderstandings. It’s a celebration of happiness, unity, and fresh beginnings.' 
      },
    ],
    rituals: [
      { 
        id: 'r1', 
        name: 'Puja', 
        description: 'Puja is a daily or special worship ritual where devotees offer prayers, flowers, incense, food, and light to one or more deities. It is a way to express gratitude, seek blessings, and connect spiritually. Puja can be performed at home or in temples and can be simple or elaborate depending on the occasion.' 
      }
    ],
    activities: [
      { 
        id: 'p1', 
        name: 'Ganesh Pooja', 
        description: 'A prayer dedicated to Lord Ganesha, the remover of obstacles, often performed before new beginnings.', 
        imageId: 'ganesh-pooja' 
      },
      { 
        id: 'p2', 
        name: 'Lakshmi Pooja', 
        description: 'A ritual dedicated to the Goddess Lakshmi to invite wealth, prosperity, and light into the home.', 
        imageId: 'lakshmi-pooja' 
      },
      { 
        id: 'p3', 
        name: 'Satyanarayan Pooja', 
        description: 'A sacred ritual dedicated to Lord Vishnu, typically performed on full moon days for overall well-being.', 
        imageId: 'satyanarayan-pooja' 
      },
    ],
  },
  {
    id: '2',
    name: 'Islam',
    slug: 'islam',
    summary: 'A monotheistic religion teaching that there is only one God (Allah) and that Muhammad is a messenger of God.',
    description: 'Islam is an Abrahamic monotheistic religion centered on the Quran, a religious text that adherents believe is the verbatim word of God. It is the world\'s second-largest religion, with over 1.8 billion followers. Muslims believe that God is one and incomparable and that the purpose of existence is to worship God.',
    heroImageId: 'muslim-hero',
    traditions: [
      { id: 't3', name: 'Calligraphy', description: 'A highly respected art form in Islamic culture, used to write the verses of the Quran in a beautiful and artistic way.' },
      { id: 't4', name: 'Geometric Patterns', description: 'Used in the art and architecture of Islamic countries, these intricate patterns symbolize the infinite nature of God.' },
    ],
    festivals: [
      { id: 'f3', name: 'Eid al-Fitr', description: 'Marks the end of Ramadan, the Islamic holy month of fasting. It is a time of celebration and feasting.' },
      { id: 'f4', name: 'Eid al-Adha', description: 'The "Festival of the Sacrifice", it honors the willingness of Ibrahim (Abraham) to sacrifice his son as an act of obedience to God\'s command.' },
    ],
    rituals: [
        { id: 'r2', name: 'Salat', description: 'The ritual prayer of Muslims, performed five times daily in a set form.' }
    ],
    activities: [
      {
        id: 'i1',
        name: 'Nikah Service',
        description: 'A sacred Islamic wedding ceremony performed with tradition and legal witnesses.',
        imageId: 'islam-nikah'
      },
      {
        id: 'i2',
        name: 'Aqiqah Ceremony',
        description: 'The Islamic tradition of shaving a baby\'s head and performing a sacrifice to welcome a newborn.',
        imageId: 'islam-aqiqah'
      }
    ]
  },
  {
    id: '3',
    name: 'Christianity',
    slug: 'christianity',
    summary: 'A monotheistic religion based on the life and teachings of Jesus of Nazareth.',
    description: 'Christianity is the world\'s largest religion, with over 2.4 billion followers. Christians believe that Jesus is the Son of God and the savior of humanity whose coming as the messiah was prophesied in the Old Testament. The life, teachings, death, and resurrection of Jesus are chronicled in the New Testament.',
    heroImageId: 'christian-hero',
    traditions: [
      { id: 't5', name: 'Stained Glass Art', description: 'Used in churches to depict biblical stories and saints, creating a spiritual ambiance with light.' },
      { id: 't6', name: 'Gospel Music', description: 'A genre of Christian music, characterized by dominant vocals and strong use of harmony with Christian lyrics.' },
    ],
    festivals: [
      { id: 'f5', name: 'Christmas', description: 'An annual festival commemorating the birth of Jesus Christ, observed primarily on December 25th.' },
      { id: 'f6', name: 'Easter', description: 'A festival and holiday celebrating the resurrection of Jesus from the dead, described in the New Testament.' },
    ],
    rituals: [
        { id: 'r3', name: 'Baptism', description: 'A Christian rite of admission and adoption, almost invariably with the use of water, into Christianity.' }
    ],
    activities: [
      {
        id: 'c1',
        name: 'Holy Baptism',
        description: 'A sacred sacrament of admission into the Christian faith using water and prayer.',
        imageId: 'christian-baptism'
      },
      {
        id: 'c2',
        name: 'Wedding Ceremony',
        description: 'Celebrate the union of two souls in a traditional church wedding ceremony.',
        imageId: 'christian-wedding'
      }
    ]
  },
  {
    id: '4',
    name: 'Sikhism',
    slug: 'sikhism',
    summary: 'A monotheistic religion that originated in the Punjab region of the Indian subcontinent.',
    description: 'Sikhism was founded in the 15th century by Guru Nanak and is based on his teachings, and those of the nine Sikh gurus who followed him. The holy scripture Guru Granth Sahib is the ultimate spiritual authority for Sikhs. The core beliefs include faith in one God, equality of all humankind, and selfless service.',
    heroImageId: 'sikh-hero',
    traditions: [
      { id: 't7', name: 'Langar', description: 'The community kitchen in a Gurdwara where a free meal is served to all the visitors, without distinction of religion, caste, gender, economic status or ethnicity.' },
      { id: 't8', name: 'Kirtan', description: 'The singing of hymns from the Guru Granth Sahib, the holy scripture of the Sikhs.' },
    ],
    festivals: [
      { id: 'f7', name: 'Vaisakhi', description: 'The festival which celebrates the founding of the Sikh community as the Khalsa and the beginning of the Sikh new year.' },
      { id: 'f8', name: 'Gurpurab', description: 'Celebrations that mark the anniversary of the birth or martyrdom of a Sikh Guru.' },
    ],
    rituals: [
        { id: 'r4', name: 'Amrit Sanchar', description: 'The Sikh ceremony of initiation or baptism. It is a sacred and significant event in a Sikh\'s life.' }
    ],
    activities: [
      {
        id: 's1',
        name: 'Anand Karaj',
        description: 'The traditional Sikh wedding ceremony, focusing on spiritual union and joy.',
        imageId: 'sikh-wedding'
      },
      {
        id: 's2',
        name: 'Akhand Path',
        description: 'The continuous reading of the Guru Granth Sahib for spiritual growth and blessings.',
        imageId: 'sikh-reading'
      },
      {
        id: 's3',
        name: 'Ardas Prayer',
        description: 'A deeply spiritual prayer of petition and thanksgiving performed in the Sikh tradition.',
        imageId: 'sikh-ardas'
      }
    ]
  },
];