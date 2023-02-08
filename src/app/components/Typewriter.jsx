import { Heading } from '@chakra-ui/react';
import React from 'react';
import useTypewriter from '../hooks/useTypewriter';

const Typewriter = ({ text, fontSize }) => {
  const typedText = useTypewriter(text);

  return <Heading fontSize={fontSize}>Learn{" "}{typedText}</Heading>;
};

export default Typewriter;
