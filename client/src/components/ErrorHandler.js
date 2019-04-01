import React from 'react';

const styles = {
    color:'red',
    fontSize: '1.3em'
};

const ErrorHandler = (props) => {
  const { errors } = props;
  return (
    <div>
      {errors.map((error, key) => {
        return  <div className="error" key={key}>
                    <p style={styles}>{error.text}</p>
                </div>
      })}
    </div>
  )
}
export default ErrorHandler;