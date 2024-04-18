import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

export default {
  logo: <span>OpenArmor Documentation</span>,
  project: {
    link: "https://github.com/openarmor",
  },
  useNextSeoProps() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://theopenarmor.org" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return {
      title: "OpenArmor and OpenArmor Dashboards",
      description:
        "This section contains documentation for OpenArmor and OpenArmor Dashboards.",
      canonical: url,
      openGraph: {
        url: url,
        title: "OpenArmor and OpenArmor Dashboards",
        description:
          "This section contains documentation for OpenArmor and OpenArmor Dashboards.",
        images: [
          {
            url: "https://docs.theopenarmor.org/_next/static/media/communication.c1c738a5.png",
            alt: "OpenArmor and OpenArmor Dashboards",
          },
          {
            url: "https://docs.theopenarmor.org/_next/static/media/working-part.8b62a56d.png",
            alt: "OpenArmor System Design",
          },
        ],
        site_name: "OpenArmor Documentation",
      },
      twitter: {
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      },
    };
  },
  banner: {
    key: "2.0-release",
    text: (
      <a href="https://theopenarmor.org" target="_blank">
        🎉 OpenArmor 0.1 will be releasing soon. Read more →
      </a>
    ),
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://docs.theopenarmor.org" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "OpenArmor"} />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "OpenArmor & OpenArmor Dashboard Documentation"
          }
        />
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/openarmor/favicons/main/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://raw.githubusercontent.com/openarmor/favicons/main/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://raw.githubusercontent.com/openarmor/favicons/main/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://raw.githubusercontent.com/openarmor/favicons/main/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="https://raw.githubusercontent.com/openarmor/favicons/main/site.webmanifest"
        />
      </>
    );
  },

  footer: {
    text: (
      <span>
        OpenArmor{" "}
        <span
          style={{
            fontWeight: "bold",
            fontSize: "1.2em",
          }}
        >
          X
        </span>
        <a href="https://techanv.com" target="_blank">
          <img
            src="https://techanv.com/assets/img/ghost-img.gif"
            alt="techanv"
            width={50}
            height={50}
            style={{
              display: "inline-block",
              marginTop: "-8px",
              marginLeft: "-8px",
            }}
          />
        </a>
      </span>
    ),
  },
};
