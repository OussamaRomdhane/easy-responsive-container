import React = require('react');
import { shallow, mount } from 'enzyme';

import ResponsiveContainer from '.';

describe('easy-responsive-container', () => {
  // Test it renders xs
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
    const XSElement = () => <span>XS Element</span>;
    const wrapper = shallow(<ResponsiveContainer xs={<XSElement />} />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find(XSElement).length).toEqual(1);
  });
  // Test it renders sm
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
    const SMElement = () => <span>SM Element</span>;
    const wrapper = shallow(<ResponsiveContainer sm={<SMElement />} />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find(SMElement).length).toEqual(1);
  });
  // Test it renders md
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
    const MDElement = () => <span>MD Element</span>;
    const wrapper = shallow(<ResponsiveContainer md={<MDElement />} />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find(MDElement).length).toEqual(1);
  });
  // Test it renders lg
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
    const LGElement = () => <span>LG Element</span>;
    const wrapper = shallow(<ResponsiveContainer lg={<LGElement />} />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find(LGElement).length).toEqual(1);
  });
  // Test it renders xl
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
    const XLElement = () => <span>XL Element</span>;
    const wrapper = shallow(<ResponsiveContainer xl={<XLElement />} />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find(XLElement).length).toEqual(1);
  });
  // Test it renders fallback
  it('should render fallback element', () => {
    const FallbackElement = () => <span>Fallback Element</span>;
    const wrapper = shallow(
      <ResponsiveContainer>
        <FallbackElement />
      </ResponsiveContainer>
    );
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find(FallbackElement).length).toEqual(1);
  });
  // Test it renders nothing
  it('should render nothing', () => {
    const wrapper = shallow(<ResponsiveContainer />);
    expect(wrapper.get(0)).toBeNull();
  });
  // Test it can be embedded
  it('should render embedded', () => {
    const wrapper = shallow(
      <div>
        <ResponsiveContainer>Testing embedded</ResponsiveContainer>
      </div>
    );
    expect(wrapper.children().length).toEqual(1);
    expect(wrapper.children().find(ResponsiveContainer).length).toEqual(1);
  });
  // Snapshot testing
  it('should match snapshot', () => {
    const wrapper = shallow(
      <ResponsiveContainer>Snapshot test</ResponsiveContainer>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
