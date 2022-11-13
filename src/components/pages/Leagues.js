import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './../sections/partials/SectionHeader';
import Image from '../elements/Image';
import Input from '../elements/Input';
import Header from '../layout/Header';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Leagues = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const featuredHeader = {
    title: 'Featured Leagues',
    paragraph: 'Check out the hottest leagues right now.'
  };

  const createHeader = {
    title: 'Create League',
    paragraph: 'Invite friends, Add your tags, Set a timeline.'
  };

  const yourHeader = {
    title: 'Your Leagues',
    paragraph: ''
  };

  const leaguesHeader = {
    title: 'Leagues',
    paragraph: 'Compare your rankings with the fellow Dazzlers in your league.'
  };

  const sectionHeader = {
    title: 'League Rankings',
    paragraph: 'Our biggest leagues.'
  };

  return (
      <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
        <SectionHeader data={leaguesHeader} className="center-content" />
<Input id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Search for leagues">
            <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
            </svg>
          </Input> 
          <br></br>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div>
          <table className="styled-table">
          <thead>
              <tr>
                  <th>League</th>
                  <th>Users</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Pop </td>
                  <td>150,297</td>
              </tr>
              <tr className="active-row">
                  <td>Up-and-Comers</td>
                  <td>135,367</td>
              </tr>
              <tr className="active-row">
                  <td>Hip-Hop</td>
                  <td>107,412</td>
              </tr>
              <tr className="active-row">
                  <td>Productivity Punchers</td>
                  <td>92,853</td>
              </tr>
          </tbody>
        </table>
            </div>
            <br></br>
          <br></br>
          <SectionHeader data={featuredHeader} className="center-content" />
          <div className={tilesClasses}>
          
          
          <br></br>
          <div className="tiles-item reveal-from-bottom">
          <div className="tiles-item-inner">
            <div className="features-tiles-item-header">
              <div className="features-tiles-item-image mb-16">
                <Image
                  src={require('./../../assets/images/gold_trophy.jpg')}
                  alt="Features tile icon 01"
                  width={300}
                  height={300} />
              </div>
            </div>
            <div className="features-tiles-item-content">
              <h4 className="mt-0 mb-8">
                Pop Kings
                </h4>
              <p className="m-0 text-sm">
                </p>
            </div>
          </div>
        </div>

        <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
          <div className="tiles-item-inner">
            <div className="features-tiles-item-header">
              <div className="features-tiles-item-image mb-16">
                <Image
                  src={require('./../../assets/images/fancy_trophy.jpg')}
                  alt="Features tile icon 02"
                  width={300}
                  height={300} />
              </div>
            </div>
            <div className="features-tiles-item-content">
              <h4 className="mt-0 mb-8">
                Jazz Supremes
                </h4>
              <p className="m-0 text-sm">
                </p>
            </div>
          </div>
        </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/hands_trophy.jpg')}
                      alt="Features tile icon 03"
                      width={300}
                      height={300} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Rookie Championship
                    </h4>
                  <p className="m-0 text-sm">
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/blue_trophy.jpg')}
                      alt="Features tile icon 04"
                      width={300}
                      height={300} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    UK's top
                    </h4>
                  <p className="m-0 text-sm">
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/crystal_trophy.jpg')}
                      alt="Features tile icon 05"
                      width={300}
                      height={300} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Grammy League
                    </h4>
                  <p className="m-0 text-sm">
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/black_trophy.jpg')}
                      alt="Features tile icon 06"
                      width={300}
                      height={300} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm">
                    </p>
                </div>
              </div>
            </div>
            </div>
            <br></br>
            <SectionHeader data={createHeader} className="center-content" />
            <Input id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Search for leagues">
            <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
            </svg>
          </Input>  
          <br></br>
          <br></br>

        <SectionHeader data={yourHeader} className="center-content" />
        <div className={tilesClasses} >
        <div className="tiles-item reveal-from-bottom">
          <div className="tiles-item-inner">
            <div className="features-tiles-item-header">
              <div className="features-tiles-item-image mb-16">
                <Image
                  src={require('./../../assets/images/gold_trophy.jpg')}
                  alt="Features tile icon 01"
                  width={300}
                  height={300} />
              </div>
            </div>
            <div className="features-tiles-item-content">
              <h4 className="mt-0 mb-8">
                Pop Kings
                </h4>
              <p className="m-0 text-sm">
                </p>
            </div>
          </div>
        </div>
        
        <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
          <div className="tiles-item-inner">
            <div className="features-tiles-item-header">
              <div className="features-tiles-item-image mb-16">
                <Image
                  src={require('./../../assets/images/fancy_trophy.jpg')}
                  alt="Features tile icon 02"
                  width={300}
                  height={300} />
              </div>
            </div>
            <div className="features-tiles-item-content">
              <h4 className="mt-0 mb-8">
                Jazz Supremes
                </h4>
              <p className="m-0 text-sm">
                </p>
            </div>
          </div>
        </div>

        <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
          <div className="tiles-item-inner">
            <div className="features-tiles-item-header">
              <div className="features-tiles-item-image mb-16">
                <Image
                  src={require('./../../assets/images/hands_trophy.jpg')}
                  alt="Features tile icon 03"
                  width={300}
                  height={300} />
              </div>
            </div>
            <div className="features-tiles-item-content">
              <h4 className="mt-0 mb-8">
                Rookie Championship
                </h4>
              <p className="m-0 text-sm">
                </p>
            </div>
          </div>
          </div>
          </div>
          </div>
        </div>
    
    </section>
    <section
  {...props}
  className={outerClasses}
>


  
 </section>
 </>
);
}

Leagues.propTypes = propTypes;
Leagues.defaultProps = defaultProps;

export default Leagues;
