import { redirect } from 'next/navigation';

// Redirect individual floor plan pages to main home styles page
// Sun City Summerlin is a resale community without specific builder floor plans
export default function FloorPlanPage() {
  redirect('/floor-plans');
}

// Keep generateStaticParams empty to prevent build errors
export async function generateStaticParams() {
  return [];
}
