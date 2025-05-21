"use client";
import { createContext, useContext, useState } from "react";

interface TableContextType {
    search: string;
    setSearch: (value: string) => void;
}

const TableContext = createContext({} as TableContextType);

interface TableProviderProps {
    children: React.ReactNode;
}

function TableProvider({children}: TableProviderProps) {
    const [search, setSearch] = useState<string>("");

    return (
        <TableContext.Provider value={{ search, setSearch}}>
            {children}
        </TableContext.Provider>
    )
}

function useTableContext() {
    const context = useContext(TableContext);
    if (!context) throw new Error("useTableContext must be used within a TableProvider");
    return context;
}

export {
    TableProvider,
    useTableContext
}