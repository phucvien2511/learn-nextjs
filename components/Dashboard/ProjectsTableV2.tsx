"use client";

import { styled } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getWorkDates } from "./helper/getWorkDates";
import "./styles.css";
import { Project, WorkDate } from "./helper/types";

console.log(tableCellClasses);
const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.root}`]: {
        minWidth: "144px",
    },
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#f5f5f5",
        fontWeight: 600,
        maxWidth: "144px",
        borderLeft: "1px solid #e0e0e0",
        borderRight: "1px solid #e0e0e0",
    },
    [`&.${tableCellClasses.body}`]: {
        maxWidth: "144px",
        borderLeft: "1px solid #e0e0e0",
        borderRight: "1px solid #e0e0e0",
    },
    [`&.${tableCellClasses.head}:first-of-type`]: {
        position: "sticky",
        left: 0,
        zIndex: 99,
    },
}));

const StrippedTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(even)": {
        backgroundColor: "#f5f5f5",
    },
    "& td:first-of-type": {
        position: "sticky",
        left: 0,
        backgroundColor: "#fff",
        outline: "1px solid #e0e0e0",
    },
    "&:nth-of-type(even) td:first-of-type": {
        backgroundColor: "#f5f5f5",
    },
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

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

//Create row data property base on the number of projects
const createRowData = (workDate: WorkDate, projectNum: number) => {
    const rowData: { [key: string]: any } = {
        workDate,
    };

    for (let i = 1; i <= projectNum; i++) {
        rowData[`pj${i}`] = "Data";
    }

    return rowData;
};
const workDates = getWorkDates(9, 2024);
const rows = workDates.map((item) => createRowData(item, testProjects.length));
export default function ProjectsTableV2() {
    return (
        <TableContainer component={Paper}>
            <Table stickyHeader aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Project number</StyledTableCell>
                        {testProjects.map((project, index) => (
                            <StyledTableCell key={index} align="center">
                                {project.project_number}
                            </StyledTableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <StyledTableCell>Project name</StyledTableCell>
                        {testProjects.map((project, index) => (
                            <StyledTableCell key={index} align="center">
                                {project.project_name}
                            </StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <StrippedTableRow key={index}>
                            <StyledTableCell>
                                <div className="flex justify-between gap-[0.5rem]">
                                    <span>{row.workDate.date}</span>
                                    <span className="font-bold">
                                        {row.workDate.day}
                                    </span>
                                </div>
                            </StyledTableCell>
                            {testProjects.map((_, index) => (
                                <StyledTableCell key={index} align="center">
                                    {row[`pj${index + 1}`]}
                                </StyledTableCell>
                            ))}
                        </StrippedTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
