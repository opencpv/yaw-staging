type ModalProps = {
    onClose?: () => void;
    onOpen?: () => void;
    onOpenChange: () => void;
    isOpen: boolean;
    header?: React.ReactNode;
    body: React.ReactNode;
    footer?: React.ReactNode;
    size?: "xs"| "sm"| "md"| "lg"| "xl"| "2xl"| "3xl"| "4xl"| "5xl"| "full";
    footerAlignment?: "start" | "end" | "center" | "space-between" 
    isDismissible?: boolean;
    closeButton?: React.ReactNode;
    hideCloseButton?: boolean;
}