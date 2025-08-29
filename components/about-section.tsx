import { Card, CardContent } from '@/components/ui/card';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Full Stack Developer specialising in Front-End Web Development with experience
              building and managing websites and applications of all sizes—from start-up solutions
              to large-scale systems for government departments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans modern web technologies, from crafting intuitive user interfaces
              with Angular and React Native to building robust backend systems with .NET and SQL
              databases. I pride myself on writing clean, maintainable code that scales with your
              business.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am open to opportunities where I can contribute, learn and grow. I enjoy working on
              a diverse range of projects, whether small, complex, or long-term commitments—no
              challenge is too big or too small.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When you work with me, you're not just getting a developer – you're getting a problem
              solver who's committed to turning your vision into expertly coded reality. If you have
              an opportunity that aligns with my skills and experience, feel free to get in touch.
              I'd love to connect!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">Creative problem-solving approach</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">Maintainable, scalable solutions</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Collaboration</h3>
                <p className="text-sm text-muted-foreground">Working closely with your team</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground">Fast, optimized applications</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
