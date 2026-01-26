import { redirect } from 'next/navigation';

// Redirect floor-plans-simple to main home styles page
// Sun City Summerlin is a resale community, not new construction
export default function FloorPlansSimplePage() {
  redirect('/floor-plans');
}
