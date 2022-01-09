import styles from './home.module.css'
import Header from '../../components/atoms/Header'

function Home() {
  return (
    <div className={`${styles.bgContainer} h-screen w-full`}>
      <Header></Header>
    </div>
  );
}

export default Home;
