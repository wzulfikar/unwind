import { cx, BaseTheme } from "@twind/core";

const base = {
  badge: `border border-current uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide`,
};

const types: Record<string, (color: Props["color"]) => string> = {
  outline: (color) => `text-${color}-500`,
  neon: (color) => `border-${color}-500 text-${color}-500 bg-${color}-100`,
  solid: (color) => `border-${color}-500 text-white bg-${color}-500`,
};

type Props = {
  children: React.ReactNode;
  type?: keyof typeof types;
  color?: keyof BaseTheme["colors"];
  styles?: StyleOverride<typeof base>;
};

export const Badge = ({
  children,
  type = "outline",
  color = "gray",
  styles,
}: Props) => {
  return (
    <strong className={cx(base.badge, styles?.badge, types[type](color))}>
      {children}
    </strong>
  );
};
