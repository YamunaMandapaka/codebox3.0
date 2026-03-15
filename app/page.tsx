import Image from "next/image";
import { Button } from "@/components/ui/button";
/**
 * Default page of the aplication.
 * @returns 
 */
export default function Home() {
  return (
    <div>
      <h1 className="font-game text-2xl">
        Welcome to the home page
      </h1>
      <Button>Subscribe</Button>
    </div>
  );
}