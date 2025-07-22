import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Skeleton } from "~/components/ui/skeleton";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog - Anasayfa - Mehdi Ersoy" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="w-screen h-screen flex grow justify-center items-center">
      <Skeleton className="h-12 w-12 rounded-full" />
      <Welcome/>
    </div>
  );
}
