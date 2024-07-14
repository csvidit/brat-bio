const Intro = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8 w-full">
      <div className="inline-flex w-full flex-row flex-wrap gap-x-2 text-justify text-4xl text-brat-950 *:w-max *:text-justify whitespace-pre-wrap">
        <h1>Vidit Khandelwal</h1>
        <span>is a software engineer</span>
        <div className="w-full text-justify">
          and loves making web applications
        </div>
      </div>
    </div>
  );
};

export default Intro;
