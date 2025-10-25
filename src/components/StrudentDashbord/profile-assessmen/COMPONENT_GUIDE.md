# NextSteps Component Guide

## 🏗️ Component Architecture

```
NextSteps.tsx (Main Component)
│
├── State Management
│   ├── feedback: ProfileFeedback | null
│   ├── hasFeedbackAvailable: boolean
│   ├── isRequestingFeedback: boolean
│   ├── isFetchingFeedback: boolean
│   └── Modal states (3 booleans)
│
├── API Integration
│   ├── getStudentFeedback() → useEffect on mount
│   └── requestFeedbackReview() → toast notifications
│
├── Layout Sections
│   ├── Hero Status Card (gradient based on completion)
│   ├── Alert Banner (if incomplete)
│   ├── Bento Grid (8 action cards)
│   └── Timeline (4 steps)
│
└── Modals (3)
    ├── FeedbackModal.tsx
    ├── BookingModal.tsx
    └── ChatModal.tsx
```

## 📐 Bento Grid Layout

### Desktop (4-column grid)

```
┌─────────────────────────────────────────────────────────┐
│                    HERO STATUS CARD                      │
│         (Profile Completion + Progress Bar)              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│              INCOMPLETE ALERT (if < 80%)                 │
└─────────────────────────────────────────────────────────┘

┌───────────────────────────┬─────────┬─────────┬─────────┐
│                           │  Book   │  Chat   │         │
│   FEEDBACK CARD           │ Session │  Live   │  TALL   │
│   (2-col wide)            │         │         │         │
│   Primary Action          ├─────────┼─────────┤  CARD   │
│                           │ Events  │Progress │         │
│                           │         │  Stats  │ Explore │
├───────────────────────────┴─────────┴─────────┤ Programs│
│                TIMELINE                        │         │
│        (4 steps horizontal)                    │         │
└────────────────────────────────────────────────┴─────────┘
```

### Mobile (1-column stack)

```
┌─────────────────┐
│   HERO CARD     │
├─────────────────┤
│  ALERT BANNER   │
├─────────────────┤
│  FEEDBACK       │
├─────────────────┤
│  BOOK SESSION   │
├─────────────────┤
│  CHAT LIVE      │
├─────────────────┤
│  EXPLORE        │
│  PROGRAMS       │
├─────────────────┤
│  EVENTS         │
├─────────────────┤
│  PROGRESS       │
├─────────────────┤
│  RESOURCES      │
├─────────────────┤
│  TIMELINE       │
│  (vertical)     │
└─────────────────┘
```

## 🎨 Card Breakdown

### 1. Feedback Card (lg:col-span-2)
```tsx
<Card
  className="lg:col-span-2"  // Takes 2 columns
  onClick={handleReviewFeedback}
>
  {/* Shimmer animation layer */}
  {/* Icon + Badge */}
  {/* Title (conditional) */}
  {/* Description */}
  {/* CTA with arrow */}
</Card>
```

**States:**
- No feedback: "Request Profile Review"
- Has feedback: "View Your Feedback" + "New" badge
- Requesting: Loading spinner

**Gradient:** Blue → Indigo → Purple

### 2. Book Session Card
```tsx
<Card
  onClick={handleBookAppointment}
  className="bg-gradient-to-br from-emerald-500 to-teal-600"
>
  {/* Calendar icon */}
  {/* "Book Session" title */}
  {/* "Schedule 1-on-1 consultation" */}
  {/* "Schedule →" */}
</Card>
```

**Gradient:** Emerald → Teal

### 3. Live Chat Card
```tsx
<Card
  onClick={handleStartChat}
  className="bg-gradient-to-br from-pink-500 to-rose-600"
>
  {/* MessageSquare icon */}
  {/* "Live Chat" title */}
  {/* Online indicator (pulse) */}
</Card>
```

**Gradient:** Pink → Rose

### 4. Explore Programs Card (lg:row-span-2)
```tsx
<Card
  className="lg:row-span-2"  // Takes 2 rows
  onClick={handleExplorePrograms}
>
  {/* GraduationCap icon */}
  {/* Title */}
  {/* Description */}
  {/* Stats list (mt-auto pushes to bottom) */}
  {/*   - 500+ Programs */}
  {/*   - 100+ Universities */}
  {/*   - Top Rankings */}
  {/* "Explore Now →" */}
</Card>
```

**Gradient:** Dark slate (800 → 700 → 900)

### 5. Events Card
```tsx
<Card
  onClick={handleExploreEvents}
  className="bg-gradient-to-br from-orange-500 to-red-600"
>
  {/* Video icon */}
  {/* "Events" title */}
  {/* "Join webinars..." */}
  {/* "View All →" */}
</Card>
```

**Gradient:** Orange → Red

### 6. Progress Stats Card
```tsx
<Card className="bg-white border-2">
  {/* TrendingUp icon (gradient bg) */}
  {/* "Your Progress" title */}
  {/* Profile: 75% */}
  {/* Status: Badge */}
</Card>
```

**Style:** White with border (stands out)

### 7. Resources Card
```tsx
<Card
  onClick={() => navigate('/student-dashboard/resources')}
  className="bg-gradient-to-br from-cyan-500 to-blue-600"
>
  {/* BookOpen icon */}
  {/* "Resources" title */}
  {/* "Guides, tips..." */}
  {/* "Learn More →" */}
</Card>
```

**Gradient:** Cyan → Blue

## 🎬 Animation Flow

### Component Mount
```
1. containerVariants.hidden (opacity: 0)
2. Wait 0.1s (delayChildren)
3. containerVariants.visible
4. Children animate sequentially:
   - Hero Card (delay 0ms)
   - Alert (delay 60ms)
   - Bento Grid (delay 120ms)
   - Timeline (delay 180ms)
```

### Individual Card
```
1. itemVariants.hidden
   - opacity: 0
   - y: 30 (below)
   - scale: 0.95 (smaller)

2. itemVariants.visible
   - opacity: 1
   - y: 0 (centered)
   - scale: 1 (normal)
   - duration: 0.5s
   - ease: custom bezier
```

### Hover States
```
Card:
  whileHover={{ y: -4 }}  // Lift up
  transition={{ duration: 0.2 }}

Arrow icons:
  group-hover:translate-x-1  // Slide right
```

## 🔄 User Flows

### Flow 1: Request Feedback
```
User clicks "Request Profile Review"
  ↓
handleReviewFeedback() called
  ↓
handleRequestFeedback() async
  ↓
setIsRequestingFeedback(true)
  ↓
API call: requestFeedbackReview(studentId)
  ↓
Success:
  - toast.success('Feedback request submitted!')
  - Card shows loading state
  ↓
setIsRequestingFeedback(false)
```

### Flow 2: View Existing Feedback
```
Component mounts
  ↓
useEffect runs
  ↓
getStudentFeedback(studentId)
  ↓
Feedback exists:
  - setFeedback(data)
  - setHasFeedbackAvailable(true)
  - Card title changes
  - "New" badge appears
  ↓
User clicks card
  ↓
setIsFeedbackModalOpen(true)
  ↓
Modal shows feedback details
```

### Flow 3: Book Session
```
User clicks "Book Session"
  ↓
handleBookAppointment()
  ↓
setIsBookingModalOpen(true)
  ↓
Modal opens
  ↓
User selects:
  1. Session type (video/chat)
  2. Date (from 5 options)
  3. Time (from 6 slots)
  ↓
handleBooking() async
  ↓
API call (simulated 1.5s)
  ↓
Success animation:
  - Checkmark springs in
  - "Session Booked!"
  - toast.success with icon
  ↓
Auto-close after 2s
```

## 🎨 Color Palette

### Status Colors
```typescript
const statusColors = {
  complete: {
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    badge: 'bg-white/20 text-white',
  },
  incomplete: {
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    badge: 'bg-blue-400/90 text-white',
  },
  warning: {
    gradient: 'from-amber-50 to-orange-50',
    border: 'border-amber-200',
    text: 'text-amber-900',
  },
};
```

### Action Cards
```typescript
const cardGradients = {
  feedback: 'from-blue-600 via-indigo-600 to-purple-600',
  booking: 'from-emerald-500 to-teal-600',
  chat: 'from-pink-500 to-rose-600',
  programs: 'from-slate-800 via-slate-700 to-slate-900',
  events: 'from-orange-500 to-red-600',
  stats: 'bg-white border-2 border-gray-200',
  resources: 'from-cyan-500 to-blue-600',
};
```

## 📱 Responsive Classes

### Grid Breakpoints
```css
/* Mobile first */
grid-cols-1           /* Base: 1 column */
md:grid-cols-2        /* Tablet: 2 columns */
lg:grid-cols-4        /* Desktop: 4 columns */

/* Spans */
lg:col-span-2         /* Feedback card width */
lg:row-span-2         /* Programs card height */
```

### Text Scaling
```css
/* Hero title */
text-2xl md:text-4xl

/* Card titles */
text-xl md:text-2xl

/* Descriptions */
text-sm md:text-base
```

### Padding
```css
p-6 md:p-8            /* Hero card */
p-5                   /* Alert banner */
p-6                   /* Action cards */
```

## 🔧 Customization Guide

### Override Default Actions
```tsx
<NextSteps
  profileCompletion={75}
  studentId="123"
  customActions={[
    {
      id: 'custom-1',
      title: 'My Custom Action',
      description: 'Do something unique',
      icon: MyIcon,
      action: () => console.log('Custom'),
      variant: 'primary',
    },
  ]}
/>
```

### Custom Handlers
```tsx
<NextSteps
  profileCompletion={75}
  onReviewFeedback={() => {
    // Custom logic instead of default
    myCustomFeedbackHandler();
  }}
  onBookAppointment={() => {
    // Open custom booking system
    window.open('https://calendly.com/...');
  }}
  onStartChat={() => {
    // Open custom chat widget
    window.$crisp.push(['do', 'chat:open']);
  }}
/>
```

### Theming
To change the color scheme, update gradients in the component:

```tsx
// Change hero gradient
className={`${
  isComplete
    ? 'bg-gradient-to-br from-YOUR-COLOR-1 via-YOUR-COLOR-2 to-YOUR-COLOR-3'
    : 'bg-gradient-to-br from-YOUR-COLOR-4 via-YOUR-COLOR-5 to-YOUR-COLOR-6'
}`}
```

## 🐛 Common Issues

### Issue: Feedback not loading
**Solution:** Ensure `studentId` prop is provided
```tsx
<NextSteps studentId={user._id} />  // ✅ Correct
<NextSteps />                        // ❌ Missing studentId
```

### Issue: Toast notifications not showing
**Solution:** Add Toaster component to app root
```tsx
// App.tsx
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <YourRoutes />
      <Toaster position="top-right" />
    </>
  );
}
```

### Issue: Modal not closing
**Solution:** Check Dialog implementation
```tsx
<Dialog open={isOpen} onOpenChange={onClose}>
  {/* Content */}
</Dialog>
```

### Issue: Cards not hovering properly
**Solution:** Ensure framer-motion is installed
```bash
npm install framer-motion
```

## 📊 Performance Metrics

### Lighthouse Scores (Target)
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: N/A (component)

### Component Metrics
- First Paint: < 100ms
- Time to Interactive: < 200ms
- Animation FPS: 60
- Bundle Size: ~8KB

## 🎓 Best Practices

### 1. Always provide studentId
```tsx
// ✅ Good
<NextSteps studentId={user?._id} profileCompletion={75} />

// ❌ Bad
<NextSteps profileCompletion={75} />
```

### 2. Handle loading states
```tsx
if (isLoadingProfile) {
  return <Skeleton />;
}

return <NextSteps profileCompletion={completion} />;
```

### 3. Error boundaries
```tsx
<ErrorBoundary fallback={<ErrorState />}>
  <NextSteps {...props} />
</ErrorBoundary>
```

### 4. Analytics tracking
```tsx
useEffect(() => {
  analytics.track('nextsteps_viewed', {
    profileCompletion,
    hasFeedback: hasFeedbackAvailable,
  });
}, []);
```

---

**Last Updated**: October 2025
**Component Version**: 3.0 (Bento Grid)
**Maintainer**: Fly8 Development Team
