type ShareDataProps = {
  /**
   * Default is the current url
   */
  url?: string;
  title?: string;
  content?: string;
  className?: string;
  hideLabel?: boolean;
  classNames?: {
    base?: string;
    icon?: string;
    label?: string;
  };
  label?: string;
  children?: React.ReactNode;
  /**
   * The size of the icon
   */
  size?: number | string;
};
