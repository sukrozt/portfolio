import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'About', href: '/homepage/about' },
  {
    name: 'Contact',
    href: '/homepage/contact',
  },
  { name: 'Projects', href: '/homepage/projects' },
];

export default function NavLinks() {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
