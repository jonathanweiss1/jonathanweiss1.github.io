export async function fetchArticlePages() {
    const pages = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
             "Authorization": `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
           },
           body: JSON.stringify({ query: `query {
                tutorialCollection {
                items {
                    title
                    slug
                    }
                }
            }` }),
           next: { tags: ["tutorial"] },
         }
       ).then((response) => response.json()).catch((error) => console.log(error));
    return pages.data.tutorialCollection.items;
}

export async function fetchArticlePagesPreview(locale: string) {
  const pages = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
         },
         body: JSON.stringify({ query: `query {
              tutorialCollection(locale: "${locale}") {
              items {
                  title
                  slug
                  previewText
                  headerImage {
                    url
                    fileName
                    description
                    width
                    height
                    contentType
                  }
                  }
              }
          }` }),
         next: { tags: ["tutorial"] },
       }
     ).then((response) => response.json()).catch((error) => console.log(error));

  return pages.data.tutorialCollection.items;
}

export async function getArticlePage(slug: string, locale: string) {
    const tutorial = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
         },
         body: JSON.stringify({ query: `query {
              tutorialCollection(locale: "${locale}", where:{slug: "${slug}"}) {
              items {
                title
                slug
                headerImage {
                  url
                  fileName
                  description
                  width
                  height
                }
                content {
                  json
                }
              }
            }
          }` }),
         next: { tags: ["tutorial"] },
       }
     ).then((response) => response.json()).catch((error) => console.log(error));
     return tutorial.data.tutorialCollection.items[0];
  }