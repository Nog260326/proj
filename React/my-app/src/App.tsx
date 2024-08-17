import {Button_Componenet} from './components/ButtonComponent/Button_Componenet';
import ButtonWrapper from './components/wrraper/buttonWrapper';
import './App.css';
import { WrapWithLoader } from './components/wrraper/WithLoaderFunc';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Page2 from './components/ButtonComponent/page2';

const Loader = WrapWithLoader(Button_Componenet)

function App() {
    
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
              <div id="topLayout">
                <Outlet/>
              </div>
            }>
            <Route index element={<Loader />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="*" element={<div>sorry bad rount </div>} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
