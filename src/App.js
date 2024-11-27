import './App.css';
import { Homepage, Music, Notification, UserProfile, Login, Register } from './pages';
import { Navbar, Sidebar, Footer, Playbar, ThemeSetting, Button, Playlist, Album, Artist, Infomation } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useStateContext } from './contexts/ContextProvider';
import { BasicLayout, PageLayout } from './layouts';
function App() {
  const { isActiveSidebar } = useStateContext();
  return (
    <div className='overflow-x-auto min-w-[49rem] relative min-h-[35rem] h-[100vh] bg-main-bg text-white'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageLayout><Homepage /></PageLayout> } />
          <Route path='/playlist/:id' element={<PageLayout><Playlist /></PageLayout>} />
          <Route path='/album/:id' element={<PageLayout><Album /></PageLayout>} />
          <Route path='/artist/:id' element={<PageLayout><Artist /></PageLayout>} />
          <Route path='/music' element={<PageLayout><Music /></PageLayout>} />
          <Route path='/notification' element={<PageLayout><Notification /></PageLayout>} />
          <Route path='/userprofile' element={<PageLayout><UserProfile /></PageLayout>} />
          <Route path='/login' element={<BasicLayout><Login /></BasicLayout> } />
          <Route path='/register' element={<BasicLayout><Register /></BasicLayout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
