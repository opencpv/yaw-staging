type SearchInputProps = {
    placeholder?: string;
    onPressEnter: () => void;
}

type CheckboxProps = {
    name: string;
    isSelected: boolean;
    onValueChange: () => void;
    label?: string;
}