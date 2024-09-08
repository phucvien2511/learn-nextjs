import { FC } from "react";

type DashboardLayoutProps = {
    children: React.ReactNode;
};

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
    return <div className="text-black">{children}</div>;
};

export default DashboardLayout;
