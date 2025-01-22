import { useState } from "react";
import Header from "../components/header";
import "../styles/first.css";
import image from "../images/Group 814.png";

export default function FirstScreen() {
  
  const [gameStateRef, setGameStateRef] = useState({
    current: {
      currentScreen: "first", 
      state1: {
        mixedFraction: {
          whole: 3,
          numerator: 2,
          denominator: 4,
        },
      },
    },
  });

  const goToNextSlide = () => {
    setGameStateRef((prevState) => {
      const nextScreen =
        prevState.current.currentScreen === "first"
          ? "second"
          : prevState.current.currentScreen === "second"
          ? "third"
          : prevState.current.currentScreen === "third"
          ? "fourth"
          : prevState.current.currentScreen === "fourth"
          ? "fifth"
          : "completed";

      return {
        ...prevState,
        current: { ...prevState.current, currentScreen: nextScreen },
      };
    });
  };

  
  const renderSlideContent = () => {
    const { currentScreen } = gameStateRef.current;
    const { mixedFraction } = gameStateRef.current.state1;

    switch (currentScreen) {
      case "first":
        return (
          <div className="container">
            <h2 className="level-title">Level 1</h2>
            <h1 className="heading">Mixed number to improper fraction</h1>
            <div className="fraction-box">
              {`${mixedFraction.whole} ${mixedFraction.numerator}/${mixedFraction.denominator} = ?/?`}
            </div>
            <button className="start-button" onClick={goToNextSlide}>
              Start &gt;&gt;
            </button>
          </div>
        );

      case "second":
        return (
          <div className="container-step1">
            <h2 className="step-title">Step 1: Sum of WHOLES & FRACTIONS</h2>
            <div className="instruction-box">
              <span className="fraction-display">
                {`${mixedFraction.whole} ${mixedFraction.numerator}/${mixedFraction.denominator} = ?/?`}
              </span>
              <span className="emoji">🤔</span>
            </div>
            <div className="step-instructions">Sum of WHOLES & FRACTIONS</div>
            <div className="drag-drop-area">
              <div className="pick-area">
                <div className="pick-item">{mixedFraction.whole}</div>
                <div className="pick-item">
                  {mixedFraction.numerator}/{mixedFraction.denominator}
                </div>
                <div className="pick-label">pick from here</div>
              </div>
              <div className="drop-area">
                <div className="drop-box">
                  <span className="box-label">WHOLES</span>
                </div>
                <div className="plus-sign">+</div>
                <div className="drop-box">
                  <span className="box-label">FRACTION</span>
                </div>
                <div className="drop-label">drop here</div>
              </div>
            </div>
            <div className="result-box">
              {`${mixedFraction.whole} ${mixedFraction.numerator}/${mixedFraction.denominator} = `}
              <span className="result-highlight">{mixedFraction.whole} wholes</span> +
              <span className="result-highlight">
                {mixedFraction.numerator}/{mixedFraction.denominator}
              </span>
            </div>
            <button className="next-step-button" onClick={goToNextSlide}>
              Step 2 &gt;&gt;
            </button>
          </div>
        );
        

        case "third":
          return (
            <div className="bg-pink-100 p-6 rounded-lg shadow-md max-w-md mx-auto">
              <h2 className="text-center text-pink-800 text-xl font-bold mb-4">
                Step 1: Wholes to Fractions
              </h2>
              <div className="bg-[#FFEAEA] p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-center text-black text-lg font-bold mb-4">
        Choose your slicer
      </h2>
      <div className="bg-white p-4 rounded-lg shadow-md flex">
 
        <div className="flex flex-col items-center w-1/3 border-r border-gray-300">
          <div className="mb-4">
            <img
              src="https://media.istockphoto.com/id/1310638919/photo/a-silver-pizza-cutter-alone.jpg?s=1024x1024&w=is&k=20&c=6yVeVbbliS7HwhBbRpNPDbIQXIk2reduGVEWd9LG6k4="
              alt="Red slicer"
              className="w-8 h-8"
            />
          </div>
          <div className="mb-4">
            <img
              src="https://media.istockphoto.com/id/1310638919/photo/a-silver-pizza-cutter-alone.jpg?s=1024x1024&w=is&k=20&c=6yVeVbbliS7HwhBbRpNPDbIQXIk2reduGVEWd9LG6k4="
              alt="Blue slicer"
              className="w-8 h-8"
            />
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/1310638919/photo/a-silver-pizza-cutter-alone.jpg?s=1024x1024&w=is&k=20&c=6yVeVbbliS7HwhBbRpNPDbIQXIk2reduGVEWd9LG6k4="
              alt="Yellow slicer"
              className="w-8 h-8"
            />
          </div>
        </div>

        <div className="flex flex-col w-2/3 pl-4">
          <button className="flex items-center mb-4 text-[#0645AD] font-medium">
            <span className="mr-2">Slices the pie in 4 pieces</span>
          </button>
          <button className="flex items-center mb-4 text-[#0645AD] font-medium">
            <span className="mr-2">Slices the pie in 3 pieces</span>
          </button>
          <button className="flex items-center text-[#0645AD] font-medium">
            <span className="mr-2">Slices the pie in 5 pieces</span>
          </button>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          className="bg-[#FF5E80] text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-[#FF3A60]"
          onClick={goToNextSlide}
          style={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)",
          }}
        >
          Slice
        </button>
      </div>
    </div>
  
            </div>
          );

      case "fourth":
        return (
          <div className="container">
            <h2 className="title">Step 3: Add the Fraction</h2>
            <div className="box">
              <div className="fraction-container">
                <div className="circle full"></div>
                <div className="circle full"></div>
                <div className="circle partial"></div>
              </div>
              <p className="text">
                So there are 
                <input type="text" className="input-box" /> 
                <span className="bold"> 1/4 </span> 
                sized pieces in 3 wholes.
              </p>
              <div className="awesome-box">
                <p className="awesome-text">AWESOME</p>
                <p className="equation">
                  3 wholes = <input type="text" className="input-box" /> /4
                </p>
              </div>
            </div>
            <button className="button" onClick={goToNextSlide}>
              Step 3 &gt;&gt;
            </button>
          </div>
        );

      case "fifth":
        return (
          <div className="container">
            <div className="header">
              <div className="level">Level 1</div>
              <div className="equation">
                <span>3</span>
                <sup>2</sup> / <sub>4</sub> = <span className="highlight">12 / 4</span> + 2 / 4
              </div>
              <div className="emoji">🤩</div>
            </div>
      
            <div className="content">
              <div className="left-box">
                <div className="step-title">
                  <span className="step-box">Step 1</span>
                  <h4>Add the Fraction</h4>
                </div>
                <div className="fraction-container">
                  <div className="circles">
                    <div className="circle green"></div>
                    <div className="circle green"></div>
                    <div className="circle green"></div>
                  </div>
                  <div className="plus">+</div>
                  <div className="circle half-green"></div>
                </div>
                <p className="fraction-label">12 / 4</p>
              </div>
      
              <div className="right-box">
                <h3>Select 2/4ths here</h3>
                <div className="fraction-selection">
                  <div className="large-circle">
                    <div className="quarter-filled"></div>
                  </div>
                </div>
                <div className="input-container">
                  <input type="number" className="input-box" placeholder="0" />
                  <span>/ 4</span>
                </div>
                <button className="done-btn">Done</button>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div>
            <h2 className="text-center text-white text-2xl font-bold">
              Error: Unknown Screen
            </h2>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
     
      <Header mixedFraction={gameStateRef.current.state1.mixedFraction} />

     
      {renderSlideContent()}
    </div>
  );
}
