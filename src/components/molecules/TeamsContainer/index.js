import styles from "./style.module.css";
import TeamCard from '../../atoms/TeamCard';

function TeamsContainer(){
  return(
    <div className="flex mt-10 max-w-container w-full m-auto px-12">
      <TeamCard></TeamCard>
      <div className="h-full min-h-[250px] w-6 bg-ia-purple-light mx-6 rounded-md"></div>
      <TeamCard></TeamCard>
    </div>
  )
}

export default TeamsContainer;