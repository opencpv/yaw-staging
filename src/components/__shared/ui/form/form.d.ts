type SearchInputProps = {
  placeholder?: string;
  onSearch?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

type CheckboxProps = {
  value: string;
  isSelected?: boolean;
  onValueChange?: () => void;
  label?: string;
  labelColor?: string;
  color?: "default" | "primary";
  labelSize?: string;
};
