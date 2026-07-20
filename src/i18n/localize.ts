import type { Locale } from "@/i18n/config";
import { beforeAfterItems, type BeforeAfterItem } from "@/data/beforeAfter";
import { services, type ServiceItem } from "@/data/services";
import { videos, type VideoItem } from "@/data/videos";
import { reviews, type Review } from "@/data/reviews";
import {
  portfolioItems,
  type PortfolioItem,
  type PortfolioProject,
} from "@/data/portfolio";
import { serviceCopy } from "@/i18n/content/services";
import { beforeAfterCopy, standardEdits } from "@/i18n/content/beforeAfter";
import { videoCopy } from "@/i18n/content/videos";
import { reviewCopy } from "@/i18n/content/reviews";
import { portfolioCopy } from "@/i18n/content/portfolio";
import { toolNames } from "@/i18n/content/tools";

function pick<T extends Record<Locale, string>>(
  map: T,
  locale: Locale,
): string {
  return map[locale];
}

export function getServices(locale: Locale): ServiceItem[] {
  return services.map((service) => {
    const copy = serviceCopy[service.id];
    if (!copy) return service;
    return {
      ...service,
      title: pick(copy.title, locale),
      shortTitle: copy.shortTitle
        ? pick(copy.shortTitle, locale)
        : service.shortTitle,
      description: pick(copy.description, locale),
      details: pick(copy.details, locale),
      includes: copy.includes.map((item) => pick(item, locale)),
      process: copy.process.map((item) => pick(item, locale)),
    };
  });
}

export function getBeforeAfterItems(locale: Locale): BeforeAfterItem[] {
  return beforeAfterItems.map((item) => {
    const copy = beforeAfterCopy[item.id];
    if (!copy) return item;
    return {
      ...item,
      title: pick(copy.title, locale),
      beforeAlt: pick(copy.beforeAlt, locale),
      afterAlt: pick(copy.afterAlt, locale),
      editsHeading: copy.editsHeading
        ? pick(copy.editsHeading, locale)
        : undefined,
      edits: (copy.edits ?? standardEdits).map((edit) => pick(edit, locale)),
    };
  });
}

export function getVideos(locale: Locale): VideoItem[] {
  return videos.map((video) => {
    const copy = videoCopy[video.id];
    if (!copy) return video;
    return {
      ...video,
      title: pick(copy.title, locale),
      description: pick(copy.description, locale),
    };
  });
}

export function getReviews(locale: Locale): Review[] {
  return reviews.map((review) => {
    const copy = reviewCopy[review.id];
    if (!copy) return review;
    return {
      ...review,
      text: pick(copy.text, locale),
    };
  });
}

export function getPortfolioItems(locale: Locale): PortfolioItem[] {
  return portfolioItems.map((item) => {
    const copy = portfolioCopy[item.slug];
    if (!copy) return item;

    const localizeProject = (project: PortfolioProject): PortfolioProject => {
      const projectCopy = copy.projects?.[project.id];
      if (!projectCopy) return project;
      return {
        ...project,
        title: projectCopy.title
          ? pick(projectCopy.title, locale)
          : project.title,
        category: projectCopy.category
          ? pick(projectCopy.category, locale)
          : project.category,
        imageAlt: projectCopy.imageAlt
          ? pick(projectCopy.imageAlt, locale)
          : project.imageAlt,
        description: projectCopy.description
          ? pick(projectCopy.description, locale)
          : project.description,
        retouching: projectCopy.retouching
          ? pick(projectCopy.retouching, locale)
          : project.retouching,
        deliverables: projectCopy.deliverables
          ? pick(projectCopy.deliverables, locale)
          : project.deliverables,
      };
    };

    return {
      ...item,
      title: pick(copy.title, locale),
      pageTitle: pick(copy.pageTitle, locale),
      description: pick(copy.description, locale),
      imageAlt: pick(copy.imageAlt, locale),
      featured: {
        ...item.featured,
        title: pick(copy.featured.title, locale),
        description: pick(copy.featured.description, locale),
        imageAlt: pick(copy.featured.imageAlt, locale),
        category: pick(copy.featured.category, locale),
        retouching: pick(copy.featured.retouching, locale),
        deliverables: pick(copy.featured.deliverables, locale),
        gallery: item.featured.gallery.map((entry, index) => ({
          ...entry,
          imageAlt: copy.featured.galleryAlts?.[index]
            ? pick(copy.featured.galleryAlts[index], locale)
            : entry.imageAlt,
        })),
      },
      projects: item.projects.map(localizeProject),
      cta: {
        title: pick(copy.cta.title, locale),
        body: pick(copy.cta.body, locale),
      },
    };
  });
}

export function getToolLabels(locale: Locale) {
  return toolNames.map((tool) => ({
    short: tool.short,
    name: pick(tool.name, locale),
  }));
}

export function getNavItems(locale: Locale) {
  const labels = {
    en: {
      "/": "Home",
      "/portfolio": "Portfolio",
      "/services": "Services",
      "/before-after": "Before & After",
      "/videos": "Videos",
      "/consulting": "Consulting",
      "/about": "About Me",
      "/contact": "Contact",
    },
    es: {
      "/": "Inicio",
      "/portfolio": "Portafolio",
      "/services": "Servicios",
      "/before-after": "Antes y después",
      "/videos": "Videos",
      "/consulting": "Consultoría",
      "/about": "Sobre mí",
      "/contact": "Contacto",
    },
  } as const;

  const map = labels[locale];
  return [
    { label: map["/"], href: "/" },
    { label: map["/portfolio"], href: "/portfolio" },
    { label: map["/services"], href: "/services" },
    { label: map["/before-after"], href: "/before-after" },
    { label: map["/videos"], href: "/videos" },
    { label: map["/consulting"], href: "/consulting" },
    { label: map["/about"], href: "/about" },
    { label: map["/contact"], href: "/contact" },
  ] as const;
}
