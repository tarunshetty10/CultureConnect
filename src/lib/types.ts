export interface Tradition {
  id: string;
  name: string;
  description: string;
}

export interface Festival {
  id: string;
  name: string;
  description: string;
}

export interface Ritual {
  id: string;
  name: string;
  description: string;
}

export interface Pooja {
  id: string;
  name: string;
  description: string;
  imageId: string;
}

export interface Religion {
  id: string;
  name: string;
  slug: string;
  summary: string;
  description: string;
  heroImageId: string;
  traditions: Tradition[];
  festivals: Festival[];
  rituals: Ritual[];
  poojas?: Pooja[];
}
