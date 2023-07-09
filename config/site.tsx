export interface SiteConfig {
  siteName: string;
  description: string;
  currentlAt: string;
  socialLinks: {
    twitter: string;
    youtube: string;
    github: string;
    linkedin: string;
    instagram: string;
  };
}

const siteConfig: SiteConfig = {
  siteName: "PK Explorer",
  description: "Explore around the world with PK -w-",
  currentlAt: "Thailand",
  socialLinks: {
    twitter: "https://twitter.com/pkexplorer",
    youtube: "https://youtube.com/pkexplorer",
    github: "https://github.com/pkexplorer",
    linkedin: "https://linkedin.com/pkexplorer",
    instagram: "https://instagram.com/pkexplorer",
  },
};

export default siteConfig;
