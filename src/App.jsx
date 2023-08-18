import './App.css'
import Cads from './components/Cads'
import {sajans} from './data';
import ShowHidde from './components/ShowHidde';

function App() {
  const sajansList = sajans.map(sjj =>{
    return <Cads title={sjj.name} description={sjj.description} image={sjj.image}/>
  })

  return (
    <div className='App'>
      <section className='state-Container'>
        <ShowHidde/>
      </section>
    </div>
  )
}

export default App

