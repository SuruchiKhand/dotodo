import axios from "axios"

const BASE_URL = "http://localhost:8000/dotodo_api"

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall() 
    console.log("RESPONSE:", response)
    console.log("RESPONSE DATA:", response.data)
    return response.data // this doesnt look like a promise but gets converted to a promise due to async
  }
  catch (e) {
    console.error("tryCatchFetch Error: ", e)
    return null
  }
}

const DoToDoAPI = {}
DoToDoAPI.getAllTaskLists = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}task-lists/`))
}

export default DoToDoAPI

// axios will return a promise; a promise that we are gonna get some response either we succeed or failed
//axiosCall is async function