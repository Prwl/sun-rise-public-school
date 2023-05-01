import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { useToasts } from 'react-toast-notifications';
import validator from 'validator';
import { send as emailJs } from 'emailjs-com';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Faqs = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [feedback, setFeedback] = useState('');
  const [enableButton, setEnableButton] = useState(true);
 
  const { addToast } = useToasts();

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const handleInputChange = (event) => {
    event.preventDefault();

    const target = event.target;
    const fieldName = target.name;
    const value = target.value;

    // eslint-disable-next-line default-case
    switch(fieldName) {
      case 'name': setName(value);
      break;
      case 'email': setEmail(value);
        validateEmail(event);
      break;
      case 'feedback': setFeedback(value);
      break;
    }
  }

  const sendMessage = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: name + " (" + email + ")",
      to_name: 'sunrisemodelpublicschool@gmail.com',
      message: feedback
    };
    emailJs("service_964m1ze", "template_oph72fn", templateParams)
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
          addToast('Sent Successfully', { appearance: 'success' });
        },
        function(err) {
          console.log("ERROR", `Status: ${err.status}, Message: ${err.text}`)
          addToast(`Status: ${err.status}, Message: ${err.text}`, { appearance: 'error' });
        }
      );
        setName('');
        setEmail('');
        setFeedback('');
  }

  const validateEmail = (e) => {
    let email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError(null)
    } else {
      setEmailError('Enter valid Email!')
    }
  }

  useEffect(() => {
    toggleButton();
  });

  const toggleButton = () => {
    setEnableButton(true)
    if (name.length !== 0 && feedback.length !== 0 && emailError === null)
    {
      setEnableButton(false);
    }
    return
  }
  
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
          <div className="container-xs">
          <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Email us your <span className="text-color-primary">queries</span>
                </p>
        <form
          className="reveal-from-bottom"
          data-reveal-delay="500"
        >
          <input
            className="m-0 mb-12"
            id="name"
            name="name"
            type="text"
            onChange={(e) => handleInputChange(e)}
            placeholder="Name"
            required
            value={name}
            style={{ width: "100%" }}
            rows={1}
          />
          <br />
          <input
            className="m-0 mb-12"
            id="email"
            name="email"
            type="email"
            onChange={(e) => handleInputChange(e)}
            placeholder="Email Address"
            required
            value={email}
            style={{ width: "100%" }}
            rows={1}
          />
          <span style={{
            fontWeight: 'bold',
            color: '#ec5959',
          }}>{emailError}</span>
          <br />
          <textarea
            className="m-0 mb-12"
            borderColor= 'trasnsparent'
            id="feedback"
            name="feedback"
            onChange={(e) => handleInputChange(e)}
            placeholder="What would you like to chat about?"
            required
            value={feedback}
            style={{ width: "100%", height: "250px" }}
          />
          <br />
          <input
            type="button"
            value="Send"
            className="button button-primary button-wide-mobile button-sm"
            disabled={enableButton}
            onClick={(e) => sendMessage(e)}
          />
        </form>
      </div>
      </div>
      </div>
      </div>
    </section>
  );
}

Faqs.propTypes = propTypes;
Faqs.defaultProps = defaultProps;

export default Faqs;