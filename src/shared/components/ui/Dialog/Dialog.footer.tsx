interface DialogFooterProps {
    children: React.ReactNode;
}

export default function DialogFooter({children}: DialogFooterProps) {
    return (
        <footer>
            {children}
        </footer>
    )   
}