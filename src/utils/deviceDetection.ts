/**
 * Utility to check for mobile devices.
 * @returns {boolean} - True if the user agent indicates a mobile device.
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

/**
 * A simple hook to get the device type.
 * In a real-world scenario, this could be expanded to include more details
 * like screen size, device memory, etc., for more granular control.
 */
import { useEffect, useState } from 'react';

export const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  return { isMobile };
};