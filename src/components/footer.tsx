/*
  Main footer section.
*/

import Image from 'next/image';
import Link from 'next/link';

import { Container } from './container';

export const Footer = () => {
  return (
    <Container className="flex flex-col lg:flex-row items-center justify-between">
      <Link href="/">
        <a>
          <Image src="/logo-min.png" height={20} width={120} />
        </a>
      </Link>
      <p className="text-gray-100">&copy; {new Date().getFullYear()} | All Rights Reserved</p>

      {/* just some external links */}
      <ul className="text-gray-200">
        <li>
          <a className="hover:underline" href="https://notiriscreations.cf">
            Iris Designs
          </a>
        </li>
        <li>
          <a className="hover:underline" href="https://fleur-delights.vercel.app/">
            Fleur Delights
          </a>
        </li>
      </ul>
    </Container>
  );
};
