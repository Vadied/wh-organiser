import Link from "next/link";
import { admin, missions, rules } from "@/assets/navigation";

export default async function IndexPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <h1 className="text-3xl mb-2">Benvenuti nel war-organizer!</h1>
      <p className="mb-6">
        Tutto quello che ti serve per gestire la tua partita:
      </p>
      <ul className="flex flex-wrap gap-4">
        <li>
          <Link href={admin.url}>
            <button className="px-2 py-1 rounded text-text border-none bg-button-primary">
              {admin.title}
            </button>
          </Link>
        </li>
        <li>
          <Link href={rules.url}>
            <button className="px-2 py-1 rounded text-text border-none bg-button-primary">
              {rules.title}
            </button>
          </Link>
        </li>
        <li>
          <Link href={missions.url}>
            <button className="px-2 py-1 rounded text-text border-none bg-button-primary">
              {missions.title}
            </button>
          </Link>
        </li>
      </ul>
    </main>
  );
}
