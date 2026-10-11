import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SiteShell } from '@/components/site';
export const viewport:Viewport={width:'device-width',initialScale:1};
export const metadata:Metadata={title:{default:'Wave Fitness | Train Natural. Move Different.',template:'%s | Wave Fitness'},description:'Wave Fitness unisex gym at Camp Road Junction, Selaiyur, Tambaram East. Memberships from ₹999/month. Explore programs, coaching and gym enquiries.',openGraph:{title:'Wave Fitness — Train Natural',description:'Unisex fitness gym in Tambaram East, Chennai.',type:'website'},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>}
