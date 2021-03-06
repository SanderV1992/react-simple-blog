import React from 'react'


const Navigation = props => (
  <div>
    {props.duration ? (
      <div className="slider-navigation">
        <button className="slider-navigation-button__left">
          <i className="fa fa-arrow-circle-left fa-3" />
        </button>
        <button className="slider-navigation-button__right">
          <i className="fa fa-arrow-circle-right fa-3" />
        </button>
      </div>
    ) : (
      <div className="slider-navigation">
        <button onClick={props.onLeftButtonClick} className="slider-navigation-button__left">
          <i className="fa fa-arrow-circle-left fa-3" />
        </button>
        <button onClick={props.onRightButtonClick} className="slider-navigation-button__right">
          <i className="fa fa-arrow-circle-right fa-3" />
        </button>
      </div>
    )}
  </div>
)

export default Navigation
