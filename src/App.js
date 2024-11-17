import './App.css';
import { Homepage, Music, Notification, UserProfile } from './pages';
import { Navbar, Sidebar, Footer, Playbar, ThemeSetting, Button, Playlist, Album, Artist, Infomation } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useStateContext } from './contexts/ContextProvider';
function App() {
  const { isActiveSidebar } = useStateContext();
  return (
    <div className='overflow-x-auto min-w-[49rem] relative min-h-[35rem] h-[100vh] bg-main-bg text-white'>
      <BrowserRouter>
        <div className='min-w-[49rem] w-full h-14 flex items-center z-50 bg-main-bg'>
          <Navbar />
        </div>
        <div className='min-w-[49rem] absolute bottom-0 w-full flex items-center z-50 bg-main-bg'>
          <Playbar />
        </div>
        <div className="flex flex-1 min-h-[calc(35rem-10.8rem)] h-[calc(100vh-10.8rem)] self-stretch">
          <div className='relative'>
            <Sidebar className='' />
          </div>
          <div className='flex-1'>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/playlist/:id' element={<Playlist />} />
              <Route path='/album/:id' element={<Album />} />
              <Route path='/artist/:id' element={<Artist />} />
              <Route path='/music' element={<Music />} />
              <Route path='/notification' element={<Notification />} />
              <Route path='/userprofile' element={<UserProfile />} />
            </Routes>
          </div>
          {isActiveSidebar ? '' : (
            <div className='basis-1/3'>
              <Infomation />
            </div>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
