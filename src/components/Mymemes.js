import { useState } from "react";
import Delete from "./Delete"
import Addmeme from "./Addmeme"

const Mymeme = ({ userId, myMemes, handleDeleteMemes, handleAddMemes, handleEditMeme }) => {
  const [editableMemeId, setEditableMemeId] = useState(null)

  const allMemes = myMemes
    ? myMemes.map((meme) => (
        <div key={meme.id} className={`text-gray-900 p-4 mt-10 bg-slate-200 border ml-20 rounded-xl shadow-sm ${
            editableMemeId === meme.id ? "border-gray-500" : ""
          }`}
        >
          <div className="flex justify-end">
            <div className="mr-2">
              <Delete
                userId={userId}
                id={meme.id}
                myMemes={myMemes}
                handleDeleteMemes={handleDeleteMemes}
              />
            </div>
            <div>
              <ion-icon
                name="create-outline"
                onClick={() => setEditableMemeId(meme.id)}
                className="text-2xl cursor-pointer"
              ></ion-icon>
            </div>
          </div>
          <p className="">
            {" "}
            <span className="text-gray-900 font-bold "></span>{" "}
            {editableMemeId === meme.id ? (
              <input
                type="text"
                value={meme.title}
                onChange={(e) => handleEditMeme(meme.id, { ...meme, title: e.target.value })}
              />
            ) : (
              meme.title
            )}{" "}
          </p>
          <p className="">
            {" "}
            <span className="text-gray-900 font-bold"> </span>
            {editableMemeId === meme.id ? (
              <input
                type="text"
                value={meme.message}
                onChange={(e) => handleEditMeme(meme.id, { ...meme, message: e.target.value })}
              />
            ) : (
              meme.message
            )}{" "}
          </p>
          {editableMemeId === meme.id ? (
            <button
              onClick={() => {
                setEditableMemeId(null);
              }}
              className="bg-teal-700 rounded-xl text-white py-2 px-4  mt-3"
            >
              Save
            </button>
          ) : null}
        </div>
      ))
    : null;

  return (
    <div className="grid grid-cols-2">
      <div className=" ">{allMemes}</div>
      <Addmeme handleAddMemes={handleAddMemes} userId={userId} />
    </div>
  );
};

export default Mymeme;