import styles from "./style.module.css";
import {  NavLink } from "react-router-dom";
import Service from "../../../services";
import { useDispatch } from "react-redux";
import { reset } from  '../../../store/mainSlice'
import MenuMobile from "../MenuMobile";

function Header(){
  const dispatch = useDispatch()
  return(
    <div className={`bg-ia-purple-light h-24 w-full`}>
      <div className="flex items-center h-full w-full text-white p-4 px-2 sm:px-12  m-auto max-w-container">
        <div className="flex items-center justify-start w-full sm:w-1/2">
          <h1 className="text-4xl">Image e Ação</h1>
        </div>
        <div className="hidden md:flex items-center justify-end w-1/2">
          <div className="w-4/5 text-2xl flex items-center justify-between">
            <NavLink to="/"
              className={({ isActive }) => isActive? " bg-ia-purple-med " : ""}
            >
               <div className={`${styles.itemMenu} `}>Jogar</div>
            </NavLink>
            {/* <div className={`${styles.itemMenu} `}>Como Jogar</div> */}
            <div onClick={() => dispatch(reset())} className={`${styles.itemMenu} `}>Reset</div>
            <NavLink to="/config"
              className={({ isActive }) => isActive? " bg-ia-purple-med " : ""}
            >
               <div className={`${styles.itemMenu} `}>Config</div>
            </NavLink>
          </div>
        </div>
        <div className="md:hidden w-1/2 flex justify-end">
          <MenuMobile></MenuMobile>
        </div>
      </div>
    </div>
  )
}

export default Header;