import Link from 'next/link';
import { HiOutlineBriefcase as CareerIcon } from 'react-icons/hi';
import { LuDownload as DownloadIcon } from 'react-icons/lu';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { CAREERS } from '@/common/constant/careers';

import CareerCard from './CareerCard';

const RESUME_URL = 'https://dakomihailov.vercel.app/Resume.pdf';

const CareerList = () => {
  return (
    <section className='space-y-6'>
      <div className='space-y-2'>
        <SectionHeading title='Work Experience' icon={<CareerIcon className='mr-1' />} />
        <SectionSubHeading>
          <p className='dark:text-neutral-400'>
            My professional work experience.
          </p>
          <Link
            href={RESUME_URL}
            target='_blank'
            passHref
            className='flex items-center gap-2 transition-all duration-300 hover:gap-3 text-neutral-600 dark:text-neutral-500 hover:text-neutral-700 hover:dark:text-neutral-300'
            data-umami-event='Download Resume'
          >
            <DownloadIcon />
            <span>Download Resume</span>
          </Link>
        </SectionSubHeading>
      </div>

      <div className='grid gap-4 md:grid-cols-2'>
        {CAREERS?.map((career, index) => (
          <CareerCard key={index} {...career} />
        ))}
      </div>
    </section>
  );
};

export default CareerList;
