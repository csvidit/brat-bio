import { iconLinks } from "@/utils/list-fill";
import FeaturedLink from "../links/FeaturedTextLink";

const FeaturedLinks = () => {
  return (
    <div className="flex shrink-0 flex-row flex-wrap gap-2 *:shrink-0">
      {iconLinks.map((item, index) => (
        <FeaturedLink
          key={`iconLink-${index}`}
          href={item.href}
          ariaLabel={item.ariaLabel}
        >
          {item.icon}
        </FeaturedLink>
      ))}
    </div>
  );
};

export default FeaturedLinks;
