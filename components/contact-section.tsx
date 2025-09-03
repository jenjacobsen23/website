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
import { toast } from 'sonner';
import { z } from 'zod';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectVision: '',
    techPreferences: '',
    timeline: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Validation schema
  const contactSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    projectVision: z.string().min(10, 'Project vision must be at least 10 characters'),
    techPreferences: z.string().optional(),
    timeline: z.string().min(1, 'Timeline is required'),
  });

  const validateForm = () => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        // Reset form
        setFormData({ name: '', email: '', projectVision: '', techPreferences: '', timeline: '' });
        setErrors({});
      } else {
        toast.error(result.message || 'Failed to send message');
        if (result.errors) {
          const newErrors: Record<string, string> = {};
          result.errors.forEach((err: any) => {
            if (err.path[0]) {
              newErrors[err.path[0] as string] = err.message;
            }
          });
          setErrors(newErrors);
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
                        className={`border-border focus:border-primary ${
                          errors.name ? 'border-red-500' : ''
                        }`}
                        disabled={isSubmitting}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                        className={`border-border focus:border-primary ${
                          errors.email ? 'border-red-500' : ''
                        }`}
                        disabled={isSubmitting}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                      className={`border-border focus:border-primary resize-none ${
                        errors.projectVision ? 'border-red-500' : ''
                      }`}
                      placeholder="Describe your project vision, goals, and what problem you're trying to solve..."
                      disabled={isSubmitting}
                    />
                    {errors.projectVision && (
                      <p className="text-red-500 text-sm mt-1">{errors.projectVision}</p>
                    )}
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
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                      Timeline *
                    </label>
                    <Select
                      onValueChange={value => handleSelectChange('timeline', value)}
                      required
                      disabled={isSubmitting}
                    >
                      <SelectTrigger
                        className={`border-border focus:border-primary ${
                          errors.timeline ? 'border-red-500' : ''
                        }`}
                      >
                        <SelectValue placeholder="Select your preferred timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP (Rush project)</SelectItem>
                        <SelectItem value="1month">1 month</SelectItem>
                        <SelectItem value="2-3months">2-3 months</SelectItem>
                        <SelectItem value="3-6months">3-6 months</SelectItem>
                        <SelectItem value="flexible">Flexible timeline</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.timeline && (
                      <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground teal-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send My Vision
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
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
