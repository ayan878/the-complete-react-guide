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
