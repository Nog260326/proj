import {Button_Componenet} from './components/ButtonComponent/Button_Componenet';
import ButtonWrapper from './components/wrraper/buttonWrapper';
import './App.css';
import { WrapWithLoader } from './components/wrraper/WithLoaderFunc';

const Loader = WrapWithLoader(Button_Componenet)

function App() {
  return (
    <>
      <div>
        <Loader />
      </div>
    </>
  )
}

export default App
