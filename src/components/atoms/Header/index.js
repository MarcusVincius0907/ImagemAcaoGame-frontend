import styles from './header.module.css'
function Header(){
  return(
    <div className={`${styles.bgContainer} h-24 w-ful`}>
      <div>
        <h1 className="text-white text-3xl">Image e Ação</h1>
      </div>
      <div className="text-white text-md">
        <div>Como Jogar</div>
        <div>Sobre</div>
        <div>Mais</div>
        <div>Config</div>
      </div>
    </div>
  )
}

export default Header;