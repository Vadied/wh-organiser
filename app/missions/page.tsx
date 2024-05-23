import Button from "@/components/Button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Link className="w-full" href="/missions/primary">
        <Button classes="w-full">Missioni primarie</Button>
      </Link>
      <Link href="/missions/secondary">
        <Button classes="w-full">Missioni secondarie</Button>
      </Link>
      <Link href="/missions/deployments">
        <Button classes="w-full">Deployments</Button>
      </Link>
      <Link href="/missions/gambit">
        <Button classes="w-full">Gambit</Button>
      </Link>
    </div>
  );
};

export default Page;
