import style from "./Button.module.css";

/**
 * @param {{
 *  onClick: () => void,
 *  children: React.ReactNode,
 *  variant: "info" | "action" | "destructive"
 *  disabled?: boolean,
 *  isLoading?: boolean,
 * }} param0
 * @returns
 */
export function Button({
  onClick,
  children,
  variant,
  disabled = false,
  isLoading = false,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={[
        style.button,
        style[`${variant}`],
        isLoading ? style.loading : null,
      ].join(" ")}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
