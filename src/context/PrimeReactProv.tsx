"use client";

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';


const PrimeReactProv = ({ children }: { children: React.ReactNode }) => {



  return (
    <PrimeReactProvider>
      {children}
    </PrimeReactProvider>
  );
};

export default PrimeReactProv;
