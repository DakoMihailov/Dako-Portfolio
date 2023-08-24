import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Projects from '@/modules/projects';


const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION =
  'Showcasing my passion for technology, design, and problem-solving through code.';

const ProjectsPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Dako Mihailov`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects />
      </Container>
    </>
  );
};

export default ProjectsPage;

