function HomePage(props) {
  
  //render
  const renderTaskLists = () => {
    const elements = []
    for (let i = 0; i < 5; i++) {
      elements.push(<p>Task List Summary</p>)
    }
    return elements
  }
  return (
    <div>
      <h2>Home Page</h2>
      <hr />

      <form>
        <input placeholder="enter name"input/>
        <input placeholder="enter description"input/>
        <input placeholder="enter name"input/>

      </form>

      <h3>Task Lists:</h3>
      { renderTaskLists() }
    </div>
  )
}
export default HomePage;