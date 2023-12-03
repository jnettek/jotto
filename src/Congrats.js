
import React from 'react';

/**
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if `success`
 * prop)
 */



export default (props) => {
  return props.success ? (
    <div data-test="component-congrats">
      <span data-test="congrats-message">
        Congratulations! You guessed the word!
      </span>
    </div>
  ) : (
    <div data-test="component-congrats" />
  );
};
