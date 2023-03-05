import deleteicon from "../images/icon-delete.svg"
const Delete = ({ userId, id, handleDeleteMemes}) => {

function handleDeleteClick() {
    fetch(`http://localhost:9292/memes/${id}/users/${userId}`, {
      method: "DELETE",
    });
    console.log("delete called")
    handleDeleteMemes(id);
  }

    return (  
        <button onClick={handleDeleteClick}
            className=" hover:cursor focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 ">
           <img src={deleteicon} alt="delete" />
        </button>
    )
}
 
export default Delete;