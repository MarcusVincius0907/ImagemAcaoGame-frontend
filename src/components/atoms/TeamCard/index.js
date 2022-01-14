import styles from "./style.module.css";

function TeamCard(){
  return(
    <div className="w-full max-w-card bg-ia-brown-dark rounded-md min-h-[250px]">

      <div className="w-full bg-ia-purple-light p-2 rounded-t-md">
        <h1 className=" text-white text-3xl">TIME A</h1>
      </div>

      <div className="flex p-3 text-ia-purple-dark">
        <div className="w-1/2 ">
          {/* players */}
          <div className={`${styles.itemPlayer}`}>
            <span>Joao</span>
          </div>
          <div className={`${styles.itemPlayer}`}>
            <span>Joao</span>
          </div>
          <div className={`${styles.itemPlayer}`}>
            <span>Joao</span>
          </div>
        </div>
        <div className="w-1/2 pl-5">
          {/* score */}
          <div className="w-full bg-ia-brown-light mt-1 rounded-sm p-2">
            <h2 className="  text-xl">Pontuação</h2>
            <div className=" text-sm mt-2 ">
              <div>rodada 1 -{'>'} 10 pts</div>
              <div>rodada 2 -{'>'} 20 pts</div>
            </div>
          </div>

          <div className="w-full bg-ia-brown-light mt-1 rounded-sm p-2">
            <h2 className=" text-xl  ml-2">Total -{'>'} 30 pts</h2> 
          </div>
        </div>
      </div>

    </div>
  )
}

export default TeamCard;