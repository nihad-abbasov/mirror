import { ProjectDetailsView } from "@/views/ProjectDetailsView";
import { projects } from "@/lib/data/projects";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params; // ✅ you must await params here

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetailsView project={project} />;
}
