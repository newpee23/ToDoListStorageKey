import React, { useState, useEffect } from "react";
import InputNewData from "./InputNewData ";
import { v4 as uuidv4 } from "uuid";
import DataList from "./DataList";
import ModalTotal from "./ModalTotal";

const DataContextToDo = React.createContext();

function Content() {
  const LOCAL_STORAGE_KEY = "todoApp.listdata";
  const [datainput, setDataInput] = useState("");
  const [listdata, setListData] = useState([]);
  const [statusupdate, setStatusUpdate] = useState(false);
  const listTotal = listdata.length;

  const handleAddListData = () => {
    if (datainput !== "") {
      setListData((listdata) => [
        ...listdata,
        { id: uuidv4(), name: datainput },
      ]);
      setDataInput("");
    }
  };

  const onKeyDownEnter = (event) => {
    if (event.key === "Enter" && datainput !== "") {
      setListData((listdata) => [
        ...listdata,
        { id: uuidv4(), name: datainput },
      ]);
      setDataInput("");
    }
  };

  const handldRemoveListData = (id) => {
    const remaininglistdata = listdata.filter((todo) => todo.id !== id);
    setListData(remaininglistdata);
  };

  useEffect(() => {
    const storedlistdata = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedlistdata) {
      setListData(storedlistdata);
    }
  }, []);

  useEffect(() => {
    if (listdata.length !== 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listdata));
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }, [listdata]);

  useEffect(() => {
    const storedlistdata = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedlistdata) {
      setListData(storedlistdata);
    }
  }, [statusupdate]);

  return (
    <DataContextToDo.Provider
      value={{
        datainput,
        setDataInput,
        handleAddListData,
        onKeyDownEnter,
        setListData,
        handldRemoveListData,
        setStatusUpdate,
        statusupdate
      }}
    >
      <div className="App-header">
        <h1 className="text-3xl font-bold underline mb-6">
          To Do List Storage-Key
        </h1>
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-lef">
          <InputNewData />
        </div>
        <div className="list-total text-right text-base mt-6 flex justify-between items-end">
          <ModalTotal />
          <span>{listTotal} items</span>
        </div>
        <div
          className="max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-left text-zinc-600 text-base"
          style={{ width: "32rem", minHeight: "10rem" }}
        >
          {listdata.map((item, index) => (
            <div key={item.id}>
              <DataList item={item} />
              <hr />
            </div>
          ))}
        </div>
      </div>
    </DataContextToDo.Provider>
  );
}

export { DataContextToDo };
export default Content;
