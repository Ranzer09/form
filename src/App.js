import React from 'react';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import Page1 from './components/perDetails';
import Page2 from './components/addrDetails';
import Page3 from './components/payDetails';
import Summary from './components/Summary';

function App() {


  return (
      <div className='text-white max-w-fit w-auto mx-auto  mt-16 p-10 rounded backdrop-blur-sm'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
