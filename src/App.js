import Header from './components/Header/header.jsx';
import Nav from './components/Nav/nav.jsx';
import About from './components/About/about.jsx';
import ProjectList from './components/ProjectList/projectList.jsx';
import ContactForm from './components/Contact/contact.jsx';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <ProjectList />
      <ContactForm />
    </div>
  );
}

export default App;
