'use client';

import { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Layout } from 'lucide-react';

export type DemoProject = {
  title: string;
  description: string;
  url: string;
  image?: string;
  features?: string[];
  technologies?: string[];
};

const demos: DemoProject[] = [
  {
    title: 'Harvest & Vine Festival',
    description:
      'Event site for a food, wine, and live music festival in the Yarra Valley. Line-up, schedule, tickets, location, and FAQ.',
    url: 'https://mistyrose-goldfish-910269.hostingersite.com/',
    image: '/demo-website-vinyard.png',
    features: ['Line-up cards', 'Schedule tabs + time grid', 'Pricing tiers', 'Ticket booking form', 'FAQ accordion', 'Location section', 'Newsletter signup'],
    technologies: ['React', 'Next.js', 'Tailwind'],
  },
  {
    title: 'Lumen Art Gallery',
    description:
      'Contemporary art gallery site with exhibitions, artworks, events, tickets, visit info, and booking.',
    url: 'https://gold-manatee-100700.hostingersite.com/',
    image: '/demo-website-art.png',
    features: ['Image gallery', 'Event listing', 'Booking UI', 'Contact form', 'Responsive layout', 'Card grid'],
    technologies: ['React', 'Next.js', 'Tailwind'],
  },
  {
    title: 'Luxe Collective',
    description:
      'Boutique hair salon in Melbourne. Services, stylists, gallery, pricing, reviews, and booking form.',
    url: 'https://lightblue-eel-934020.hostingersite.com/',
    image: '/demo-website-salon.png',
    features: ['Services grid', 'Pricing tables', 'Stylist cards', 'Image gallery', 'Reviews section', 'Booking form (date/time/service)', 'Location & hours'],
    technologies: ['React', 'Next.js', 'Tailwind'],
  },
  {
    title: 'GreenScape',
    description:
      'Demo site for a fictional landscaping company. Services, about, gallery, testimonials, contact, and quote form.',
    url: 'https://lightgray-ibex-559381.hostingersite.com/',
    image: '/demo-website-landscaping.png',
    features: ['Services grid', 'Stats counters', 'Portfolio gallery', 'Testimonials', 'Contact form with select'],
    technologies: ['React', 'Next.js', 'Tailwind'],
  },
  {
    title: 'Flow House',
    description:
      'A boutique wellness space in Inner Melbourne where movement meets mindfulness. Includes classes, timetable, memberships, testimonials, and sign-up form.',
    url: 'https://gray-tarsier-889712.hostingersite.com/',
    image: '/demo-website-flow.png',
    features: ['Class cards', 'Weekly timetable (tabs + grid)', 'Trainer cards', 'Pricing tiers', 'Feature highlights', 'Testimonials', 'Sign-up form with select'],
    technologies: ['React', 'Next.js', 'Tailwind'],
  },  
  // {
  //   title: 'Alex Morgan',
  //   description:
  //     'Leadership and career coaching site. About, services, results and testimonials, resources, and contact form.',
  //   url: 'https://violet-stingray-446289.hostingersite.com/',
  //   image: '/demo-website-consultant.png',
  //   features: ['Process steps UI', 'Pricing cards', 'Testimonials', 'Contact form', 'Content listing', 'Form handling'],
  //   technologies: ['React', 'Next.js', 'Tailwind'],
  // },
  
];

export function DemosSection() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (flippedIndex === null) return;
    const handler = (e: MouseEvent) => {
      if (sectionRef.current && !sectionRef.current.contains(e.target as Node)) {
        setFlippedIndex(null);
      }
    };
    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, [flippedIndex]);

  return (
    <section ref={sectionRef} id="demos" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-balance">
            Demo <span className="text-primary">Projects</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed px-0 sm:px-2">
            Example websites I&apos;ve built for portfolio and demonstration purposes — not client
            work. Click through to see them live.
          </p>
        </div>

        <div className="overflow-x-auto overflow-y-visible scroll-smooth pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="flex flex-nowrap gap-4 sm:gap-6 min-h-full">
            {demos.map((demo, index) => (
              <div
                key={index}
                role="button"
                tabIndex={0}
                aria-expanded={flippedIndex === index}
                aria-label={`${demo.title}, tap to flip card`}
                onClick={() => setFlippedIndex((i) => (i === index ? null : index))}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setFlippedIndex((i) => (i === index ? null : index));
                  }
                }}
                className="group block flex-shrink-0 h-[180px] sm:h-[240px] lg:h-[300px] aspect-[1367/735] snap-center rounded-lg sm:rounded-xl cursor-pointer"
              >
                <div className="relative w-full h-full [perspective:1000px]">
                  <div
                    className={`relative w-full h-full transition-transform duration-500 ease-out [transform-style:preserve-3d] [transform-origin:center] ${
                      flippedIndex === index ? '![transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'
                    }`}
                  >
                    {/* Front: image only — padded so corners don't clip screenshot */}
                    <div className="absolute inset-0 rounded-lg sm:rounded-xl border border-border bg-muted/50 p-1 sm:p-1.5 shadow-sm group-hover:shadow-lg transition-shadow [backface-visibility:hidden]">
                      <div className="w-full h-full overflow-hidden">
                        {demo.image ? (
                          <img
                            src={demo.image}
                            alt={`${demo.title} screenshot`}
                            className="object-cover object-left object-top w-full h-full"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-foreground/50">
                            <Layout className="h-10 w-10 sm:h-16 sm:w-16" aria-hidden />
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Back: details */}
                    <div className="absolute inset-0 rounded-lg sm:rounded-xl border border-border bg-card overflow-hidden shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)] p-3 sm:p-5 flex flex-col">
                      <div className="flex-1 overflow-y-auto min-h-0">
                        <h3 className="text-sm sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                          {demo.title}
                        </h3>
                        <a
                          href={demo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground hover:text-primary transition-colors mt-0.5 min-h-[32px] sm:min-h-0 py-1 -my-1 rounded focus:outline-none focus:ring-2 focus:ring-primary/50"
                        >
                          View demo
                          <ExternalLink className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        </a>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mt-2 sm:mt-3 line-clamp-3 sm:line-clamp-none">
                          {demo.description}
                        </p>
                        {demo.technologies && demo.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2 sm:mt-3">
                            {demo.technologies.map((tech, i) => (
                              <Badge key={i} variant="secondary" className="text-[10px] sm:text-xs font-normal px-1.5 py-0">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
