interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="p-4 border-1-4 border-blue-600 bg-green-50 rounded">
      <h2 className="text-x1 font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-3">{description}</p>
      <p className="text-sm text-gray-900">
        <strong>Technologies: </strong>
        {technologies.join(", ")}
      </p>
      {link && (
        <p className="mt-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 hover:underline"
          >
            ViewProject
          </a>
        </p>
      )}
    </article>
  );
}
