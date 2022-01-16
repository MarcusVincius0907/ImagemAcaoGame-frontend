import styles from "./style.module.css";
import TeamCard from '../../atoms/TeamCard';

function TeamsContainer(){
  return(
    <div className="flex flex-wrap sm:flex-nowrap mt-10 max-w-container w-full m-auto px-12">
      <TeamCard></TeamCard>
      <div className="hidden sm:block  h-full min-h-[250px] w-6 bg-ia-purple-light mx-6 rounded-md"></div>
      <div className="mt-5 sm:mt-0 w-full">
        <TeamCard ></TeamCard>
      </div>
    </div>
  )
}

export default TeamsContainer;