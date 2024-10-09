import React from "react";
import Layout from "../components/layout/LayOut";

export default function About() {
  return (
    <div>
      <Layout>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <h1 className="mb-8 animate-pulse text-5xl font-bold">Coming Soon</h1>
          <p className="mb-8 text-lg">
            We&apos;re working hard to bring you something amazing. Stay tuned!
          </p>
        </div>
      </Layout>
    </div>
  );
}

export const Head = () => <title>About Me</title>;
