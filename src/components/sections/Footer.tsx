import Link from "next/link";

const Footer = () => {
  return (
    <span className="inline-flex shrink-0 flex-row flex-wrap items-center gap-1 whitespace-pre-wrap text-xs font-light text-brat-800 *:shrink-0">
      <span>
        A Snippetopia template made by{" "}
        <Link
          className="inline whitespace-pre-wrap"
          href="https://viditkhandelwal.com"
        >
          Vidit Khandelwal
        </Link>
      </span>
      <span>
        Check out more on{" "}
        <Link
          className="inline whitespace-pre-wrap"
          href="https://snippetopia.xyz"
        >
          snippetopia.xyz
        </Link>
      </span>
    </span>
  );
};

export default Footer;
