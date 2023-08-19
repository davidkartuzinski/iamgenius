'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export function ActiveLink({ children, href }) {
  const router = useRouter();
  const pathname = usePathname();

  const style = {
    borderBottom: pathname === href ? '3px solid var(--orange)' : '',
    color: pathname === href ? 'var(--orange)' : '',
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href} style={style} onClick={handleClick}>
      {children}
    </Link>
  );
}
