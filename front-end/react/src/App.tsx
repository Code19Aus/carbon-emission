import { ConfigProvider } from "antd";
import AppRouter from "./components/routers/AppRouter";


function App() {
  return (
    <div className="App">
      <ConfigProvider theme={{
        token: {
          colorPrimary: "#421b50"
        }
      }}>
        <AppRouter />
      </ConfigProvider>
    </div>
  )
}

export default App
