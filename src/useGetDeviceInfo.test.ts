import { getDeviceInfo } from './useGetDeviceInfo';

describe('#useGetDeviceInfo', () => {
  // Test xs case
  it('should render xs element', () => {
    const width = 576;
    const height = 576;

    Object.defineProperty(document.documentElement, 'clientWidth', {
      writable: true,
      configurable: true,
      value: width
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      writable: true,
      configurable: true,
      value: height
    });
    expect(getDeviceInfo()).toEqual({ width, height, size: 'xs' });
  });

  // Test sm cases
  it('should render sm element', () => {
    const width = 577;
    const height = 577;

    Object.defineProperty(document.documentElement, 'clientWidth', {
      writable: true,
      configurable: true,
      value: width
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      writable: true,
      configurable: true,
      value: height
    });
    expect(getDeviceInfo()).toEqual({ width, height, size: 'sm' });
  });
  it('should render sm element', () => {
    const width = 768;
    const height = 768;

    Object.defineProperty(document.documentElement, 'clientWidth', {
      writable: true,
      configurable: true,
      value: width
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      writable: true,
      configurable: true,
      value: height
    });
    expect(getDeviceInfo()).toEqual({ width, height, size: 'sm' });
  });

  // Test md cases
  it('should render md element', () => {
    const width = 769;
    const height = 769;

    Object.defineProperty(document.documentElement, 'clientWidth', {
      writable: true,
      configurable: true,
      value: width
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      writable: true,
      configurable: true,
      value: height
    });
    expect(getDeviceInfo()).toEqual({ width, height, size: 'md' });
  });
  it('should render md element', () => {
    const width = 992;
    const height = 992;

    Object.defineProperty(document.documentElement, 'clientWidth', {
      writable: true,
      configurable: true,
      value: width
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      writable: true,
      configurable: true,
      value: height
    });
    expect(getDeviceInfo()).toEqual({ width, height, size: 'md' });
  });

  // Test lg case
  it('should render lg element', () => {
    const width = 993;
    const height = 993;

    Object.defineProperty(document.documentElement, 'clientWidth', {
      writable: true,
      configurable: true,
      value: width
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      writable: true,
      configurable: true,
      value: height
    });
    expect(getDeviceInfo()).toEqual({ width, height, size: 'lg' });
  });
  it('should render lg element', () => {
    const width = 1220;
    const height = 1220;

    Object.defineProperty(document.documentElement, 'clientWidth', {
      writable: true,
      configurable: true,
      value: width
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      writable: true,
      configurable: true,
      value: height
    });
    expect(getDeviceInfo()).toEqual({ width, height, size: 'lg' });
  });

  // Test xl cases
  it('should render xl element', () => {
    const width = 1221;
    const height = 1221;

    Object.defineProperty(document.documentElement, 'clientWidth', {
      writable: true,
      configurable: true,
      value: width
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      writable: true,
      configurable: true,
      value: height
    });
    expect(getDeviceInfo()).toEqual({ width, height, size: 'xl' });
  });
});
