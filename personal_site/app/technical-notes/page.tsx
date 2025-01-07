import { TechnicalNotesPreview } from "@/components/technicalNotesPreview";
import { fetchArticlePagesPreview } from "@/lib/contentful/article";


export default async function Page() {
    const pages = await fetchArticlePagesPreview('en-US');
    return <div className="py-5 px-5 mt-10 lg:px-52">
        {pages.map((page: any) => (
            <TechnicalNotesPreview key={page.slug} slug={page.slug} title={page.title} text={page.previewText} image={page.headerImage} />
        ))}
    </div>
}