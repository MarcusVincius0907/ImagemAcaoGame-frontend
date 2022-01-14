import styles from './home.module.css'
import Header from '../../components/atoms/Header'
import TeamsContainer from '../../components/molecules/TeamsContainer';
import Round from '../../components/atoms/Round';
import WordsDisplay from '../../components/atoms/WordsDisplay';
import Clock from '../../components/atoms/Clock';

function Home() {
  return (
    <div className={`${styles.bgContainer} h-full w-full`}>
      <Header></Header>
      <TeamsContainer></TeamsContainer>
      <div className="w-full max-w-container px-12  m-auto mt-10 ">
        <div className='bg-ia-purple-light p-3 rounded-md min-h-[250px] w-full flex justify-center '>
          <div className="max-w-card mr-5  w-1/3">
            <Round></Round>
          </div>
          <div className="max-w-card mr-5 w-1/3">
            <WordsDisplay></WordsDisplay>
          </div>
          <div className="max-w-card  w-1/3">
            <Clock></Clock>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
