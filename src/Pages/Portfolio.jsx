import { PROJECTS_DATA } from "../data/projectsData";
import { useNavigate } from "react-router-dom";

export default function PortfolioPage() {
  const projects = Object.entries(PROJECTS_DATA).map(([id, data]) => ({
    id,
    ...data,
  }));

  if (projects.length < 5) return null;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* FIRST 5 — Custom layout */}
      <div className="grid grid-cols-3 gap-6 mb-20">
        <ProjectCard project={projects[0]} className="col-span-2 row-span-2" />
        <ProjectCard project={projects[1]} />
        <ProjectCard project={projects[2]} />
        <ProjectCard project={projects[3]} />
        <ProjectCard project={projects[4]} className="col-span-2" />
      </div>

      {/* REST — Normal grid */}
      <div className="grid grid-cols-3 gap-6">
        {projects.slice(5).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

/* =====================
   CARD COMPONENT
===================== */
function ProjectCard({ project, className = "" }) {
  const navigate = useNavigate();
  return (
    <div
    onClick={() => navigate(`/projects/${project.id}`)}
      className={`bg-white rounded-xl overflow-hidden border border-gray-200 flex flex-col ${className}`}
    >
      {/* Image */}
      <div className="w-full aspect-[16/10] bg-teal-50">
        <img
          src={project.portfolioImage}
          alt={project.portfolioTitle}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex-1">
        {/* Tags */}
        <div className="flex gap-2 mb-2 flex-wrap">
          {project.tags?.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 border rounded-md text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-semibold text-base">{project.portfolioTitle}</h3>

        <p className="text-sm text-gray-600 mt-1">{project.portfolioDesc}</p>
      </div>
    </div>
  );
}
