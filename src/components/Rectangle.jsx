import React, { Component } from 'react';
import { Rect } from 'react-konva';
import PropTypes from 'prop-types';

export default class Rectangle extends Component {
  extractPositionInfo(id, target) {
    // console.log(target.scaleX());
    const transformation = {
      x: target.x(),
      y: target.y(),
      width: target.width() * target.scaleX(),
      height: target.height() * target.scaleY(),
    };

    this.props.handleTransform(id, transformation);
  }

  render() {
    const {
      title, color, x, y, updatePosition, id, draggable, width, height,
    } = this.props;

    return (
      <Rect
        name={title}
        x={x}
        y={y}
        scaleX={1}
        scaleY={1}
        width={width}
        height={height}
        stroke={color}
        strokeWidth={4}
        strokeScaleEnabled={false}
        onTransformEnd={event => this.extractPositionInfo(id, event.target)}
        onDragEnd={event => this.extractPositionInfo(id, event.target)}
        draggable={draggable}
      />
    );
  }
}

Rectangle.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  updatePosition: PropTypes.func.isRequired,
  handleTransform: PropTypes.func.isRequired,
  x: PropTypes.number,
  y: PropTypes.number,
  id: PropTypes.string.isRequired,
  draggable: PropTypes.bool.isRequired,
};
