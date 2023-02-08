import { useState, useEffect } from 'react';

const useTypewriter = (textArray) => {
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    if (textArray[textIndex]) {
      const typing = setInterval(() => {
        index++;
        setTypedText(textArray[textIndex].substring(0, index));
        if (index === textArray[textIndex].length) {
          clearInterval(typing);
          setTimeout(() => {
            setTextIndex(textIndex + 1);
            if (textIndex === textArray.length - 1) {
              setTextIndex(0);
            }
          }, 1000);
        }
      }, 100);
      return () => clearInterval(typing);
    }
  }, [textArray, textIndex]);

  return typedText;
};

export default useTypewriter;