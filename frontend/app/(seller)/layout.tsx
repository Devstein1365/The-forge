import { Sidebar } from "@/components/layout/Sidebar";
import { BottomNav } from "@/components/layout/BottomNav";

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-nm-bg overflow-hidden text-nm-black">
      <Sidebar isSeller={true} />
      <div className="flex-1 flex flex-col h-full overflow-hidden w-full relative">
        <header className="md:hidden flex justify-between items-center bg-nm-white p-4 sticky top-0 z-40 border-b border-nm-grey-100">
          <h1 className="text-xl tracking-tight font-bold italic text-nm-green">
            NetMarket{" "}
            <span className="text-xs bg-nm-gold px-2 py-0.5 rounded-full not-italic text-nm-white uppercase ml-2">
              Vendor
            </span>
          </h1>
        </header>
        <main className="flex-1 overflow-y-auto pb-20 md:pb-0 custom-scrollbar relative bg-nm-bg p-4 md:p-8">
          {children}
        </main>
        <BottomNav isSeller={true} />
      </div>
    </div>
  );
}
