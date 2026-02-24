/**
 * Mapping of project IDs to their respective SectionRenderer components
 * Import match with project IDs from projectsData.js
 */

import SectionRendererInfinitus from "./SectionRendererInfinitus";
import SectionRendererDemandGen from "./SectionRendererDemandGen";
import SectionRendererProductLaunch from "./SectionRendererProductLaunch";
import SectionRendererContentHub from "./SectionRendererContentHub";
import SectionRendererRetentionCampaign from "./SectionRendererRetentionCampaign";
import SectionRendererSalesEnablement from "./SectionRendererSalesEnablement";
import SectionRendererSocialMediaCampaign from "./SectionRendererSocialMediaCampaign";
import SectionRendererLandingPageOptimization from "./SectionRendererLandingPageOptimization";

export const SECTION_RENDERERS = {
  "infinitus": SectionRendererInfinitus,
  "fusion": SectionRendererInfinitus,
  "demand-gen": SectionRendererDemandGen,
  "product-launch": SectionRendererProductLaunch,
  "content-hub": SectionRendererContentHub,
  "retention-campaign": SectionRendererRetentionCampaign,
  "sales-enablement": SectionRendererSalesEnablement,
  "social-media-campaign": SectionRendererSocialMediaCampaign,
  "landing-page-optimization": SectionRendererLandingPageOptimization,
  "landing-page-optimizatio": SectionRendererLandingPageOptimization, // Fallback for typo variant
};

/**
 * Get the appropriate SectionRenderer for a project
 * @param {string} projectId - The project ID from the URL
 * @returns {Component} The corresponding SectionRenderer component or undefined
 */
export function getSectionRenderer(projectId) {
  return SECTION_RENDERERS[projectId];
}

