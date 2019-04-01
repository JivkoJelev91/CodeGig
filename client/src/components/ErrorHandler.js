import React from 'react';

const ErrorHandler = (props) => {
  const { errors } = props;
  return (
    <div>
      {errors.map((error, key) => {
        return  <div className="error" key={key}>
                    <p className="errorText">{error.text}</p>
                </div>
      })}
    </div>
  )
}
export default ErrorHandler;