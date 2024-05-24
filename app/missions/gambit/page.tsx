import { gambits } from "@/assets/mocks/missions";
import SelectGambit from "@/components/SelectGambit";

const Page = () => {
  return (
    <>
      <h1 className="text-3xl mb-4">Gambit</h1>
      <SelectGambit />
    </>
  );
};

export default Page;
