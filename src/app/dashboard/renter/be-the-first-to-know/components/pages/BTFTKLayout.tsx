"use client"
import ScrollTop from '@/components/__shared/ui/ScrollTop';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {
  children: React.ReactNode
}

const BTFTKLayout = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <main
      className={cn("min-h-screen", {
        "bg-shade":
          pathname === "/dashboard/renter/be-the-first-to-know/manage-criteria",
      })}
    >
      <div className="wrapper pb-28">
        <h2 className="mb-8 capitalize">Be the first to Know</h2>
        {children}
        <ScrollTop />
      </div>
    </main>
  )
}

export default BTFTKLayout
