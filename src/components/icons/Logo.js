import Image from 'next/image';

import logoImg from '@images/logo.png';

const Logo = () => (
  <Image
    id="logo"
    className="img"
    src={logoImg}
    width={48}
    height={48}
    quality={100}
    alt="Logo"
    placeholder="blur"
  />
);

export { Logo };
