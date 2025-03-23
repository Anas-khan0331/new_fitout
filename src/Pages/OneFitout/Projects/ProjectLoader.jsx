export default async function ProjectLoader() {
  try {
    const res = await fetch("/project.json");
    if (!res.ok) {
      throw new Error(`Failed to fetch project data: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error loading project:", error);
    throw error; // Re-throw to let parent components handle the error
  }
}
