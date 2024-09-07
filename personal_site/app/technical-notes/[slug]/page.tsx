import { TechnicalNotesArticle } from "@/components/technicalNotesArticle";
import { getRichTextFormattingOptions } from "@/lib/contentful/rendering";
import { fetchTutorialPages, getTutorialPage } from "@/lib/contentful/tutorial";

export async function generateStaticParams() {
    const pages = await fetchTutorialPages();
    return pages.map((page: any) => ({
        slug: page.slug
    }));
}

export default async function Page({ params }: { params: { slug: string, title: string, content: any } }) {
    const options = await getRichTextFormattingOptions('de');
    const content = await getTutorialPage(params.slug, 'en-US');
    return <div className="py-5 mt-10 px-5 lg:px-52">
        <TechnicalNotesArticle options={options} content={content} />
    </div>
}