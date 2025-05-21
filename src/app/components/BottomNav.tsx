// components/BottomNav.tsx

import {  Mail, MapPin  } from 'lucide-react';
import Link from 'next/link';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#d5a32d] pb-1 text-white z-40 shadow-lg md:hidden">
      <div className="flex justify-around items-center py-2">
       
        <Link href="mailto:info@irevive.com" className="flex flex-col items-center text-sm">
          <Mail size={20} />
          <span>Email</span>
        </Link>
         <Link href="tel:8009944335" className="flex flex-col items-center text-sm">
          <Mail size={20} />
          <span>Request Quote</span>
        </Link>
        <Link
          href="https://maps.app.goo.gl/rYtrmTj8u4RfTy8R7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-sm"
        >
          <MapPin size={20} />
          <span>Location</span>
        </Link>
      </div>
    </div>
  );
}