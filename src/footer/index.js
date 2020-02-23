import React from "react";

const FooterLink = ({ url, title }) => (
  <a className="text-white px-4" data-testid="footer-link" href={url}>
    {title}
  </a>
);

const CopyrightStatement = () => (
  <p className="py-4 px-4 text-white">
    Copyright © Stream-It-Now. All Rights Reserved.
  </p>
);

const IconsList = ({ icons } ) => {
  return (
    <div className="flex justify-around">
      {icons.map((icon, index) => {
        const { url, height, width, alt } = icon;
        return (
          <img
            alt={alt}
            className="mx-4"
            height={height}
            width={width}
            src={url}
            key={`icon-${index}`}
          />
        );
      })}
    </div>
  );
};

export default ({ socialIcons, appStoreIcons }) => {
  const footerLinks = [
    {
      title: "Home",
      url: "/"
    },
    {
      title: "Terms and Conditions",
      url: "/terms"
    },
    {
      title: "Privacy Policy",
      url: "/privacy"
    },
    {
      title: "Collection Statement",
      url: "/collection-statement"
    },
    {
      title: "Help",
      url: "/help"
    },
    {
      title: "Manage Account",
      url: "/account"
    }
  ];

  return (
    <footer className="w-full p-12 bg-gray-800 flex flex-col justify-around">
      <div>
        {footerLinks.map((footerLink, index) => (
          <FooterLink key={`footer-link-${index}`} {...footerLink} />
        ))}
      </div>
      <CopyrightStatement />
      <div className="flex justify-between py-4">
        <IconsList icons={socialIcons}/>
        <IconsList icons={appStoreIcons}/>
      </div>
    </footer>
  );
};
