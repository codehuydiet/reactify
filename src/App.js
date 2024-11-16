import './App.css';
import { Homepage, Music, Notification, Playlist, Podcasts, UserProfile } from './pages';
import { Navbar, Sidebar, Footer, Playbar, ThemeSetting, Button } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className='overflow-x-auto min-w-[49rem] relative h-[100vh] bg-main-bg text-white'>
      <BrowserRouter>
        <div className='min-w-[49rem] w-full h-14 flex items-center z-50 bg-main-bg'>
          <Navbar />
        </div>
        <div className='min-w-[49rem] absolute bottom-0 w-full flex items-center z-50 bg-main-bg'>
          <Playbar />
        </div>
        <div className="flex h-[calc(100vh-10.8rem)] self-stretch">
          <div className='relative '>
            <Sidebar className='' />
          </div>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/music' element={<Music />} />
            <Route path='/notification' element={<Notification />} />
            <Route path='/playlist' element={<Playlist />} />
            <Route path='/podcasts' element={<Podcasts />} />
            <Route path='/userprofile' element={<UserProfile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
