import Round from "../../atoms/Round";
import WordsDisplay from "../../atoms/WordsDisplay";
import Clock from "../../atoms/Clock/index.js";
import ModalCustom from "../Modal";
import GeneralConfig from "../../atoms/GeneralConfig";
import CreateTeam from "../../atoms/CreateTeam";
import ViewerConfigOpt from "../../atoms/ViewerConfigOpt";

function ConfigContainer() {
  return (
    <div className="w-full max-w-container px-2 sm:px-12  m-auto mt-10 ">
      <div className=" bg-ia-purple-light h-full min-h-[900px] rounded-md">
        <div className="bg-ia-purple-med text-white text-3xl p-2 rounded-t-md  ">
          Configurações
        </div>

        <div className="w-full flex p-5 items-stretch ">

          <div className=" w-1/2">
            <div className="">
              <GeneralConfig> </GeneralConfig>
            </div>

            <div className="mt-5  ">
              <CreateTeam> </CreateTeam>
            </div>
          </div>

          <div className="ml-3 w-1/2 ">
            <ViewerConfigOpt></ViewerConfigOpt>
          </div>
        </div>


      </div>
    </div>
  );
}

export default ConfigContainer;
