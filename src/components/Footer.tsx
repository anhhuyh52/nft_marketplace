// src/components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  // Footer sections with links
  const footerSections = [
    {
      title: 'ABOUT US',
      links: [
        { name: 'Careers', href: '/careers' },
        { name: 'Company Details', href: '/company' },
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Help Center', href: '/help' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'API Docs', href: '/api' },
      ]
    },
    {
      title: 'PRODUCTS',
      links: [
        { name: 'NFT Marketplace', href: '/marketplace' },
        { name: 'Staking', href: '/staking' },
        { name: 'Drops', href: '/drops' },
        { name: 'Launchpad', href: '/launchpad' },
        { name: 'NFTs Platform', href: '/platform' },
        { name: 'Creator Dashboard', href: '/dashboard' },
      ]
    },
    {
      title: 'RESOURCES',
      links: [
        { name: 'Support', href: '/support' },
        { name: 'API', href: '/api' },
        { name: 'Feature Requests', href: '/requests' },
        { name: 'Trust & Safety', href: '/trust' },
        { name: 'Sitemap', href: '/sitemap' },
      ]
    },
    {
      title: 'CONTACT US',
      links: [
        { name: 'support@nftech.email', href: 'mailto:support@nftech.email' },
        { name: 'office@nftech.co', href: 'mailto:office@nftech.co' },
      ]
    },
  ];

  return (
    <footer className="bg-black-900 text-gray-300 border-t border-gray-800  px-5 py-10 ">
      <div className="mx-auto max-w-[1118px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-black italic text-white mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-xs text-gray-text transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Add Install App button only to the Contact Us section */}
              {section.title === 'CONTACT US' && (
                <div className="mt-4">
                  
                    <Image src="/install_app.png" alt="App Store" width={150} height={44} className="mr-2" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;