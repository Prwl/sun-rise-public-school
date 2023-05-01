import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container reveal-from-bottom">
        <div
          className={innerClasses}
        >
          <div className="cta-action">
            <p className="m-0 mb-32 reveal-from-bottom" style={{color:'white'}} data-reveal-delay="400">
                <ul>
                <li style={{textAlign: 'left'}}>Name - Sun Rise Model Public School</li>
                <li style={{textAlign: 'left'}}>Address - Kandi, Dholran, Himachal Pradesh</li>
                <li style={{textAlign: 'left'}}>Email ID - ______@___.__</li>
                <li style={{textAlign: 'left'}}>(M) - 98163-25450, 94186-54359</li>
                </ul>
                </p>
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;