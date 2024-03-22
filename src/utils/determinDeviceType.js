export default function determineDeviceType(parsedUserAgent) {
    if (parsedUserAgent.device.type === 'mobile') {
      return 'mobile';
    }
    if (parsedUserAgent.device.type === 'tablet') {
      return 'tablet';
    }
    return 'desktop';
  }
  