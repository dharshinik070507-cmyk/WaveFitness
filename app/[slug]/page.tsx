import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { InnerPage } from '@/components/site';
const pages=['programs','coaching','membership','gallery','about','contact'];
export function generateStaticParams(){return pages.map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;return {title:slug[0]?.toUpperCase()+slug.slice(1)}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!pages.includes(slug))notFound();return <InnerPage slug={slug}/>}
