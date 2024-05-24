import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};
const Page = ({ children }: Props) => {
  return (
    <div className="p-4 md:p-10 mx-auto max-w-7xl">
      <Navigation />
      {children}
    </div>
  );
};

export default Page;
