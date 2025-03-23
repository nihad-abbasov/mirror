import { ProjectDetailsView } from "@/views/ProjectDetailsView";
import { projects } from "@/lib/data/projects";
import { notFound } from "next/navigation";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return <ProjectDetailsView project={project} />;
}
