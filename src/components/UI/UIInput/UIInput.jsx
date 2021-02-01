/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import PropTypes from 'prop-types';

import './UIInput.scss';

const UIInput = (props) => {
  const {
    type, name, value, onChange, extraClassName, placeholder, required, autofocus,
  } = props;
  const componentClassName = extraClassName ? `ui-input ${extraClassName}` : 'ui-input';

  return (
    <input
      type={type}
      name={name}
      value={value}
      className={componentClassName}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      autoFocus={autofocus}
    />
  );
};

UIInput.defaultProps = {
  extraClassName: '',
  onChange: null,
  value: '',
  type: 'text',
  name: 'ui-input',
  placeholder: '',
  required: false,
  autofocus: false,
};

UIInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  extraClassName: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  autofocus: PropTypes.bool,
};

export { UIInput };