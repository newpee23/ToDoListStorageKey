import React, { useState, useContext } from "react";
import { FaTrash, FaEdit, FaBackspace } from "react-icons/fa";
import InputEditData from "./InputEditData";
import { DataContextToDo } from './Content';

function DataList({ item }) {
  
  const [isActive, setIsActive] = useState(false);

  const {
    handldRemoveListData,
    setStatusUpdate,
    statusupdate
  } = useContext(DataContextToDo);

  const RemoveListData = () => {
    handldRemoveListData(item.id);
  };

  const handleClickEdit = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex justify-between items-center">
      {isActive ? (
        <InputEditData item_id={item.id} item_name={item.name} setIsActive={setIsActive} setStatusUpdate={setStatusUpdate} statusupdate={statusupdate}/>
      ) : (
        <p className="p-3 w-10/12 break-words">{item.name}</p>
      )}

      <p className="cursor-pointer flex w-2/12 justify-center">
        {isActive ? (
          <FaBackspace
            className="mr-2 text-amber-400"
            onClick={handleClickEdit}
          />
        ) : (
          <FaEdit className="mr-2 text-amber-400" onClick={handleClickEdit} />
        )}
        <FaTrash className="ml-2 text-rose-700" onClick={RemoveListData} />
      </p>
    </div>
  );
}

export default DataList;
