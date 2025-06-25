import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NoteDetailPage from './pages/NoteDetailPage';
import toast from "react-hot-toast"

const App = () => {
  return (
    <div data-theme='forest'>
      {/* Pure Tailwind CSS */}
      <button onClick={() => toast.success("Congrats")}
        className='text-red-500 p-4 bg-pink-300'>
        Test Button
      </button>
      {/* Daisy UI */}
      <button className='btn btn-outline'>Daisy UI</button>
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/note/:id' element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;