import styles from './home.module.css'
import Header from '../../components/atoms/Header'
import TeamsContainer from '../../components/molecules/TeamsContainer';

function Home() {
  return (
    <div className={`${styles.bgContainer} h-full w-full`}>
      <Header></Header>
      <div className="mt-10 max-w-container w-full m-auto px-12">
        <TeamsContainer></TeamsContainer>
      </div>
    </div>
  );
}

export default Home;
