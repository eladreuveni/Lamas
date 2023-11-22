import Content from "./components/Content";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import { AppContextProvider } from "./context/AppContext";

export default function Home() {
  return (
    <AppContextProvider>
      <main>
        <TopBar />
        <Content />
        <Footer />
      </main>
    </AppContextProvider>
  )
}
