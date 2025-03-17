import { Navbar } from "@/components/navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="p-4">{children}</main>
    </div>
  );
}
