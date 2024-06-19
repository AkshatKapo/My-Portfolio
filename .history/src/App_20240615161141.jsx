import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience'; // Corrected import path
import Projects from './components/projects';
import Contact from './components/Contact';
import Skill from './components/skill'
function App() {  
  useEffect(() => {
    function reveal() {
      let reveals = document.querySelectorAll(".reveal");// stores all the elements with class reveal into an array
  
      for (var i = 0; i < reveals.length; i++) { // iterates through reveals array, takes the each element with class reveals
        let windowHeight = window.innerHeight; // gets the height of the view port 
        let elementTop = reveals[i].getBoundingClientRect().top;// gets the postion of the element relative to the view port 
        let sectionHeight = reveals[i].offsetHeight;// calculates the hieght of the element 
        let elementVisible = windowHeight - elementTop > 0 ? windowHeight - elementTop : 0;// calculates the porton  of the element visible(Dstance between the top of the view port  and bottom of visible part of  the element)
        let visibilityRatio = elementVisible / sectionHeight; // Fraction of the element visible
  
        if (visibilityRatio > 0.5) {  // if the visibility ratio is greater than half then it will make it visible
          reveals[i].classList.add("active");// add class actve to the element to make it visible 
        } else { // if its less than 0.5 than it wll not display it or remove the class
          reveals[i].classList.remove("active");
        }
      }
    }
  
    window.addEventListener("scroll", reveal);// Add scroll as event listenere because wewe want to dsplay elements as user scrolls down
  
    // Call reveal initially to check the visibility of elements when the component mounts
    reveal();
  
    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);
  
  
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skill />
      <Experience />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;

/*
Mount: useEffect runs, reveal function defined and called, scroll event listener added.
Scroll: Each scroll triggers the reveal function to recalculate and update element visibility.
Unmount: Cleanup function removes the scroll event listener.
*/