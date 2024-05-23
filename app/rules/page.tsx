import rules from "@/assets/mocks/rules";
import Accordion from "@/components/Accordion";

const Page = () => {
  return (
    <>
      <h1 className="text-3xl mb-8">Sommario</h1>
      <p className="mb-4">
        A Leviathan Chapter Approved battle is waged by following the sequence
        below. Chapter Approved battles are designed for Incursion and Strike
        Force battle sizes.
      </p>

      <Accordion items={rules} />
    </>
  );
};

export default Page;
