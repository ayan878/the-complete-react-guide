import reactImg from "./assets/react-core-concepts.png";
import jsxImg from "./assets/jsx-ui.png";
import configImg from "./assets/config.png";
import stateMgmtImg from "./assets/state-mgmt.png";

export const coreConcepts = [
  {
    title: "Components",
    description:
      "The core building UI block - compose the user interface by combining multiple components",
    img: reactImg,
  },
  {
    title: "JSX",
    description:
      "Return the (potentially dynamic) HTML code to define the actual markup that will be rendered",
    img: jsxImg,
  },
  {
    title: "Props",
    description:
      "Make Components configurable (and therefore reusable) by passing input data to them",
    img: configImg,
  },
  {
    title: "State",
    description:
      "React-managed data which, when changed, causes the components to re-render & the UI to update",
    img: stateMgmtImg,
  },
];


export const EXAMPLES = {
  components: {
    title: "Components",
    description:
      "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: "JSX",
    description:
      "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: "Props",
    description:
      "Components accept arbitrary inputs called props. They are like function arguments.",
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: "State",
    description:
      "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};
