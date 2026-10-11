import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Wave Fitness Tambaram',
    short_name: 'Wave Fitness',
    description: 'Unisex fitness gym at Camp Road Junction, Selaiyur, Tambaram East, Chennai.',
    start_url: '/',
    display: 'standalone',
    background_color: '#08090b',
    theme_color: '#f23b30',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml'
      }
    ]
  };
}
