import "./style.css";
import { useState } from "react";

const content = [
  `saved`,
  `well that was easy`,
  `you can leave now`,
  `seriously`,
  `stop clicking`,
];

function SaveTheWorld() {
  const [index, setIndex] = useState(0);

  const [currentContent, setCurrentContent] = useState(
    `Click here to save the world`
  );

  function next() {
    setIndex(index + 1);
    setCurrentContent(content[index]);
  }
  return (
    <section id="savetheworld">
      <span onClick={next}>{currentContent}</span>
    </section>
  );
}

export default SaveTheWorld;
