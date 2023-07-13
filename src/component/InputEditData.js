import React, { useState } from "react";

function InputEditData({
  item_id,
  item_name,
  setIsActive,
  setStatusUpdate,
  statusupdate,
}) {
  const LOCAL_STORAGE_KEY = "todoApp.listdata";
  const [dataeditinput, setDataEditInput] = useState(item_name);

  const updateObjectById = () => {
    if (dataeditinput !== "") {
      const storedListData = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY)
      );

      const indexToUpdate = storedListData.findIndex(
        (item) => item.id === item_id
      );

      if (indexToUpdate !== -1) {
        setDataEditInput(dataeditinput); // อัปเดตค่า dataeditinput

        storedListData[indexToUpdate].name = dataeditinput;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storedListData));
        setIsActive(false);
        setStatusUpdate(!statusupdate);
      }
    }
  };

  const updateObjectByIdonKeyDownEnter = (event) => {
    if (event.key === "Enter" && dataeditinput !== "") {
      const storedListData = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY)
      );

      const indexToUpdate = storedListData.findIndex(
        (item) => item.id === item_id
      );

      if (indexToUpdate !== -1) {
        setDataEditInput(dataeditinput); // อัปเดตค่า dataeditinput

        storedListData[indexToUpdate].name = dataeditinput;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storedListData));
        setIsActive(false);
        setStatusUpdate(!statusupdate);
      }
    }
  };

  return (
    <>
      <div className="relative w-full mr-3 mb-3 mt-3">
        <input
          type="text"
          id="default-edit"
          className="block w-full p-4 text-sm text-zinc-900 border border-zinc-300 rounded-lg bg-zinc-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Input Edit Data..."
          onChange={(event) => setDataEditInput(event.target.value)}
          onKeyDown={updateObjectByIdonKeyDownEnter}
          value={dataeditinput}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={updateObjectById}
        >
          Save
        </button>
      </div>
    </>
  );
}

export default InputEditData;
