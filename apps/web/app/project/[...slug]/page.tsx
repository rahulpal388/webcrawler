export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <h1 className=" text-2xl ">project name is {slug}</h1>
      </div>
    </>
  );
}
