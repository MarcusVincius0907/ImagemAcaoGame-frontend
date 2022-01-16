import Round from '../../atoms/Round'
import WordsDisplay from '../../atoms/WordsDisplay';
import Clock from '../../atoms/Clock';

function InfoContainer() {
  return (
      
    <div className="w-full max-w-container px-12  m-auto mt-10 ">
      <div className='bg-ia-purple-light p-3 rounded-md min-h-[250px] w-full flex justify-center flex-wrap sm:flex-nowrap'>
        <div className="max-w-card mb-5 sm:mb-0 w-full sm:mr-5  sm:w-1/3">
          <Round></Round>
        </div>
        <div className="max-w-card mb-5 sm:mb-0 w-full sm:mr-5 sm:w-1/3">
          <WordsDisplay></WordsDisplay>
        </div>
        <div className="max-w-card w-full  sm:w-1/3">
          <Clock></Clock>
        </div>
      </div>
    </div>
  );
}

export default InfoContainer;
