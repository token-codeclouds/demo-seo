import { useRouter } from "next/router";
import { useContext } from "react";
import { NextSeo } from "next-seo";

const Seo = ({ seo }: any) => {
    const { asPath } = useRouter();
  const url = `${process.env.NEXT_PUBLIC_CAREER_SITE_BASE_URL}${asPath}`;
  return (
    <NextSeo
      title={seo?.metaTitle}
      description={seo?.metaDescription}
      canonical={url}
      openGraph={{
        url: url,
        title: seo?.ogTitle || seo?.metaTitle,
        description: seo?.metaDescription,
        type: "website",
        locale: "en_US",
        images: [
          {
            url: seo?.shareImage,
            width: seo?.imgWidth || 1200,
            height: seo?.imgHeight || 630,
            alt: "default_og",
            type: seo?.imgType,
          },
        ],
        siteName: "CodeClouds",
      }}
      facebook={{
        appId: '676905552442240',
      }}
      twitter={{
        handle: "@codeclouds",
        site: "@codeclouds",
        cardType: "summary_large_image",
      }}
    />
  );
};
export default Seo;
