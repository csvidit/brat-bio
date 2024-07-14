import Link from "next/link";

const Footer = () => {
  return (
    <span className="inline-flex shrink-0 flex-row flex-wrap whitespace-pre-wrap items-center gap-1 text-xs font-light text-brat-800 *:shrink-0">
      <p>
        A Snippetopia template made by Vidit Khandelwal. Check out more on{" "}
        <Link href="https://snippetopia.xyz">snippetopia.xyz</Link>
      </p>
    </span>
  );
};

export default Footer;
