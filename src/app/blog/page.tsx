import { Column, Flex, Heading, Text, SmartImage } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL } from "@/app/resources";
import { blog, person, newsletter } from "@/app/resources/content";
import React from "react";

export async function generateMetadata() {
  const title = blog.title;
  const description = blog.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/blog`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog() {
  const titleParts = blog.title.split("-");
  return (
    <Column maxWidth="s">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            headline: blog.title,
            description: blog.description,
            url: `https://${baseURL}/blog`,
            image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {titleParts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < titleParts.length - 1 && (
              <Text as="span" variant="body-default-s" onBackground="danger-weak">
                {" - "}
              </Text>
            )}
          </React.Fragment>
        ))}
      </Heading>
      <Flex style={{ aspectRatio: "16/9" }}>
        <SmartImage
          src="/images/gallery/image.webp"
          alt="Under construction"
          fill
          style={{ objectFit: "contain" }}
        />
      </Flex>
      <Column fillWidth flex={1}>
        <Posts range={[1, 3]} thumbnail />
        <Posts range={[4]} columns="2" />
      </Column>
      {newsletter && newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
