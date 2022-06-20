import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectActiveChild,
  selectIsOpenModal,
  finishSteps,
  selectModalType,
  selectWinner,
  reset,
  setModal
} from "../../../store/mainSlice";
import { modalSection } from "../../../types/modalSection";

function ModalCustom(props) {
  const [change, setChange] = useState(false);
  const activeChildSelector = useSelector(selectActiveChild);
  const winner = useSelector(selectWinner);
  const isOpenModalSelector = useSelector(selectIsOpenModal);
  const modalType = useSelector(selectModalType);
  const dispatch = useDispatch();

  const finishGame = () => {
    dispatch(reset()); 
    dispatch(setModal(false, modalSection.FINISHED_ROUND))
  }

  return (
    <>
      {!isOpenModalSelector ? (
        <></>
      ) : (
        <>
          
          <div
            className="fixed z-10 inset-0 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                aria-hidden="true"
              ></div>

              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>

              {
                modalType === modalSection.FINISHED_ROUND
                ?
                  <div
                    className={[
                      " inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
                    ]}
                  >
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                          <svg
                            className="h-6 w-6 text-ia-purple-dark"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <h3
                            className="text-lg leading-6 font-medium text-gray-900"
                            id="modal-title"
                          >
                            E ai? Acertou?
                          </h3>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Por favor, seja honesto e preste bem atenção na opção
                              escolhida, ela ficará registrada no placar
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        onClick={() => dispatch(finishSteps(true))}
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-ia-purple-dark text-base font-medium text-white hover:opacity-50 focus:outline-none  outline-none sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Acertei
                      </button>
                      <button
                        onClick={() => dispatch(finishSteps(false))}
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Errei
                      </button>
                    </div>
                  </div>
                :  
                modalType === modalSection.FINISHED_GAME
                ? 
                  <div
                    className={[
                      " inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
                    ]}
                  >
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          className="h-6 w-6 text-ia-purple-dark"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          className="text-lg leading-6 font-medium text-gray-900"
                          id="modal-title"
                        >
                          Acabou o jogo!
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            {winner.tie === true? `Empatou! Jogue novamente uma revanche.` : `O time que ganhou foi o ${winner.teamName} com ${winner.score} pontos.`}
                            
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      onClick={() => finishGame()}
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-ia-purple-dark text-base font-medium text-white hover:opacity-50 focus:outline-none  outline-none sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Ok
                    </button>
                    
                  </div>
                </div>
                : 
                  <></>
              }
            </div>
          </div>
          
          
        </>
      )}
    </>
  );
}

export default ModalCustom;
