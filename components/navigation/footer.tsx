import siteConfig from "@/config/site";
import PaddingContainer from "../layout/padding-container";
import Link from "next/link";
import SocialLink from "../elements/social-link";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <div className="py-8 border-t mt-10">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
          <p className="max-w-md mt-2 text-lg text-neutral-700">
            {siteConfig.description}
          </p>
        </div>
        {/* Social and Currently At */}
        <div className="flex flex-wrap justify-between gap-4 mt-6">
          <div>
            <div className="font-medium text-lg">#exploretheworld</div>
            <div className="flex items-center gap-3 text-neutral-600 mt-2">
              <SocialLink
                platform="twitter"
                link={siteConfig.socialLinks.twitter}
              />
              <SocialLink
                platform="instagram"
                link={siteConfig.socialLinks.instagram}
              />
              <SocialLink
                platform="github"
                link={siteConfig.socialLinks.github}
              />
              <SocialLink
                platform="youtube"
                link={siteConfig.socialLinks.youtube}
              />
              <SocialLink
                platform="linkedin"
                link={siteConfig.socialLinks.linkedin}
              />
            </div>
          </div>
          <div>
            <div className="text-sm text-neutral-400">Currently At</div>
            <div className="flex items-center gap-2 bg-white  px-3 py-2 rounded-md shadow-md">
              <div className="bg-emerald-400 rounded-full w-1 h-1" />
              {siteConfig.currentlAt}
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t py-3 flex flex-wrap justify-between items-center gap-4  mt-16">
          <div className="text-sm text-neutral-400">
            All rights are reserved | Copyright {currentDate}
          </div>
          <div className="text-sm">
            {" "}
            Made with love by{" "}
            <Link className="underline underline-offset-4" href="/">
              @pkexplorer
            </Link>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
