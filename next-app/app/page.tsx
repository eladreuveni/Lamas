import Content from "./components/Content";
import TopBar from "./components/TopBar";
import { AppContextProvider } from "./context/AppContext";

export default function Home() {
  return (
    <AppContextProvider>
      <main>
        <TopBar />
        <Content />
      </main>
    </AppContextProvider>
  )
}
