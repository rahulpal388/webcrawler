import { NavBar } from "../../../components/navBar";

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className=" h-screen w-screen flex flex-col  ">
                <div className=" h-12 w-full   ">
                    <NavBar />
                </div>
                <div className=" flex-1 ">{children}</div>
            </div>
        </>
    );
}
