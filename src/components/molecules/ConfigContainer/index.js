import Round from '../../atoms/Round'
import WordsDisplay from '../../atoms/WordsDisplay';
import Clock from '../../atoms/Clock/index.js';
import ModalCustom from '../Modal';
import GeneralConfig from '../../atoms/GeneralConfig';

function ConfigContainer() {

  return (
    <div className="w-full max-w-container px-2 sm:px-12  m-auto mt-10 ">
     <div className=" bg-ia-purple-light h-full min-h-[900px] rounded-md">
       <div className="bg-ia-purple-med text-white text-3xl p-2 rounded-t-md  ">
        Configurações
       </div>

       <div className="mt-5 w-1/2 ">
        <GeneralConfig> </GeneralConfig>
       </div>

     </div>
    </div>
  );
}

export default ConfigContainer;
