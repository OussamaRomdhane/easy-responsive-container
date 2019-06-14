import * as React from 'react';

import { isEmpty, isObject } from './utils';
import useGetDeviceInfo from './useGetDeviceInfo';

const getComponent = (
  props: ResponsiveContainerProps,
  size: Size
): NullableStringElement => {
  if (!isObject(props) || isEmpty(props)) {
    return null;
  }
  if (size && props[size]) {
    return props[size] || null;
  }
  if (props.children) {
    return props.children;
  }
  return null;
};

const ResponsiveContainer = (
  props: ResponsiveContainerProps
): NullableElement => {
  const deviceInfo = useGetDeviceInfo();
  const component = getComponent(props, deviceInfo.size);
  return typeof component === 'string' ? <>{component}</> : component;
};

export default ResponsiveContainer;

export { useGetDeviceInfo };
