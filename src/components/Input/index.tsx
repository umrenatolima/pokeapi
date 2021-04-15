import React, {
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';

import { Container } from './styles';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasFocus, setHasFocus] = useState(false);
  const [hasValue, sethasValue] = useState(false);

  const handleInputFocus = useCallback(() => {
    setHasFocus(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setHasFocus(false);

    sethasValue(!!inputRef.current?.value);
  }, []);

  return (
    <Container hasFocus={hasFocus} hasValue={hasValue}>
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};

export default Input;
