import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import { CreatePage } from './pages/CreatePage.jsx';
import { DetailPage } from './pages/DetailPage.jsx';
import { LinksPage } from './pages/LinksPage.jsx';
import { ToastContainer } from 'react-toastify';
import { RequireAuth } from './hoc/RequireAuth.jsx';


function App() {
  return (
    <>
      <div className='wrapper'>

        <main className='main'>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<LinksPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/detail' element={<DetailPage />} />
             

              <Route path='/create' element={
              <RequireAuth>
                 <CreatePage />
              </RequireAuth>
             } />
            
            </Route>
          </Routes>
        </main>
        <footer className='footer'>Footer</footer>
      </div>

    <ToastContainer/>
    </>
  );
}

export default App;
