// Import necessary functions and components from other files
import { getPosts } from "@/app/utils/utils";  // Function to fetch project data from MDX files
import { Column } from "@/once-ui/components";  // UI component for vertical layout
import { ProjectCard } from "@/components";     // Component that displays individual project cards

// Define the type/shape of props (similar to function parameters in Python)
// ? means optional parameter
interface ProjectsProps {
  range?: [number, number?];  // Optional array with 1 or 2 numbers, like Python's list slicing
}

// Main component function that takes 'range' as a parameter
export function Projects({ range }: ProjectsProps) {
  // Get all project data from MDX files in the projects directory
  // Similar to Python: all_projects = get_posts(["src", "app", "work", "projects"])
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Sort projects by date, newest first
  // Similar to Python: sorted_projects = sorted(all_projects, key=lambda x: x.metadata.publishedAt, reverse=True)
  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  // If range is provided, slice the array (like Python's list slicing)
  // Example: range=[1,3] would show projects 1 through 3
  // If no range, show all projects
  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  // Return JSX (React's template syntax, similar to HTML)
  return (
    // Column is a layout component that stacks children vertically
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {/* Map over projects array (like Python's: for post in displayed_projects) */}
      {displayedProjects.map((post, index) => (
        // For each project, render a ProjectCard component with these props
        <ProjectCard
          priority={index < 2}           // True for first two projects
          key={post.slug}                // Unique identifier
          href={`work/${post.slug}`}     // Link to project detail page
          images={post.metadata.images}   // Project images from MDX
          title={post.metadata.title}     // Project title
          description={post.metadata.summary}  // Project description
          content={post.content}          // Main content
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}  // Team member avatars
          link={post.metadata.link || ""} // External project link
        />
      ))}
    </Column>
  );
}