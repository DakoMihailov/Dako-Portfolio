const Copyright = () => {
  return (
    <div className='flex items-center gap-1 px-3 py-1 text-sm text-neutral-600 dark:text-neutral-600 font-sora'>
      <span>©</span>
      <span>{new Date().getFullYear()}</span>
      <span>with</span>
      <span className='text-red-500 animate-pulse'>❤</span>
      <span>by</span>
      <span className='cursor-pointer hover:dark:text-neutral-400'>
        Dako Mihailov
      </span>
    </div>
  );
};

export default Copyright;
