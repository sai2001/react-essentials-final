import reactImg from "../assets/react.svg"
import "./Header.css"

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const des = reactDescriptions[genRandomInt(2)]
  return (
    <header>
      <img src={reactImg} alt='react icon' />
      <h1>React Essentials</h1>
      <p>
        {des} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}