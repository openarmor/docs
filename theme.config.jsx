export default {
  logo: <span>OpenArmor Documentation</span>,
  project: {
    link: "https://github.com/openarmor",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – OpenArmor Documentation",
    };
  },
  banner: {
    key: "2.0-release",
    text: (
      <a href="https://openarmor.com" target="_blank">
        🎉 OpenArmor 0.1 will be releasing soon. Read more →
      </a>
    ),
  },
};
