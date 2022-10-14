import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import DoToDoAPI from "../api/DoToDoAPI"

function HomePage(props) {

  //states - without using state values our internal values will update but display will never update

  const [taskLists, setTaskList] = useState([])

  //effects
  //useEffect shouldn't be async
  useEffect(() => {LoadTaskLists()},[]) //empty array means do this only once on intial render
  
  const LoadTaskLists = async () => {
    const data = await DoToDoAPI.getAllTaskLists()
    setTaskList(data ? data : []) //set it back to empty list instead of null so that we always have a list to work with
  }
  //render
  //map function ceates a new function based on the original values, doesn't modify original item
  const renderTaskLists = () => {
    return taskLists.map((taskList, index) => {
      return <Link key={ index } to={`/task-lists/${taskList.id}` }><p>{ taskList.name }</p></Link>
    })
    // const elements = []
    // for (let i = 0; i < 5; i++) {
    //   elements.push(<Link key={ i } to={`/task-lists/${i}`}><p>Task List Summary</p></Link>)
    // }
    // return elements
  }
  return (
    <div>
      <h2>Home Page</h2>
      <hr />

      <form>
        <label> New Task List: </label>
        <input placeholder="enter name"input/>
        <input placeholder="enter description"input/>
        <button>Add Task List</button>
      </form>
      <hr/>

      <h3> All Task Lists:</h3>
      { renderTaskLists() }
    </div>
  )
}
export default HomePage;