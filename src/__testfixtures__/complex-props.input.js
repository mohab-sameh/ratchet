import PropTypes from "prop-types"
import React from "react"

export function MyComponent(props) {
  return <span />
}

MyComponent.propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
  optionalNode: PropTypes.node,
  optionalElement: PropTypes.element,
  optionalElementType: PropTypes.elementType,
  optionalEnum: PropTypes.oneOf(["News", "Photos"]),
  optionalUnion: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),
  optionalObjectWithShape: PropTypes.shape({
    optionalProperty: PropTypes.string,
    requiredProperty: PropTypes.number.isRequired,
  }),
  optionalObjectWithStrictShape: PropTypes.exact({
    optionalProperty: PropTypes.string,
    requiredProperty: PropTypes.number.isRequired,
  }),
  requiredArray: PropTypes.array.isRequired,
  requiredBool: PropTypes.bool.isRequired,
  requiredFunc: PropTypes.func.isRequired,
  requiredNumber: PropTypes.number.isRequired,
  requiredObject: PropTypes.object.isRequired,
  requiredString: PropTypes.string.isRequired,
  requiredSymbol: PropTypes.symbol.isRequired,
  requiredNode: PropTypes.node.isRequired,
  requiredElement: PropTypes.element.isRequired,
  requiredElementType: PropTypes.elementType.isRequired,
  requiredEnum: PropTypes.oneOf(["News", "Photos"]).isRequired,
  requiredUnion: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  requiredArrayOf: PropTypes.arrayOf(PropTypes.number).isRequired,
  requiredObjectOf: PropTypes.objectOf(PropTypes.number).isRequired,
  requiredObjectWithShape: PropTypes.shape({
    optionalProperty: PropTypes.string,
    requiredProperty: PropTypes.number.isRequired,
  }).isRequired,
  requiredObjectWithStrictShape: PropTypes.exact({
    optionalProperty: PropTypes.string,
    requiredProperty: PropTypes.number.isRequired,
  }).isRequired,
}
