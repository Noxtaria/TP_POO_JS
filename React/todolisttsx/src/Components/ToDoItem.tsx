import { PureComponent } from "react";
import "./ToDoItem.css";

interface Props {}

interface State {}

class ToDoItem extends PureComponent<Props, State> {
  private static _count = 0;
  private _id: number;
  private _isDone: boolean;

  constructor(
    private title: string,
    private description: string,
    private dueDate: Date,
    props: Props
  ) {
    super(props);
    this._id = ++ToDoItem._count;
    this._isDone = false;
  }

  render() {
    return (
      <>
        <div className="box-task">
            <div className="header-box">
            <h2>Todos</h2>
            <hr />
            </div>
          <div className="task-item">
            
          </div>
        </div>
      </>
    );
  }
}

export default ToDoItem;
