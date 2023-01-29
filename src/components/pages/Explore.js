import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './../sections/partials/SectionHeader';
import Image from '../elements/Image';
import Header from '../layout/Header';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
/*
const Explore = ({
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
    
  }
*/

const Explore = ({ className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
    ...props }) => {

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
            paragraph: 'Put a one liner here about how this will be an immersive experience for the users.'
          };
        
          const leaguesHeader = {
            title: 'Mint your NFTs',
            paragraph: ''
          };

        return (
        <>
        <Header navPosition="right" className="reveal-from-bottom" />
        <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          
            <br></br>
          <br></br>
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
                    src={require('./../../assets/images/artists/1.png')}
                    alt="Features tile icon 02"
                    width={300}
                    height={100} />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <Image
                    src={require('./../../assets/images/artists/2.png')}
                    alt="Features tile icon 02"
                    width={300}
                    height={100} />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <Image
                    src={require('./../../assets/images/artists/3.png')}
                    alt="Features tile icon 02"
                    width={300}
                    height={100} />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <Image
                    src={require('./../../assets/images/artists/4.png')}
                    alt="Features tile icon 02"
                    width={300}
                    height={100} />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <Image
                    src={require('./../../assets/images/artists/5.png')}
                    alt="Features tile icon 02"
                    width={300}
                    height={100} />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <Image
                    src={require('./../../assets/images/artists/6.png')}
                    alt="Features tile icon 02"
                    width={300}
                    height={100} />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <Image
                    src={require('./../../assets/images/artists/7.png')}
                    alt="Features tile icon 02"
                    width={300}
                    height={100} />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <Image
                    src={require('./../../assets/images/artists/8.png')}
                    alt="Features tile icon 02"
                    width={300}
                    height={100} />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <Image
                    src={require('./../../assets/images/artists/9.png')}
                    alt="Features tile icon 02"
                    width={300}
                    height={100} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
        </>
    )};

export default Explore;