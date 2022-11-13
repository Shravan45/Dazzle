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

const Artist = ({ className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
    ...props }) => {

    return (
    <>
    <div className="grid-container">
        <div className="item1"><Header navPosition="right" className="reveal-from-bottom" /></div>
        <div className="item2">
        <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <Image className="ind-img"
                    src={require('./../../assets/images/artists/1.png')}
                    alt="Features tile icon 02" />
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="item3">
            <h1>Mura Masa</h1>
            <p className='para-musa'>Mura Masa is an electronic music artist and producer from Guernsey. He is most well known for his song "Love$ick", featuring A$AP Rocky and "What if I Go?"</p>
        </div>  
        <div className="item5"><div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <Image
                  className="graph-img"
                    src={require('./../../assets/images/Graph.png')}
                    alt="Features tile icon 02"
                    width={9000}
                    height={1000} />
                  </div>
                </div>
              </div>
            </div></div>
    </div>
    </>
    )};

export default Artist;