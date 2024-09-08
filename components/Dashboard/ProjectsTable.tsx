"use client";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
    ScrollShadow,
} from "@nextui-org/react";
import { getWorkDates } from "./helper/getWorkDates";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import "./styles.css";
import { useSearchParams } from "next/navigation";
import WorkDatesColumn from "./WorkDatesColumn";

const headerCellStyles =
    "flex items-center justify-center border border-[#a5a5a5]";

const columns = [
    {
        key: "pj-0",
        label: (
            <>
                <div className={headerCellStyles}>0</div>
                <div className={headerCellStyles}>Project A</div>
            </>
        ),
    },
    {
        key: "pj-1",
        label: (
            <>
                <div className={headerCellStyles}>1</div>
                <div className={headerCellStyles}>Project B</div>
            </>
        ),
    },
    {
        key: "pj-2",
        label: (
            <>
                <div className={headerCellStyles}>2</div>
                <div className={headerCellStyles}>Project C</div>
            </>
        ),
    },
    // Use loop to create pj-3 to pj-10
];
let i = 3;
while (i < 15) {
    columns.push({
        key: `pj-${i}`,
        label: (
            <>
                <div className={headerCellStyles}>999{i}</div>
                <div className={headerCellStyles}>
                    Project {String.fromCharCode(65 + i)}
                </div>
            </>
        ),
    });
    i++;
}
const ProjectsTable = () => {
    // get the month value from URL params currentMonth
    const searchParams = useSearchParams();
    const currentMonth = searchParams.get("currentMonth") || "9";

    const workDates = getWorkDates(Number(currentMonth), 2024);
    const workDatesNum = workDates.length;

    const rows = [
        {
            key: "row-0",
            "pj-0": "8",
            "pj-1": "8",
            "pj-2": "8",
        },
        {
            key: "row-1",
            "pj-0": "6",
            "pj-1": "8",
            "pj-2": "8",
        },
        // Fill remaining rows with empty data to match the number of work dates
        ...Array.from({ length: workDatesNum - 2 }, (_, index) => ({
            key: `row-${index + 2}`,
            "pj-0": " ",
            "pj-1": " ",
            "pj-2": " ",
        })),
    ];
    const tableClassNames = {
        wrapper: "p-0",
        table: "overflow-x-scroll h-[calc(100vh-144px)]",
        thead: "sticky",
        th: "[&>div]:min-h-[40px] text-black text-sm p-0",
        tr: "h-[32px] rounded-none p-0",
        td: "before:w-[144px] w-[144px] min-w-[144px] border-x-2 shadow-xl py-0",
    };

    return (
        <>
            <div>Projects Table</div>
            <ScrollSync>
                <div className="flex h-screen">
                    <ScrollSyncPane>
                        <div className="min-w-[144px] h-[calc(100vh-32px)] overflow-scroll no-scrollbar">
                            <WorkDatesColumn month={8} year={2023} />
                        </div>
                    </ScrollSyncPane>
                    <ScrollSyncPane>
                        <div className="min-w-[144px] h-[calc(100vh-32px)] overflow-scroll no-scrollbar">
                            <Table
                                aria-label="Detail table"
                                classNames={tableClassNames}
                                isStriped
                            >
                                <TableHeader columns={columns}>
                                    {(column) => (
                                        <TableColumn
                                            key={column.key}
                                            align="center"
                                        >
                                            {column.label}
                                        </TableColumn>
                                    )}
                                </TableHeader>
                                <TableBody items={rows}>
                                    {(item) => (
                                        <TableRow key={item.key}>
                                            {(colKey) => (
                                                <TableCell>
                                                    {getKeyValue(item, colKey)}
                                                </TableCell>
                                            )}
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </ScrollSyncPane>
                    <div>
                        <ScrollSyncPane>
                            <div className="min-w-[144px] h-[calc(100vh-32px)] overflow-scroll no-scrollbar"></div>
                        </ScrollSyncPane>
                    </div>
                </div>
            </ScrollSync>
        </>
    );
};

export default ProjectsTable;
