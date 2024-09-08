import ProjectsTableV2 from "@/components/Dashboard/ProjectsTableV2";
import DashboardLayout from "./layout";
import ProjectsTable from "@/components/Dashboard/ProjectsTable";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <div>Welcome to Dashboard</div>
            <div className="flex gap-[32px] w-full h-full">
                <div className="min-w-[256px] h-screen border border-[#ff0000]">
                    Hello
                </div>
                <div className="flex flex-col max-h-screen w-[calc(100%-300px)]">
                    <ProjectsTableV2 />
                    <div className="h-[80px] border border-black">
                        Verify data
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
