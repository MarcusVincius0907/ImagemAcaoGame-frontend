import styles from './home.module.css'
import Header from '../../components/atoms/Header'
import TeamsContainer from '../../components/molecules/TeamsContainer';
import InfoContainer from '../../components/molecules/InfoContainer';


function Home() {
  return (
    <div className={`${styles.bgContainer} h-full w-full overflow-auto pb-5`}>
      <Header></Header>
      <TeamsContainer></TeamsContainer>
      <InfoContainer></InfoContainer>
    </div>
  );
}

export default Home;
