import Link from "next/link";

const FeaturedTextLink = (props: {
  href: string;
  children: React.ReactNode;
  ariaLabel: string;
}) => {
  return (
    <Link
      tabIndex={0}
      href={props.href}
      target={props.href.startsWith("https") ? "_blank" : ""}
      aria-label={"link for "+props.ariaLabel}
      className="group flex shrink-0 flex-row items-center justify-between gap-2 rounded-none border-b-4 border-b-brat-700 bg-transparent p-2 font-normal transition-all duration-200 ease-in-out *:shrink-0 hover:border-brat-300 hover:px-4 focus:border-brat-300 focus:px-4 focus:outline-none lg:gap-4"
    >
      <div className="flex shrink-0 flex-row items-center gap-2 *:shrink-0 *:text-md">
        <span className="text-brat-950 transition-all duration-200 ease-in-out group-hover:scale-125 group-hover:transform group-focus:scale-125">
          {props.ariaLabel}
        </span>
      </div>
    </Link>
  );
};

export default FeaturedTextLink;
