import "./ToDoForm.css"

interface Props {}

const ToDoForm = (props: Props) => {
  return(
    <>
        <div className="box-form">
            <div className="header-box">
            <h2>ToDoForm</h2>
            <hr />
            <form action="">
                <label htmlFor="Title">Title</label>
                <div>
                <input type="text" />
                </div>
                <label htmlFor="Description">Description</label>
                <div>
                <textarea name="description" id="description" cols={30} rows={10}></textarea>
                </div>
                <label htmlFor="DueDate">DueDate</label>
                <div>
                <input type="date" placeholder="jj/mm/aaaa" />
                </div>
                <button>Envoyer</button>
            </form>
            </div>
        </div>
  </>
  ) 
};

export default ToDoForm;