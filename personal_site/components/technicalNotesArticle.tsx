import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from 'next/image';

export function TechnicalNotesArticle({ options, content}: { options: any, content: any }) {
    return <>
    <Image className="rounded" src={content.headerImage.url} alt={content.headerImage.description} width={content.headerImage.width} height={content.headerImage.height} />
    <h1 className="mt-10 text-4xl font-bold pb-4">{content.title}</h1>
    {documentToReactComponents(content.content.json, options)}
    </>
}