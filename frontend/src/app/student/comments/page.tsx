import { redirect } from 'next/navigation';

export default function DeprecatedCommentsPage() {
  redirect('/student/posts');
}
