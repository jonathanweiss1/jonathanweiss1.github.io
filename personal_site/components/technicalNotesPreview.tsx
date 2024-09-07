"use client";

import { getCurrentLocale, getLinkToLocale } from "@/lib/locale";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';

export function TechnicalNotesPreview({ slug, title, text, image }: { slug: string, title: string, text: string, image: any }) {
    const currentRoute = usePathname();
    const currentLocale = getCurrentLocale(currentRoute);
    const readMore = currentLocale === 'en' ? 'Read more' : 'Weiterlesen';
    console.log(title, image);
    return <div className="flex flex-row bg-background m-4 p-4 rounded gap-3">
        <div className="w-1/5">
        <Image className="rounded object-contain" sizes="10vw" src={image.url} alt={image.description} width={image.width} height={image.height} />
        </div>
        <div className="flex flex-col w-4/5">
        <span className="font-bold text-lg inline-block align-top underline">{title}</span>
        <div>{text}</div>
        <Link className="text-accent" href={getLinkToLocale(`/technical-notes/${slug}`, currentLocale, currentLocale)}>{readMore}</Link>
        </div>
    </div>
}