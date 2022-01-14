import styles from "./style.module.css";

function WordsDisplay() {
  return (
    <div className="w-full flex  flex-col  bg-ia-purple-med p-3 rounded-md h-full">
      <div className="text-white opacity-50 text-sm">
        Utilize as palavras a seguir
      </div>
      <div className="mt-3">

        <div className=" bg-ia-brown-dark flex rounded-md">

          {/* col 1 */}
          <div className="w-1/2 p-1">
            <div className="text-white text-md p-2">
              Palavras
            </div>
            <div className=" text-ia-purple-dark bg-ia-brown-light text-md p-1 my-1 text-center">Palavra</div>
            <div className=" text-ia-purple-dark bg-ia-brown-light text-md p-1 my-1 text-center">Palavra</div>
            <div className=" text-ia-purple-dark bg-ia-brown-light text-md p-1 my-1 text-center">Palavra</div>
          </div>


          {/* col 2 */}
          <div className="w-1/2 p-1">
            <div className="text-white text-md p-2">Valor</div>
            <div className=" text-ia-purple-dark bg-ia-brown-light text-md p-1 my-1 text-center">10</div>
            <div className=" text-ia-purple-dark bg-ia-brown-light text-md p-1 my-1 text-center">10</div>
            <div className=" text-ia-purple-dark bg-ia-brown-light text-md p-1 my-1 text-center">10</div>
          </div>


        </div>

      </div>
    </div>
  );
}

export default WordsDisplay;
