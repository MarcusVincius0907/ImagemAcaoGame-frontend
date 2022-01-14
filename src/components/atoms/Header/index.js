import styles from './header.module.css'
function Header(){
  return(
    <div className={`bg-ia-purple-light h-24 w-full`}>
      <div className="flex items-center h-full w-full text-white p-4 px-12 m-auto max-w-container">
        <div className="flex items-center justify-start w-1/2">
          <h1 className="text-4xl">Image e Ação</h1>
        </div>
        <div className="flex items-center justify-end w-1/2">
          <div className="w-4/5 text-2xl flex items-center justify-between">
            <div className={`${styles.itemMenu} `}>Como Jogar</div>
            <div className={`${styles.itemMenu} `}>Sobre</div>
            <div className={`${styles.itemMenu} `}>Mais</div>
            <div className={`${styles.itemMenu} `}>Config</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;