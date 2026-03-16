import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";

/**
 * Default page of the application.
 */
export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Header / Navbar */}
      <Header />

      {/* Hero Section */}
      <Hero />
    </div>
  );
}