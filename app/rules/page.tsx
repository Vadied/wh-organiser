import rules from "@/assets/mocks/rules";
import AccordionItem from "@/components/AccordionItem";

const Page = () => {
  return (
    <>
      <h1 className="text-3xl mb-8">Sommario</h1>
      <p className="mb-4">
        A Leviathan Chapter Approved battle is waged by following the sequence
        below. Chapter Approved battles are designed for Incursion and Strike
        Force battle sizes.
      </p>

      {rules.map(({ title, content }) => (
        <AccordionItem classes="mb-2" key={title} title={title}>
          {content}
        </AccordionItem>
      ))}
    </>
  );
};

export default Page;
