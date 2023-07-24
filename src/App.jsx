import Header from './components/Header'
import TaskList from './components/TaskList'

import './App.css'

function App() {
  

  return (
    
      <div>
      <Header />
      <TaskList />
      <div>

      <h2>You have 2 pending tasks</h2>
      <button>Clear All</button>

      </div>
        

      </div> 
    
  )
}

export default App