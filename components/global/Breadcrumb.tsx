import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const getBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Accueil', path: '/' },
  ];
  let currentPath = '';
  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      path: currentPath,
    });
  });
  return breadcrumbs;
};

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const breadcrumbs = getBreadcrumbs(location.pathname);

  return (
    <nav aria-label="Fil d'Ariane" className="mb-4 text-sm">
      <ol className="flex flex-wrap items-center space-x-2">
        {breadcrumbs.map((crumb, idx) => (
          <li key={crumb.path} className="flex items-center">
            {idx !== 0 && (
              <span className="mx-1 text-gray-400">/</span>
            )}
            {idx < breadcrumbs.length - 1 ? (
              <Link to={crumb.path} className="text-primary-blue hover:underline">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-gray-500">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
