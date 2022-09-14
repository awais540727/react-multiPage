import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './navbar/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './navbar/Footer';
import Todo from './components/usecallback/Todo';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="todo" element={<Todo />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
