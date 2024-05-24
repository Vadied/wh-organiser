import { deployments } from "@/assets/mocks/missions";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <h1 className="text-3xl mb-4">Schieramenti</h1>
      <div className="flex flex-wrap gap-4 items-center">
        {deployments.map((d) => (
          <Image
            key={d.id}
            alt={d.field}
            src={`/img/fields/${d.field}`}
            width={400}
            height={400}
          />
        ))}
      </div>
    </>
  );
};

export default Page;
