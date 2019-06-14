# ResponsiveContainer

#### A small lib to have a container that supports Bootstrap responsiveness using hooks (???)

**What does it do?**

It provides a `ResponsiveContainer` component that will display elements according to [Bootstrap breakpoints](https://getbootstrap.com/docs/4.3/layout/overview/#responsive-breakpoints) and that will fall to `children` if the breakpoint is not specified in the props.

**How to use it?**

```js
<ResponsiveContainer
  xs={<XSComponent />}
  sm={<SMComponent />}
  md={<MDComponent />}
  lg={<LGComponent />}
  xl={<XLComponent />}
>
  {<FallbackComponent />}
</ResponsiveContainer>
```

**How it works?**

`<ResponsiveContainter />` adds an onResize listener and adapts rendring according to prefixed screen sizes (see `useGetDeviceInfo.ts` for more information)
