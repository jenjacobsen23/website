import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        'Angular',
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'SASS',
        'Angular Material',
        'Bootstrap',
        'Tailwind CSS',
      ],
      icon: '🎨',
    },
    {
      title: 'Backend Development',
      skills: [
        '.NET Core',
        'C#',
        'ASP.NET',
        'Web API',
        'Entity Framework',
        'EF Core 6',
        'Node.js',
        'RESTful APIs',
        'SQL',
      ],
      icon: '⚙️',
    },
    {
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'Mobile UI/UX', 'Cross-platform Development'],
      icon: '📱',
    },
    {
      title: 'Tools & DevOps',
      skills: [
        'Git',
        'VS Code',
        'SSMS',
        'Azure DevOps',
        'CI/CD Pipelines',
        'Azure PaaS',
        'SonarQube',
        'Cypress',
        'Docker',
        'SQL Server',
        'MySQL',
        'PostgreSQL',
      ],
      icon: '🛠️',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            A comprehensive toolkit for building modern, scalable applications across the full
            technology stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
