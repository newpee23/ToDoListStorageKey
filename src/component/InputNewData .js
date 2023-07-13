import React, { useContext } from "react";
import {DataContextToDo} from './Content';

function InputNewData () {

  const {
    datainput,
    setDataInput,
    handleAddListData,
    onKeyDownEnter
  } = useContext(DataContextToDo);
  
  return (
    <div className="relative z-0 w-full group mb-0 text-zinc-600 lg:flex">
      <input
        type="text"
        name="input_data"
        id="input_data"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-zinc-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer lg:w-96"
        placeholder=" "
        required
        onChange={(event) => setDataInput(event.target.value)}
        onKeyDown={onKeyDownEnter}
        value={datainput}
      />
      <label
        forhtml="floating_email"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Create a new data
      </label>
      <button
        className="todo-submit hover:text-blue-600"
        title="Add new data"
        onClick={handleAddListData}
      >
        +
      </button>
    </div>
  );
}

export default InputNewData ;
