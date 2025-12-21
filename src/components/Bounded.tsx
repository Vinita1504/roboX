import { ElementType, ReactNode, forwardRef } from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
};

export const Bounded = forwardRef<HTMLElement, BoundedProps>(
  ({ as: Comp = "section", className, children, fullWidth = false, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx(
          !fullWidth && "px-6 [.header+&]:pt-44 [.header+&]:md:pt-32",
          className,
        )}
        {...restProps}
      >
        {fullWidth ? (
          children
        ) : (
          <div className="mx-auto w-full max-w-6xl">{children}</div>
        )}
      </Comp>
    );
  },
);

Bounded.displayName = "Bounded";
