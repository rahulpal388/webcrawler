import { ProjectComponent } from "../../../components/projectComponent";
import { SideBar } from "../../../components/sidebar";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <div className="h-full w-full flex ">
        <ProjectComponent />
      </div>
    </>
  );
}
