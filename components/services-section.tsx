'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Code,
  Database,
  Smartphone,
  Globe,
  Cog,
  Users,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useExpandable } from '@/hooks/use-expandable';

export function ServicesSection() {
  const isMobile = useIsMobile();
  const { isExpanded, toggleItem } = useExpandable();

  const services = [
    {
      icon: Globe,
      title: 'Web Application Development',
      description:
        'Custom web applications built with modern frameworks like Angular and React, designed for performance and scalability.',
      features: [
        'Responsive Design',
        'Performance Optimization',
        'SEO-Friendly',
        'Cross-browser Compatibility',
      ],
    },
    {
      icon: Database,
      title: 'Backend & API Development',
      description:
        'Robust backend systems and RESTful APIs using .NET Core, ensuring secure and efficient data management.',
      features: ['RESTful APIs', 'Database Design', 'Security Implementation', 'Cloud Integration'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'Cross-platform mobile applications using React Native, delivering native performance across iOS and Android.',
      features: [
        'Cross-platform',
        'Native Performance',
        'Offline Capabilities',
        'Push Notifications',
      ],
    },
    {
      icon: Code,
      title: 'Full-Stack Solutions',
      description:
        'End-to-end development services covering both frontend and backend, creating cohesive digital experiences.',
      features: [
        'Complete Solutions',
        'Technology Integration',
        'Scalable Architecture',
        'Maintenance Support',
      ],
    },
    {
      icon: Cog,
      title: 'System Integration',
      description:
        'Seamless integration of existing systems and third-party services to streamline your business processes.',
      features: [
        'API Integration',
        'Data Migration',
        'Legacy System Updates',
        'Workflow Automation',
      ],
    },
    {
      icon: Users,
      title: 'Consulting & Strategy',
      description:
        'Technical consulting to help you make informed decisions about technology stack and development approach.',
      features: [
        'Technology Assessment',
        'Architecture Planning',
        'Code Reviews',
        'Best Practices',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Comprehensive development services to bring your vision to life, from concept to
            deployment and beyond.
          </p>
        </div>

        <div
          className={`grid gap-8 ${
            isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const expanded = isExpanded(index);
            const ChevronIcon = expanded ? ChevronUp : ChevronDown;

            return (
              <Card
                key={index}
                className={`bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group ${
                  isMobile ? 'cursor-pointer' : ''
                }`}
                onClick={isMobile ? () => toggleItem(index) : undefined}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                    {isMobile && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={e => {
                          e.stopPropagation();
                          toggleItem(index);
                        }}
                        className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground cursor-pointer"
                      >
                        <ChevronIcon className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardHeader>
                {(!isMobile || expanded) && (
                  <CardContent className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
