import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Details from './components/Details.jsx';
import Set0 from './components/Set0.jsx';
import Set1 from './components/Set1.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main className='container'>
      <Details />
      <Set1 />
      <Set0 />
      </main>
      <Footer />
    </>
  )
}