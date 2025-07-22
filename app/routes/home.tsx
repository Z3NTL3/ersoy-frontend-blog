import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog - Anasayfa - Mehdi Ersoy" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="w-screen h-screen flex grow justify-center items-center">
      
    </div>
  );
}
