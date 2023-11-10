import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';


import prismadb from '@/lib/prismadb';
import Navbar from '@/components/navbar';
import { Suspense } from 'react';



export default async function DashboardLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { storeId: string }
}) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prismadb.store.findFirst({ 
    where: {
      id: params.storeId,
      userId,
    }
   });

  if (!store) {
    redirect('/');
  };

  return (
    <>
      <Navbar />
      <Suspense>
         {children}
      </Suspense>
      
    </>
  );
};