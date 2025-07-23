import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jobcard from "./components/Jobcard";

function App() {
  return (
    <div className="min-h-screen mx-auto px-4 sm:px-6 md:px-10 bg-amber-50">
      <Header />
      <Jobcard />
      <Footer />
    </div>
  );
}

export default App;
