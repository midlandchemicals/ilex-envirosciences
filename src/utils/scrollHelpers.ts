/**
 * Smooth scroll to a section by its ID or by finding an element with specific text content
 */
export const smoothScrollToSection = (
  sectionId: string,
  offset: number = 80
) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
