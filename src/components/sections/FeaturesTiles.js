import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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

  const sectionHeader = {
    title: 'Rankings',
    paragraph: 'See top performing artists this week.'
  };

  const leaguesHeader = {
    title: 'Leagues',
    paragraph: 'Compete with other Dazzle users to build the top performing portfolio.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div>
            <table className="styled-table">
              <thead>
                  <tr>
                      <th>Artist</th>
                      <th>Rank</th>
                      <th>Weekly Gains (%)</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Jack Harlow</td>
                      <td>1</td>
                      <td>+35%</td>
                  </tr>
                  <tr className="active-row">
                      <td>Martin Garrix</td>
                      <td>2</td>
                      <td>+22%</td>
                  </tr>
                  <tr className="active-row">
                      <td>Taylor Swift</td>
                      <td>3</td>
                      <td>+18%</td>
                  </tr>
                  <tr className="active-row">
                      <td>Harry Styles</td>
                      <td>4</td>
                      <td>+12%</td>
                  </tr>
              </tbody>
            </table>
            </div>
            <br></br>
          <br></br>
          <SectionHeader data={leaguesHeader} className="center-content" />
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
                    Death Metal
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
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;