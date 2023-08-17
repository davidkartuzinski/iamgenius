import styles from './trait.module.css';

function Trait({ number, name, content }) {
  return (
    <p className='mb-6 max-w-2xl flex-row font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl'>
      <h3 className='text-1xl inline pr-2 font-bold dark:text-white'>
        {number}. {name}.
      </h3>
      <span>"{content}"</span>
    </p>
  );
}

export default Trait;
