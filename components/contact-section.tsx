'use client';

import type React from 'react';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Mail, Phone, MapPin, Send, Lightbulb, Github, Linkedin, Twitter } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectVision: '',
    techPreferences: '',
    timeline: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', projectVision: '', techPreferences: '', timeline: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Let's Turn Your <span className="text-primary">Vision</span> Into Code
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Ready to transform your ideas into expertly coded solutions? Share your vision and let's
            make it reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">contact@jenjacobsen.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">(+61) 0432 159 477</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Melbourne, Australia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a
                    href="mailto:contact@jenjacobsen.com"
                    aria-label="Email"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href="https://linkedin.com/in/jen-jacobsen"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </a>

                  <a
                    href="https://github.com/jenjacobsen23"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Github className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-2">Why Work With Me?</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    8+ years of proven experience
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Full-stack expertise
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Clear communication
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    On-time delivery
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Share Your Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectVision" className="block text-sm font-medium mb-2">
                      Project Vision *
                    </label>
                    <Textarea
                      id="projectVision"
                      name="projectVision"
                      value={formData.projectVision}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="border-border focus:border-primary resize-none"
                      placeholder="Describe your project vision, goals, and what problem you're trying to solve..."
                    />
                  </div>

                  <div>
                    <label htmlFor="techPreferences" className="block text-sm font-medium mb-2">
                      Technology Preferences
                    </label>
                    <Input
                      id="techPreferences"
                      name="techPreferences"
                      value={formData.techPreferences}
                      onChange={handleChange}
                      className="border-border focus:border-primary"
                      placeholder="e.g., Angular, .NET, React Native, SQL Server, or open to suggestions"
                    />
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                      Timeline *
                    </label>
                    <Select onValueChange={value => handleSelectChange('timeline', value)} required>
                      <SelectTrigger className="border-border focus:border-primary">
                        <SelectValue placeholder="Select your preferred timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP (Rush project)</SelectItem>
                        <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                        <SelectItem value="1month">1 month</SelectItem>
                        <SelectItem value="2-3months">2-3 months</SelectItem>
                        <SelectItem value="3-6months">3-6 months</SelectItem>
                        <SelectItem value="flexible">Flexible timeline</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground teal-glow"
                  >
                    Send My Vision
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
