/**
 * Extended details for activities (photos gallery, YouTube video, how it's done).
 * Keyed by activity id from religions data.
 */
export interface ActivityDetail {
  activityId: string;
  galleryImageIds: string[];
  youtubeVideoId?: string;
  howItsDone: string[];
}

export const activityDetails: Record<string, ActivityDetail> = {
  p1: {
    activityId: 'p1',
    galleryImageIds: ['ganesh-example-1', 'ganesh-example-2', 'ganesh-example-3'],
    youtubeVideoId: 'XRxUDL5QXPo', // "How to perform Ganesh Chaturthi Puja at home?"
    howItsDone: [
      'Ganesh Pooja is performed to invoke Lord Ganesha, the remover of obstacles and god of wisdom. It is commonly done before starting new ventures, during Ganesh Chaturthi, or on special occasions.',
      'The pooja typically begins with a sankalpa (resolution) and the establishment of the Ganesha idol or image in the worship area. A clean, elevated platform is prepared with a clean cloth.',
      'The idol is bathed with Panchamrita (five nectars: milk, yoghurt, honey, ghee, sugar) and water. Then it is dressed with a sacred thread (yajnopavita) and adorned with flowers and sandalwood paste.',
      'Offerings include modak (Lord Ganesha’s favourite sweet), fruits, coconut, betel leaves, and incense. The main mantras recited are the Ganesh Mantra and the Ganesh Atharvashirsha.',
      'Aarti is performed with a lamp, and the pooja concludes with a final prayer seeking blessings for success and the removal of obstacles.',
    ],
  },
  p2: {
    activityId: 'p2',
    galleryImageIds: ['lakshmi-example-1', 'lakshmi-example-2', 'lakshmi-example-3'],
    youtubeVideoId: 'DRuuFxgWMM8', // Updated Lakshmi Pooja tutorial video
    howItsDone: [
      'Lakshmi Pooja is performed to invoke Goddess Lakshmi, the deity of wealth, prosperity, and fortune. It is especially popular during Diwali and on Fridays, which are considered auspicious for Lakshmi worship.',
      'The pooja begins with cleaning and decorating the puja area. A kalash (sacred pot) filled with water, mango leaves, and a coconut is placed. The Lakshmi idol or image is positioned on a red cloth, symbolizing prosperity.',
      'The goddess is offered a sacred bath (abhishekam) with water, milk, honey, and rose water. She is then adorned with fresh flowers, especially lotus flowers, and sandalwood paste. A red saree or cloth is offered to the deity.',
      'Traditional offerings include sweets (especially kheer or payasam), fruits, betel leaves, turmeric, kumkum, and coins. The Lakshmi Mantra, particularly the "Om Shreem Mahalakshmiyei Namaha" mantra, is chanted 108 times.',
      'Aarti is performed with a ghee lamp, and the pooja concludes with prayers for wealth, prosperity, and the well-being of the family. Devotees often light diyas (oil lamps) to welcome the goddess into their homes.',
    ],
  },
  p3: {
    activityId: 'p3',
    galleryImageIds: ['satyanarayan-example-1', 'satyanarayan-example-2', 'satyanarayan-example-3'],
    youtubeVideoId: 'lA_2wy0Sxmc', // Updated Satyanarayan Pooja tutorial video
    howItsDone: [
      'Satyanarayan Pooja is a sacred ritual dedicated to Lord Vishnu in his form as Satyanarayan, the embodiment of truth. It is typically performed on full moon days (Purnima) and is believed to bring peace, prosperity, and fulfillment of wishes.',
      'The pooja setup includes a kalash with water, mango leaves, and coconut. The Satyanarayan idol or image is placed on a yellow cloth. Panchamrita (five nectars) and holy water from the Ganges are kept ready for the abhishekam.',
      'The pooja begins with Ganesh Pooja, followed by the invocation of Lord Satyanarayan. The deity is bathed with Panchamrita, water, and milk. Then, the idol is adorned with fresh flowers, sandalwood paste, and a yellow dhoti.',
      'The Satyanarayan Katha (story) is narrated during the pooja, which includes the reading of the Satyanarayan Vrat Katha. This story emphasizes the importance of truth and devotion. Offerings include fruits, sweets (especially panchamrit), tulsi leaves, and prasad.',
      'The pooja concludes with the distribution of prasad to all attendees. Devotees perform aarti and seek blessings for happiness, prosperity, and the removal of obstacles. It is customary to perform this pooja with family members and share the prasad.',
    ],
  },
  i1: {
    activityId: 'i1',
    galleryImageIds: ['islam-nikah'],
    howItsDone: [
      'Nikah is the Islamic marriage ceremony, a sacred contract between a bride and groom. It is performed in the presence of witnesses and an Islamic officiant (Qazi or Imam). The ceremony can be held at a mosque, community center, or at home.',
      'The ceremony begins with the recitation of the Khutbah (sermon) by the officiant, which includes verses from the Quran about marriage. The bride and groom, along with their guardians (Wali), are present. The groom must have two male Muslim witnesses.',
      'The officiant asks the bride and groom separately if they consent to the marriage. The bride gives her consent (Ijab) and the groom accepts (Qubul). This verbal contract is essential for the Nikah to be valid. The Mahr (dowry) is announced, which is a gift from the groom to the bride.',
      'The marriage contract is signed by the bride, groom, witnesses, and officiant. Verses from the Quran are recited, particularly Surah An-Nisa and Surah Ar-Rum, which speak about marriage and relationships. Duas (supplications) are made for the couple\'s happiness and prosperity.',
      'The ceremony concludes with prayers (Duas) for the couple\'s blessed union, happiness, and a righteous life together. Family and friends offer congratulations, and a feast (Walima) may follow to celebrate the marriage.',
    ],
  },
  i2: {
    activityId: 'i2',
    galleryImageIds: ['islam-aqiqah', 'aqiqah-example-2', 'aqiqah-example-3'],
    howItsDone: [
      'Aqiqah is an Islamic tradition performed to celebrate the birth of a child. It involves the sacrifice of an animal (sheep or goat) and the shaving of the baby\'s head. This ceremony is typically performed on the seventh day after birth, though it can be done later.',
      'The ceremony begins with the shaving of the baby\'s head. The hair is weighed, and its equivalent weight in silver or gold is given as charity (Sadaqah). This act symbolizes purification and the removal of impurities. The baby is given a good name, often chosen from Islamic names with positive meanings.',
      'An animal is sacrificed - two sheep or goats for a boy, and one for a girl. The animal must be healthy and meet Islamic dietary requirements (Halal). The sacrifice is performed by a qualified person who recites "Bismillah" (In the name of Allah) before the sacrifice.',
      'The meat from the sacrifice is divided into three parts: one-third for the family, one-third for relatives and friends, and one-third for the poor and needy. This distribution emphasizes sharing blessings and caring for the community. The meat is cooked and shared in a communal meal.',
      'Prayers and supplications are made for the child\'s health, protection, and righteous upbringing. The ceremony concludes with family and friends gathering to celebrate the new addition to the family, often with a feast where the sacrificed meat is served.',
    ],
  },
  c1: {
    activityId: 'c1',
    galleryImageIds: ['christian-baptism', 'baptism-example-2', 'baptism-example-3'],
    youtubeVideoId: 'aDUQXGG6w20', // Holy Baptism ceremony tutorial video
    howItsDone: [
      'Holy Baptism is one of the seven sacraments in Christianity, marking a person\'s initiation into the Christian faith. It is typically performed in a church by a priest or minister, though it can be done in other settings. The ceremony symbolizes the washing away of sin and rebirth in Christ.',
      'The ceremony begins with prayers and readings from the Bible, often including passages about baptism such as Matthew 28:19 ("Go and make disciples of all nations, baptizing them...") and Romans 6:3-4. The candidate (or their parents/guardians for infant baptism) makes declarations of faith and renounces sin.',
      'The priest or minister performs the baptism using water - either by immersion (fully submerging the person), affusion (pouring water over the head), or aspersion (sprinkling water). The water is blessed and consecrated before use. The minister says, "I baptize you in the name of the Father, and of the Son, and of the Holy Spirit."',
      'After the baptism, the newly baptized person is anointed with chrism (holy oil) in some traditions, signifying the gift of the Holy Spirit. A baptismal candle is lit from the Paschal candle, symbolizing Christ as the light of the world. The person receives a white garment, representing purity and new life in Christ.',
      'The ceremony concludes with prayers for the newly baptized, welcoming them into the Christian community. Family and friends gather to celebrate, and a certificate of baptism is often presented. The baptized person is now considered a member of the Church and can participate in other sacraments.',
    ],
  },
  c2: {
    activityId: 'c2',
    galleryImageIds: ['christian-wedding', 'christian-wedding-2', 'christian-wedding-3'],
    youtubeVideoId: 'lqgHmCq_rCg', // Christian wedding ceremony tutorial video
    howItsDone: [
      'A Christian wedding ceremony is a sacred union between two people, performed in the presence of God, family, and friends. The ceremony typically takes place in a church, though it can be held in other venues. It follows traditional Christian rites and includes vows, prayers, and blessings.',
      'The ceremony begins with the processional, where the wedding party enters the church. The bride is escorted down the aisle, often by her father or both parents. The groom waits at the altar with the officiant (priest or minister). The congregation stands as the bride enters, and music is played.',
      'The officiant welcomes everyone and offers an opening prayer. Scripture readings are shared, often including passages about love and marriage such as 1 Corinthians 13, Ephesians 5:22-33, or the Song of Solomon. A sermon or homily is delivered, focusing on the meaning of Christian marriage as a covenant.',
      'The couple exchanges vows, promising to love, honor, and cherish each other for life. Rings are exchanged as symbols of their commitment. The officiant blesses the rings and the couple. In some traditions, the couple lights a unity candle, symbolizing their two lives becoming one.',
      'The ceremony concludes with a final blessing and prayer. The officiant pronounces the couple as husband and wife, and they share their first kiss as a married couple. The recessional follows, with the newlyweds leading the way out of the church. A reception typically follows to celebrate the union.',
    ],
  },
  s1: {
    activityId: 's1',
    galleryImageIds: ['sikh-wedding'],
    youtubeVideoId: 'eWIdXSSq5KY', // Anand Karaj guide
    howItsDone: [
      'Anand Karaj is the sacred Sikh wedding ceremony, which translates to "Joyful Union". It is performed in the presence of the Guru Granth Sahib (the holy scripture) and emphasizes the spiritual union of two souls.',
      'The ceremony begins with "Milni", where the families of the bride and groom meet and exchange garlands and gifts outside the Gurdwara.',
      'The main ritual is the "Laavan", where the couple walks around the Guru Granth Sahib four times while specific hymns are recited. Each circle (Lavan) represents a stage of spiritual growth and commitment.',
      'The ceremony includes Ardas (prayer) and the distribution of Karah Prasad (blessed sweet offering) to all attendees.',
      'The wedding concludes with a communal meal (Langar), emphasizing equality and community.',
    ],
  },
  s2: {
    activityId: 's2',
    galleryImageIds: ['sikh-reading'],
    youtubeVideoId: 'qnJqulOBIlA', // Updated Akhand Path guide
    howItsDone: [
      'Akhand Path is the continuous and uninterrupted reading of the entire Guru Granth Sahib from beginning to end. It usually takes about 48 hours.',
      'It is often performed on special occasions such as weddings, birthdays, anniversaries, or to seek blessings during difficult times.',
      'The reading is done by a team of readers (Granthis) who take turns to ensure there is no break in the recitation.',
      'During the Akhand Path, the atmosphere is one of deep devotion and meditation. Devotees often sit in the presence of the holy scripture to listen and reflect.',
      'The ceremony concludes with a Bhog (completion ceremony), followed by Ardas and the distribution of Karah Prasad.',
    ],
  },
  s3: {
    activityId: 's3',
    galleryImageIds: ['sikh-ardas'],
    youtubeVideoId: 'qdd2CpkRh9E', // Ardas prayer guide
    howItsDone: [
      'Ardas is a formal Sikh prayer that is recited at the beginning or end of any significant task, ceremony, or congregational gathering. It is an act of standing before God in humility and petition.',
      'The congregation stands with hands folded in prayer (Anjali mudra) facing the Guru Granth Sahib.',
      'The Ardas recounts the history of the Sikh Gurus, the sacrifices of the martyrs, and seeks blessings for all of humanity.',
      'It is a way for Sikhs to connect with their heritage and seek divine guidance and strength for daily life.',
      'The prayer concludes with a final bowing (Namskar) and the distribution of Karah Prasad, signifying the acceptance of God\'s grace.',
    ],
  },
};
