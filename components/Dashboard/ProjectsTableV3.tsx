"use client";
import {
    Table,
    TableBody,
    TableHeader,
    TableColumn,
    TableRow,
    TableCell,
    getKeyValue,
} from "@nextui-org/react";
import { Project, WorkDate } from "./helper/types";
import { getWorkDates } from "./helper/getWorkDates";
import { col } from "framer-motion/client";
import test from "node:test";

const ProjectsTableV3 = () => {
    const testProjects: Project[] = [
        {
            project_name: "Project 1",
            project_number: "1",
        },
        {
            project_name: "Project 2",
            project_number: "2",
        },
        {
            project_name: "Project 3",
            project_number: "3",
        },
        {
            project_name: "Project 4",
            project_number: "4",
        },
        {
            project_name: "Project 5",
            project_number: "5",
        },
        {
            project_name: "Project 6",
            project_number: "6",
        },
        {
            project_name: "Project 7",
            project_number: "7",
        },
        {
            project_name: "Project 8",
            project_number: "8",
        },
        {
            project_name: "Project 9",
            project_number: "9",
        },
    ];
    const columns = [
        {
            key: "work_date",
            label: (
                <>
                    <div>Project number</div>
                    <hr></hr>
                    <div>Project name</div>
                </>
            ),
        },
        ...testProjects.map((project) => ({
            key: project.project_number,
            label: (
                <>
                    <div>{project.project_number}</div>
                    <hr></hr>
                    <div>{project.project_name}</div>
                </>
            ),
        })),
    ];

    const createRowData = (workDate: WorkDate, projectNum: number) => {
        const rowData: { [key: string]: any } = {
            // work_date: workDate.date + " " + workDate.day,
            work_date: (
                <div className="flex justify-between w-[144px]">
                    <span>{workDate.date}</span>
                    <span>{workDate.day}</span>
                </div>
            ),
        };

        for (let i = 1; i <= projectNum; i++) {
            rowData[i] = "Data";
            rowData["key"] = `row-${i}`;
        }

        return rowData;
    };
    const workDates = getWorkDates(9, 2024);
    const rows = workDates.map((item) =>
        createRowData(item, testProjects.length)
    );
    // Customize styles for table
    const classNames = {
        base: ["w-full"],
        tr: ["[&>th]:first:text-xl"], // Change header row style
    };
    return (
        <Table isStriped isHeaderSticky classNames={classNames}>
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn key={column.key}>{column.label}</TableColumn>
                )}
            </TableHeader>
            <TableBody items={rows}>
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

export default ProjectsTableV3;
