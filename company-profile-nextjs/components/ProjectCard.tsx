import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  className?: string;
};

export default function ProjectCard({
  slug,
  title,
  category,
  description,
  image,
  className = "",
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className={`rv-project-card ${className}`.trim()}
    >
      <div className="rv-project-image">
        <Image src={image} alt={title} loading="lazy" />
        <span className="rv-project-arrow">↗</span>
      </div>

      <div className="rv-project-info">
        <div>
          <p className="rv-project-category">{category}</p>
          <h3>{title}</h3>
          <p className="rv-project-description">{description}</p>
        </div>
      </div>
    </Link>
  );
}
