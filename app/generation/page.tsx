import { generation } from "@/assets/navigation";
import Button from "@/components/Button";
import { parseParamsObjectToString } from "@/js/utils";
import Link from "next/link";

type Props = {
  searchParams?: any;
};
const Page = ({ searchParams }: Props) => {
  if (!generation?.children) return null;
  const params = parseParamsObjectToString(searchParams);
  return (
    <div className="w-full flex flex-col gap-4">
      {generation.children.map(({ title, url }) => (
        <Link key={title} className="w-full" href={`${url}?${params}`}>
          <Button classes="w-full">{title}</Button>
        </Link>
      ))}
    </div>
  );
};

export default Page;
