import "./style.css";
import { useState } from "react";

function HowToPlay() {
  const [joy, updateJoy] = useState(false);
  const [toggle, updateToggle] = useState(`pHide`);

  function toggleWithCondition() {
    updateJoy(!joy);
  }

  function toggleWithCSS() {
    if (toggle === "pHide") {
      updateToggle("pShow");
    } else {
      updateToggle("pHide");
    }
  }

  return (
    <section id="htp">
      <button onClick={toggleWithCSS}> How To play with css </button>

      <p className={toggle}>
        To get under way, click 'Start'. Once you have started the quiz, type an
        answer into the box and either hit enter or click the submit button. If
        you are right, it will fill in the correct slot in the table. Keep
        entering more answers until you've successfully completed the quiz - or
        the timer runs out. If you do not want to play any more, just hit the
        'Give up!' button. You can then reveal the answers you missed - or have
        another go.
      </p>
      <button onClick={toggleWithCondition}>
        {" "}
        How To play with Condition{" "}
      </button>
      {joy && (
        <p>
          To get under way, click 'Start'. Once you have started the quiz, type
          an answer into the box and either hit enter or click the submit
          button. If you are right, it will fill in the correct slot in the
          table. Keep entering more answers until you've successfully completed
          the quiz - or the timer runs out. If you do not want to play any more,
          just hit the 'Give up!' button. You can then reveal the answers you
          missed - or have another go.
        </p>
      )}
    </section>
  );
}

export default HowToPlay;
