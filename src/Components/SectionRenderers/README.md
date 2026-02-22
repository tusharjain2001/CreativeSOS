# Project-Specific Section Renderers Guide

## Overview

Each project now has its own custom `SectionRenderer` component. This allows you to design and implement unique section layouts for each project without affecting others.

## File Structure

```
src/Components/SectionRenderers/
├── index.js
├── SectionRendererBrandRefresh.jsx
├── SectionRendererDemandGen.jsx
├── SectionRendererProductLaunch.jsx
├── SectionRendererContentHub.jsx
├── SectionRendererRetentionCampaign.jsx
├── SectionRendererSalesEnablement.jsx
├── SectionRendererSocialMediaCampaign.jsx
└── SectionRendererLandingPageOptimization.jsx
```

## How It Works

### 1. Project ID to Renderer Mapping

The `index.js` file maps each project ID to its corresponding renderer:

```javascript
export const SECTION_RENDERERS = {
  "brand-refresh": SectionRendererBrandRefresh,
  "demand-gen": SectionRendererDemandGen,
  "product-launch": SectionRendererProductLaunch,
  // ... etc
};
```

### 2. Dynamic Loading in Projects.jsx

The `Projects.jsx` component uses `getSectionRenderer(projectId)` to load the correct renderer:

```jsx
const SectionRenderer = getSectionRenderer(projectId);
<SectionRenderer
  project={project}
  sectionName={steps[activeStep]}
  stepIndex={activeStep}
/>;
```

## Customizing Each Project Renderer

### Basic Template Structure

Each renderer follows this pattern:

```jsx
export default function SectionRendererProjectName({
  project,
  sectionName,
  stepIndex,
}) {
  // Handle specific section names
  if (sectionName === "Section Name") {
    // Return custom JSX for this section
  }

  // Add more conditions for other sections

  // Default fallback
  return (
    <motion.div className="...">
      <h2>{sectionName}</h2>
      <p>Add custom content here</p>
    </motion.div>
  );
}
```

## Available Project Renderers and Their Steps

### 1. **Brand Refresh** (`brand-refresh`)

**Status:** ✅ Fully implemented with all sections

- Project Overview
- Scope of the Project
- Logo Variations
- Mood Board
- Color
- Typography
- Shapes and Patterns
- UI Elements
- Icons
- Stationary
- Social Media
- Collage
- View Project

### 2. **Demand Gen** (`demand-gen`)

**Status:** 🟡 Basic template (ready for customization)

- Steps defined in projectsData.js
- Default Project Overview and Scope sections implemented

### 3. **Product Launch** (`product-launch`)

**Status:** 🟡 Basic template (ready for customization)

- Steps defined in projectsData.js
- Default Project Overview implemented

### 4. **Content Hub** (`content-hub`)

**Status:** 🟡 Basic template (ready for customization)

- Steps defined in projectsData.js
- Default Project Overview implemented

### 5. **Retention Campaign** (`retention-campaign`)

**Status:** 🟡 Basic template (ready for customization)

- Steps defined in projectsData.js
- Default Project Overview implemented

### 6. **Sales Enablement** (`sales-enablement`)

**Status:** 🟡 Basic template (ready for customization)

- Steps defined in projectsData.js
- Default Project Overview implemented

### 7. **Social Media Campaign** (`social-media-campaign`)

**Status:** 🟡 Basic template (ready for customization)

- Steps defined in projectsData.js
- Default Project Overview implemented

### 8. **Landing Page Optimization** (`landing-page-optimization`)

**Status:** 🟡 Basic template (ready for customization)

- Steps defined in projectsData.js
- Default Project Overview implemented

## How to Customize a Section Renderer

### Step 1: Open the Renderer File

Edit the corresponding file in `src/Components/SectionRenderers/`

### Step 2: Add Your Custom Section Logic

Add if conditions for each section from your project's steps array:

```jsx
// CUSTOM SECTION NAME
if (sectionName === "Custom Section Name") {
  const data = project.step3; // or whatever step contains this section's data

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-gray-200 rounded-xl p-10"
    >
      <motion.h2 className="text-3xl font-bold mb-8">{sectionName}</motion.h2>

      {/* Add your custom design here */}
      {/* Use data from project.stepX */}
    </motion.div>
  );
}
```

### Step 3: Test

Navigate to the project page to see your changes.

## Example: Customizing Brand Refresh Renderer

The Brand Refresh renderer is fully implemented. To see how custom sections are structured, examine `SectionRendererBrandRefresh.jsx`:

1. **Section Handlers** - Each section has a dedicated if statement
2. **Card Components** - Reusable card layouts for Scope section
3. **Motion Animations** - Framer Motion for smooth transitions
4. **Data Access** - Access project.step1, project.step2, etc.

## Best Practices

1. **Reuse Components** - Create helper components (like Card in Brand Refresh) within your renderer
2. **Consistent Animations** - Use motion.div and framer-motion for consistency
3. **Data Structure** - Make sure your project data in `projectsData.js` matches the step structure your renderer expects
4. **Error Handling** - Use optional chaining (?.) when accessing nested data
5. **Responsive Design** - Always include responsive classes (grid-cols-1 md:grid-cols-X)

## Adding a New Project

1. Add project data to `projectsData.js` with a unique ID
2. Create a new renderer file: `SectionRendererYourProject.jsx`
3. Add mapping to `src/Components/SectionRenderers/index.js`:

   ```javascript
   import SectionRendererYourProject from "./SectionRendererYourProject";

   export const SECTION_RENDERERS = {
     // ... existing projects
     "your-project-id": SectionRendererYourProject,
   };
   ```

## Common Patterns

### Image Grid with Hover Effects

```jsx
<motion.div className="grid grid-cols-2 md:grid-cols-3 gap-6">
  {project.stepX?.images?.map((img, i) => (
    <motion.img key={i} src={img} whileHover={{ scale: 1.05 }} />
  ))}
</motion.div>
```

### Text + Image Layout

```jsx
<motion.div className="flex gap-8">
  <div className="flex-1">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
  </div>
  <img src={imageUrl} className="flex-1 rounded-xl" />
</motion.div>
```

## Troubleshooting

**Issue:** Section shows "Add content for X"

- **Solution:** Check if the sectionName matches your if condition exactly

**Issue:** Images not loading

- **Solution:** Verify the image path in projectsData.js is correct

**Issue:** Renderer not found error

- **Solution:** Make sure you added the project mapping to `index.js` in SECTION_RENDERERS

---

Happy customizing! 🎨
