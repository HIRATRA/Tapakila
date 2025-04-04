// import { Navabar } from "@/app/(protected)/_components/navabar";
import { Header } from "@/components/header";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 px-4">
      <Header />
      {children}
    </div>
  );
}
