import Header from "@/components/Layout/Header";
import MobileNavigation from "@/components/MobileNavigation";
import Sidebar from "@/components/Sidebar";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/actions/user.actions"; // Adjust the import path as needed
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  // fetching the current user
  const currentUser = await getCurrentUser();

  if(!currentUser) return redirect('/sign-in');
  return (
    <main className="flex h-screen">
      <Sidebar {...currentUser} />
      <section className="fles h-full flex-1 flex-col">
        <MobileNavigation />
        <Header />
        <div className="main-content">{children}</div>
      </section>
    </main>
  );
};

export default layout;
