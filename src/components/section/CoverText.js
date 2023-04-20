import { gsap } from "gsap";
import { useEffect } from "react";

const title = "헤주가 다 헤주";
const description = "FRONTEND DEVELOPER";
const TextAnimation = () => {
  useEffect(() => {
    // Dynamically adjust the stagger value based on the word count.
    // The more words there are the faster the stagger value.
    const wordCount = description.split(" ").length; // A constant variable storing the number of words in the description string. Uses the split() function to split the string into an array at every space and then returns the length of that array.
    const division = 0.08 / Math.log10(wordCount + 1); // A constant variable holding a value used to calculate the stagger value. Calculates a division value based on the word count using logarithmic function.
    const stagger = Math.min(Math.max(0.04 / (division * wordCount), 0), 0.08).toFixed(4); // A constant variable holding the calculated stagger value, using a Math.min() and Math.max() function to constrain the stagger value to be between 0 and 0.08. The toFixed() function is used to round the value to four decimal places.

    const tl = gsap.timeline();
    tl.fromTo(
      ".text-span",
      {
        yPercent: 100,
      },
      {
        duration: 0.5,
        // If the stagger value is lower then 0.01, the stagger value is 0.
        stagger: stagger < 0.01 ? 0 : stagger,
        yPercent: 0,
      }
    ).delay(0.5);
  });
  return (
    <div className='section'>
      <div className='text__wrapper'>
        <h1>
          {/* Split the text into individual words */}
          {title.split(" ").map((line, index) => (
            <span key={index} className='text-line'>
              <span className='text-span'>{line}&nbsp;</span>
            </span>
          ))}
        </h1>
        <p>
          {/* Split the text into individual words */}

          {description.split(" ").map((line, index) => (
            <span key={index} className='text-line'>
              <span className='text-span'>{line}&nbsp;</span>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default TextAnimation;
