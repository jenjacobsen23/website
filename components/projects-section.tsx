'use client';

import type React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  FileText,
  Building2,
  Users,
  Globe,
  Server,
  Database,
  Shield,
  Zap,
  TestTube,
  Code,
} from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      icon: Building2,
      title: 'S.M.A.R.T APPLICATION',
      label: 'Corporate Application | 2018-2024',
      description:
        'Recruited by Brownstone Consulting Pty Ltd to spearhead the continued development and enhancement of the S.M.A.R.T. application, a mission-critical system for government operations, leveraging deep technical expertise and product knowledge from previous 12thLevel tenure.',
      features: [
        'Issue management system with 40% faster resolution times',
        'Data visualisation dashboards displaying high valued information and trends',
        'Integrated with external systems to pull relevant data',
        'Migrated from SharePoint 2010 to modern architecture with 99.9% uptime',
        'Enhanced scalability, performance, and maintainability for growing user base',
        'Won Minor Acquisition ADM Essington Lewis Award in 2021',
      ],
      technologies: ['TypeScript', 'Angular', 'C#', '.NET', 'SQL', 'Cypress'],
      technicalDetails: {
        architecture: [
          'Frontend: Angular with TypeScript for type-safe development',
          'Backend: .NET framework with C# for robust server-side logic',
          'Database: SQL Server with optimized query performance',
          'Testing: Cypress for end-to-end automated testing',
        ],
        database: [
          'Legacy SharePoint 2010 data migration to modern SQL architecture',
          'Optimized database schema for improved performance',
          'Data integrity maintenance during migration process',
          'Scalable design to support growing operational demands',
        ],
        apiEndpoints: [
          'RESTful API design following modern standards',
          'Secure endpoints with proper authentication',
          'Comprehensive API documentation',
          'Integration with existing government systems',
        ],
        security: [
          'Government-grade security compliance',
          'Secure authentication and authorization',
          'Data protection and privacy measures',
          'Regular security audits and updates',
        ],
        performance: [
          'Migration from legacy SharePoint to modern architecture',
          'Significant performance improvements over legacy system',
          'Optimized for high availability and reliability',
          'Scalable infrastructure to handle increased load',
        ],
        testing: [
          'Comprehensive Cypress end-to-end testing suite',
          'Automated testing for critical business processes',
          'Regression testing for system stability',
          'Performance testing and optimization',
        ],
      },
    },
    {
      icon: Users,
      title: 'BRAIN CHANGER',
      label: 'Corporate Application | 2018-2024',
      description:
        'Built the original version of this application that helps people living with chronic pain, focusing on user engagement and data tracking capabilities for improved health outcomes.',
      features: [
        'User-friendly interface to assist people living with chronic pain',
        'Daily mood scoring system and day-planning tools',
        'Secure user authentication and data protection',
        'Data visualisation to track progress over time',
        'Real time notifications',
        'User and licence management console',
      ],

      technologies: ['Angular', 'C#', '.NET Core', 'SQL Server', 'Azure'],
      technicalDetails: {
        architecture: [
          'Frontend: Angular with TypeScript for robust client-side development',
          'Backend: .NET Core Web API with clean architecture principles',
          'Database: SQL Server with optimized schema design',
          'Cloud: Azure hosting with scalable infrastructure',
        ],
        database: [
          'User profiles with health tracking data',
          'Comprehensive analytics tables for reporting',
          'Secure data storage with encryption',
          'Optimized queries for performance',
        ],
        apiEndpoints: [
          'GET /api/users - User management',
          'POST /api/tracking - Health data tracking',
          'GET /api/analytics - Performance analytics',
          'RESTful API with comprehensive documentation',
        ],
        security: [
          'Secure user authentication and authorization',
          'Data encryption for sensitive health information',
          'GDPR compliance for data protection',
          'Regular security audits and updates',
        ],
        performance: [
          'Optimized database queries for fast data retrieval',
          'Efficient caching strategies',
          'Azure CDN for global content delivery',
          'Responsive design for optimal user experience',
        ],
        testing: [
          'Unit tests with high code coverage',
          'Integration testing for API endpoints',
          'User acceptance testing',
          'Performance testing and optimization',
        ],
      },
    },
    {
      icon: Globe,
      title: 'BOOST HEALTH LABS',
      label: 'Corporate Application | Rebrand & Current Development',
      description:
        'Led complete app reskin and rebranding from Brain Changer to flip* (BOOST Health Labs), implementing new visual identity and continuing development of enhanced features for the health and wellness platform.',
      features: [
        'Complete visual rebrand and UI/UX overhaul',
        'Enhanced user experience with modern design patterns',
        'New feature development and platform expansion',
        'Ongoing maintenance and performance improvements',
      ],

      technologies: ['Angular', 'C#', '.NET Core', 'SQL Server', 'Azure'],
      technicalDetails: {
        architecture: [
          'Frontend: Updated Angular architecture with new design system',
          'Backend: Enhanced .NET Core API with new features',
          'Database: Schema updates to support new functionality',
          'Infrastructure: Improved Azure deployment pipeline',
        ],
        database: [
          'Updated data models for enhanced features',
          'New tables for expanded functionality',
          'Data migration from Brain Changer to BOOST branding',
          'Performance optimizations for growing user base',
        ],
        apiEndpoints: [
          'Enhanced existing API endpoints',
          'New endpoints for additional features',
          'Improved API documentation and versioning',
          'Backward compatibility during transition',
        ],
        security: [
          'Updated security protocols for new features',
          'Enhanced data protection measures',
          'Compliance with latest health data regulations',
          'Secure migration of existing user data',
        ],
        performance: [
          'UI/UX performance improvements',
          'Database optimization for new features',
          'Enhanced caching strategies',
          'Improved loading times and responsiveness',
        ],
        testing: [
          'Comprehensive testing for rebrand changes',
          'Regression testing for existing functionality',
          'User acceptance testing for new features',
          'Continuous integration and deployment testing',
        ],
      },
    },
  ];

  const renderTechnicalSection = (title: string, items: string[], icon: React.ElementType) => {
    const IconComponent = icon;
    return (
      <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <IconComponent className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-base font-semibold text-primary">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            Applications built in corporate environments, demonstrating expertise in complex
            business requirements and enterprise-grade solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <IconComponent className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary w-fit">
                    {project.label}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">-</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Built With:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-primary font-medium">
                          {tech}
                          {techIndex < project.technologies.length - 1 && (
                            <span className="text-muted-foreground mx-1">•</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* <div className="flex gap-2 pt-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Technical Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-6xl max-h-[85vh] overflow-hidden">
                        <DialogHeader className="border-b border-primary/20 pb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                              <IconComponent className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <DialogTitle className="text-xl font-bold text-primary">
                                {project.title}
                              </DialogTitle>
                              <p className="text-sm text-muted-foreground mt-1">
                                Technical Deep Dive
                              </p>
                            </div>
                          </div>
                        </DialogHeader>

                        <div className="overflow-y-auto pr-2 max-h-[calc(85vh-120px)]">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            {renderTechnicalSection(
                              'ARCHITECTURE OVERVIEW',
                              project.technicalDetails.architecture,
                              Server
                            )}

                            {renderTechnicalSection(
                              'DATABASE DESIGN',
                              project.technicalDetails.database,
                              Database
                            )}

                            {renderTechnicalSection(
                              'API ENDPOINTS',
                              project.technicalDetails.apiEndpoints,
                              Code
                            )}

                            {renderTechnicalSection(
                              'SECURITY IMPLEMENTATION',
                              project.technicalDetails.security,
                              Shield
                            )}

                            {renderTechnicalSection(
                              'PERFORMANCE OPTIMIZATIONS',
                              project.technicalDetails.performance,
                              Zap
                            )}

                            {renderTechnicalSection(
                              'TESTING STRATEGY',
                              project.technicalDetails.testing,
                              TestTube
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div> */}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center bg-card/50 border border-primary/20 rounded-lg p-8">
          <p className="text-lg text-muted-foreground">
            💡 Want to see how I'd approach your specific project? Let's discuss your requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
