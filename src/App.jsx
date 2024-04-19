import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import defaultOptions from "./configs/reactQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({defaultOptions});
function App() {
  return(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
       <Router/>
      </QueryClientProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </BrowserRouter>
  )
}

export default App;
