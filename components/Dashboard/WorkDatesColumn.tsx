import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
} from "@nextui-org/react";
import { getWorkDates } from "./helper/getWorkDates";
type WorkDatesColumnProps = {
    month?: number;
    year?: number;
};

const WorkDatesColumn = (props: WorkDatesColumnProps) => {
    const { month = 9, year = 2024 } = props;
    const workDates = getWorkDates(month, year);
    const workDatesNum = workDates.length;
    const tableClassNames = {
        wrapper: "p-0",
        table: "overflow-x-scroll h-[calc(100vh-144px)]",
        thead: "sticky",
        th: "[&>div]:min-h-[40px] text-black text-sm p-0",
        tr: "h-[32px] rounded-none p-0",
        td: "before:w-[144px] w-[144px] min-w-[144px] border-x-2 shadow-xl py-0",
    };
    const headerCellStyles =
        "flex items-center justify-center border border-[#a5a5a5]";
    const firstRows = workDates.map((item, index) => {
        return {
            key: `row-${index}`,
            pj_info: (
                <div className="flex justify-between gap-[0.5rem]">
                    <span>{item.date}</span>
                    <span className="font-bold">{item.day}</span>
                </div>
            ),
        };
    });
    console.log(workDates);
    const firstColumns = [
        {
            key: "pj_info",
            label: (
                <>
                    <div className={headerCellStyles + " justify-start"}>
                        Project number
                    </div>
                    <div className={headerCellStyles + " justify-start"}>
                        Project name
                    </div>
                </>
            ),
        },
    ];
    return (
        <Table
            aria-label="First column table"
            classNames={tableClassNames}
            isStriped
            // isHeaderSticky
            // removeWrapper
        >
            <TableHeader columns={firstColumns}>
                {(column) => (
                    <TableColumn key={column.key} align="center">
                        {column.label}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody items={firstRows}>
                {(item) => (
                    <TableRow key={item.key}>
                        {(columnKey) => (
                            <TableCell>
                                {getKeyValue(item, columnKey)}
                            </TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};

export default WorkDatesColumn;
