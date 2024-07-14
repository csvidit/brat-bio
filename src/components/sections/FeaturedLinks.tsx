import { iconLinks } from "@/utils/list-fill";
import FeaturedTextLink from "../links/FeaturedTextLink";

const FeaturedLinks = () => {
  return (
    <div className="flex shrink-0 flex-row flex-wrap gap-2 *:shrink-0">
      {iconLinks.map((item, index) => (
        <FeaturedTextLink
          key={`iconLink-${index}`}
          href={item.href}
          ariaLabel={item.ariaLabel}
        >
          {item.icon}
        </FeaturedTextLink>
      ))}
    </div>
  );
};

export default FeaturedLinks;
