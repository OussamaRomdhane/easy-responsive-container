import { useEffect, useState } from 'react';

export function getDeviceInfo(): DeviceInfo {
  // Getting viewport width and height
  const { width, height }: Dimensions = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  };

  // Formating getDeviceInfo result
  const result = (size: Size): DeviceInfo => ({ size, width, height });

  // To better undestand this please refer to:
  // https://getbootstrap.com/docs/4.3/layout/overview/#responsive-breakpoints
  if (width > 576 && width <= 768) {
    return result('sm');
  }
  if (width > 768 && width <= 992) {
    return result('md');
  }
  if (width > 992 && width <= 1220) {
    return result('lg');
  }
  if (width > 1220) {
    return result('xl');
  }
  return result('xs');
}

export default function(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState(getDeviceInfo());
  const handleResize = () => setDeviceInfo(getDeviceInfo());

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceInfo;
}
