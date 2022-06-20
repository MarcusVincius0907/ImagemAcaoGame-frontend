import Round from "../../atoms/Round";
import WordsDisplay from "../../atoms/WordsDisplay";
import Clock from "../../atoms/Clock/index.js";
import ModalCustom from "../Modal";
import GeneralConfig from "../../atoms/GeneralConfig";
import CreateTeam from "../../atoms/CreateTeam";
import ViewerConfigOpt from "../../atoms/ViewerConfigOpt";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTeams } from '../../../store/configSlice'
import { ToastContainer } from "react-toastify";

function ConfigContainer() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTeams())
  }, []);
  
  return (
    <div className="w-full max-w-container px-2 sm:px-12  m-auto mt-10 ">
      <div className=" bg-ia-purple-light h-full rounded-md">
        <div className="bg-ia-purple-med text-white text-xl md:text-3xl p-4 rounded-t-md flex justify-between ">
          <div className="flex items-center">
            Configurações
          </div>
          
        </div>

        <div className="w-full flex flex-col md:flex-row md:p-5 items-stretch ">

          <div className="w-full md:w-1/2">
            <div className="">
              <GeneralConfig> </GeneralConfig>
            </div>

            <div className="mt-3  ">
              <CreateTeam> </CreateTeam>
            </div>
          </div>

          <div className="w-full mt-3 md:mt-0 md:ml-3 md:w-1/2 ">
            <ViewerConfigOpt></ViewerConfigOpt>
          </div>
        </div>


      </div>
      <ToastContainer />
    </div>
  );
}

export default ConfigContainer;
