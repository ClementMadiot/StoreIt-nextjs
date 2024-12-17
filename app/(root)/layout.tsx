import Header from "@/components/Layout/Header";
import MobileNavigation from "@/components/MobileNavigation";
import Sidebar from "@/components/Sidebar";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/actions/user.actions"; // Adjust the import path as needed
import { Toaster } from "@/components/ui/toaster"

export const dynamic = "force-dynamic";


const layout = async ({ children }: { children: React.ReactNode }) => {
  // fetching the current user
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/sign-in");
  return (
    <main className="flex h-screen">
      <Sidebar {...currentUser} />
      <section className="fles h-full flex-1 flex-col">
        <MobileNavigation {...currentUser} />
        <Header userId={currentUser.$id} accountId={currentUser.accountId} />
        <div className="main-content">{children}</div>
      </section>
      <Toaster />
    </main>
  );
};

export default layout;
