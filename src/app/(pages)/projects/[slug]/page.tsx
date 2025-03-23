import { ProjectDetailsView } from "@/views/ProjectDetailsView";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  return <ProjectDetailsView slug={params.slug} />;
}
