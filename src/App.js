import { useState, useEffect } from "react";
import Slider from "./components/Slider";
import "./style.css";

function App() {
  const [slides, setSlides] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1649892471229-8edc42d50dea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      title: "First slide",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1649796758696-d724aa366447?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      title: "Second slide",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1648737119359-510d4f551382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      title: "Third slide",
    },
  ]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex(currentSlideIndex + 1 > slides.length - 1 ? 0 : currentSlideIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
    console.log("f")
  }, [currentSlideIndex]);
  return (
    <div className="App">
      <Slider
        slides={slides}
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
      />
    </div>
  );
}

export default App;
