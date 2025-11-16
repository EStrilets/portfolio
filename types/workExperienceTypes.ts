export interface WorkExperienceCard {
  id: number;
  company: string;
  title: string;
  location: string;
  description: string;
  technologies: string[];
  accomplishments: string[];
  startDate: string;
  endDate: string;
  media: {
    photos: string[];
    videos: string[];
  };
  logo: string;
  logoWidth: number;
  logoHeight: number;
  logoScale: number;
  filterColor: string;
  url: string;
  colorFunction?: ({ x }: { x: number }) => string;
}

export interface CardsByCompany {
  [companyName: string]: WorkExperienceCard[];
}