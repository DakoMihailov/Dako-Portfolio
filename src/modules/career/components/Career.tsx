import Breakline from '@/common/components/elements/Breakline';

import CareerList from './CareerList';
import Story from './Story';

const Career = () => {
  return (
    <>
      <Story />
      <Breakline className='my-8' />
      <CareerList />
    </>
  );
};

export default Career;
