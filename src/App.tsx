import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Gallery from "./Gallery";
import Navbar from "./Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Gallery />
    </QueryClientProvider>
  );
}

export default App;
