import CardList from "@/components/Card/CardList";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center w-full h-screen flex-col">
        <CardList link={"/qr-code-component"} name={"QR Code Component"} />
        <CardList link={"/blog-preview-card"} name={"Blog Preview Card"} />
        <CardList
          link={"/advice-generator-app"}
          name={"Advice Generator App"}
        />
        <CardList
          link={"/social-links-profile"}
          name={"Social links profile"}
        />
        <CardList link={"/rest-countries"} name={"REST Countries"} />
        <CardList link={"/multi-step-form"} name={"Multi-step form"} />
      </div>
    </React.Fragment>
  );
}
