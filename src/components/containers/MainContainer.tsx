const MainContainer = (props: { children: React.ReactNode }) => {
  return (
    <div className="min-w-screen max-w-screen flex h-full min-h-screen w-screen flex-col items-center bg-brat-600 text-brat-500 *:lowercase">
      {props.children}
    </div>
  );
};

export default MainContainer;
