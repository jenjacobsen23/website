export function useScrollToSection() {
  const scrollToSection = (sectionId: string, offset: number = 20) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return { scrollToSection };
}
