import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Career from '@/modules/career';

const PAGE_TITLE = 'Career';
const PAGE_DESCRIPTION = 'A short story of me';

const CareerPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Dako Mihailov`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Career />
      </Container>
    </>
  );
};

export default CareerPage;
