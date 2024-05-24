import { generation } from "@/assets/navigation";
import Button from "@/components/Button";
import Link from "next/link";

const Page = () => {
  if(!generation?.children) return null;

  return (
    <div className="w-full flex flex-col gap-4">
      {generation.children.map((m) => (
        <Link key={m.title} className="w-full" href={m.url}>
          <Button classes="w-full">{m.title}</Button>
        </Link>
      ))}
    </div>
  );
};

export default Page;
