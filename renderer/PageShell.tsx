import React from "react";
import { PageContextProvider } from "../hooks/usePageContext";
import type { PageContext } from "../hooks/types";
import "./globals.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export { PageShell };

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Nav />
          <Content>{children}</Content>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="pt-14">{children}</div>
      <Footer />
    </>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
