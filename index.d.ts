// Types definitions

type Dimensions = {
  width: number;
  height: number;
};

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type DeviceInfo = Dimensions & { size: Size };

type NullableElement = JSX.Element | null;
type NullableStringElement = NullableElement | string;

type ResponsiveContainerProps = { [node in Size]?: NullableStringElement } & {
  children?: NullableStringElement;
};
