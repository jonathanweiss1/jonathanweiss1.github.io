import { fetchLegalPages, getLegalPage } from "@/lib/contentful/legal";
import { getRichTextFormattingOptions } from "@/lib/contentful/rendering";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function generateStaticParams() {
    const pages = await fetchLegalPages();
    return pages.map((page: any) => ({
        slug: page.slug
    }));
}

export default async function Page({ params }: { params: { slug: string, title: string, content: any } }) {
    const options = await getRichTextFormattingOptions('en-US');
    const content = await getLegalPage(params.slug, 'en-US');
    return <div className="py-5 px-5 lg:px-52">
        <h1 className="text-xl font-bold pb-4">{content.title}</h1>
        {documentToReactComponents(content.content.json, options)}
    </div>
}