import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  const series = [
    { id: 1, title: "Game of Thrones" },
    { id: 2, title: "Breaking Bad" },
  ];

  return (
    <div className="app">
      <Header />
      <List series={series} />
      <Footer />
    </div>
  );
}

export default App;