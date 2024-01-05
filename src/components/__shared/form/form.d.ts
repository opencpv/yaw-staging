type SearchInputProps = {
    placeholder?: string;
    onPressEnter: () => void;
}

type CheckboxProps = {
    value: string;
    isSelected?: boolean;
    onValueChange?: () => void;
    label?: string;
    labelColor?: string;
    labelSize?: string;
}