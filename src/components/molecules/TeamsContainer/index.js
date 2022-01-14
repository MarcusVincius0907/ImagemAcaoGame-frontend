import styles from './teamsContainer.module.css';
import TeamCard from '../../atoms/TeamCard';

function TeamsContainer(){
  return(
    <div className="flex">
      <TeamCard></TeamCard>
      <div className="h-full min-h-[250px] w-6 bg-ia-purple-light mx-6 rounded-md"></div>
      <TeamCard></TeamCard>
    </div>
  )
}

export default TeamsContainer;