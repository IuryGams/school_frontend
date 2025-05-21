import { TableProvider } from "@/shared/contexts/SearchInputContext";


interface TableRootProps {
    children: React.ReactNode;
}

function TableRoot({children}: TableRootProps) {
    return (
        <TableProvider>
            {children}
        </TableProvider>
    )
}


export default TableRoot;