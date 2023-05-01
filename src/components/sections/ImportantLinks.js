import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import certificateBuildingSafety from '../../assets/docs/certificate_building_safety.pdf'
import fireDeptLetter from '../../assets/docs/fire_dept_letter.pdf'
import certificateRegSocieties from '../../assets/docs/certificate_reg_societies.pdf'

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const ImportantLinks = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

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

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Important <span className="text-color-primary">Documents</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                <ul>
                  <li style={{textAlign: 'left'}}>Building Safety Certificate
                    <a href = {certificateBuildingSafety} target = "_blank" style={{float: 'right'}}><FontAwesomeIcon style={{cursor:'pointer', textAlign: 'right'}}icon={faEye} /></a>
                  </li> 
                  <li style={{textAlign: 'left'}}>Fire Department Certificate
                    <a href = {fireDeptLetter} target = "_blank" style={{float: 'right'}}><FontAwesomeIcon style={{cursor:'pointer'}}icon={faEye} /></a>
                  </li>
                  <li style={{textAlign: 'left'}}>Registration of Societies Certificate
                    <a href = {certificateRegSocieties} target = "_blank" style={{float: 'right'}}><FontAwesomeIcon style={{cursor:'pointer'}}icon={faEye} /></a>
                  </li>
                </ul>
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ImportantLinks.propTypes = propTypes;
ImportantLinks.defaultProps = defaultProps;

export default ImportantLinks;