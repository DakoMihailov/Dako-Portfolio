import clsx from 'clsx';
import Link from 'next/link';
import { MdVerified as VerifiedIcon } from 'react-icons/md';

import Image from '../elements/Image';
import Tooltip from '../elements/Tooltip';

interface ProfileHeaderProps {
  expandMenu: boolean;
  imageSize: number;
}

const ProfileHeader = ({ expandMenu, imageSize }: ProfileHeaderProps) => {
  return (
    <div
      className={clsx(
        'flex items-center lg:items-start gap-4 lg:gap-0.5 flex-grow lg:flex-col w-full',
        expandMenu && 'flex-col !items-start'
      )}
    >
      <Image
        src='/images/profile.png'
        alt='Dako Mihailov'
        width={expandMenu ? 80 : imageSize}
        height={expandMenu ? 80 : imageSize}
        rounded='rounded-full'
        className='lg:hover:scale-105'
      />
      <div className='flex items-center gap-2 mt-1 lg:mt-4'>
        <Link href='/' passHref>
          <h2 className='flex-grow text-lg font-medium lg:text-xl font-sora'>
          Dako Mihailov
          </h2>
        </Link>
        <Tooltip title='Verified'>
          <VerifiedIcon size={18} className='text-blue-400' />
        </Tooltip>
      </div>
      <div className='hidden text-sm transition-all duration-300 lg:flex font-sora text-neutral-600 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400'>
        @Dako Mihailov
      </div>
    </div>
  );
};

export default ProfileHeader;
