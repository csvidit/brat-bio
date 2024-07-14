import Link from "next/link";

const ListLinkSimple = (props: {
  href: string;
  icon: React.ReactNode;
  children: string;
}) => {
  return (
    <Link
      tabIndex={0}
      href={props.href}
      target={props.href.startsWith("https") ? "_blank" : ""}
      aria-label={props.children}
      className="group flex w-full shrink-0 flex-row items-center justify-between gap-2 rounded-none border-b-4 border-b-brat-700 hover:border-brat-400 focus:border-brat-400 bg-brat-950 bg-transparent p-2 hover:px-4 focus:px-4 font-normal transition-all duration-200 ease-in-out *:shrink-0  hover:bg-brat-950 focus:bg-brat-950 group-hover:bg-brat-950 group-focus:bg-brat-950 lg:gap-4 focus:outline-none"
    >
      <div className="flex shrink-0 flex-row items-center gap-2 *:shrink-0 group-hover:transform group-focus:transform group-hover:transition-all group-focus:transition-all group-hover:duration-200 group-focus:duration-200 group-hover:ease-in-out group-focus:ease-in-out *:text-lg">
        <span className="text-brat-950 transition-all duration-200 ease-in-out group-hover:transform group-focus:transform group-hover:text-brat-400 group-focus:text-brat-400 group-hover:transition-all group-focus:transition-all group-hover:duration-200 group-focus:duration-200 group-hover:ease-in-out group-focus:ease-in-out">
          {props.icon}
        </span>
        <span className="text-sm text-brat-950 group-hover:text-brat-50 group-focus:text-brat-50">
          {props.children}
        </span>
      </div>
    </Link>
  );
};

export default ListLinkSimple;
