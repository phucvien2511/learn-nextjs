import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/react";
const DescriptionColumn = () => {
    const tableClassNames = {
        wrapper: "p-0",
        table: "overflow-x-scroll h-[calc(100vh-144px)]",
        thead: "sticky",
        th: "[&>div]:min-h-[40px] text-black text-sm p-0",
        tr: "h-[32px] rounded-none p-0",
        td: "before:w-[144px] w-[144px] min-w-[144px] border-x-2 shadow-xl py-0",
    };
    return (
        <Table
            aria-label="Description table"
            classNames={tableClassNames}
            isStriped
        >
            <TableHeader>
                <TableColumn align="center">
                    <div className="h-[80px] flex items-center justify-center">
                        Description
                    </div>
                </TableColumn>
            </TableHeader>
            <TableBody>
                {Array.from({ length: 23 }, (_, index) => (
                    <TableRow key={`row-${index}`}>
                        <TableCell>{index}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default DescriptionColumn;
