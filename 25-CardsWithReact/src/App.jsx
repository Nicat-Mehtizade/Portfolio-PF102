import "./App.css";
import BlogList from "./assets/components/BlogList";

const App = () => {
  const blogs = [
    {
      id: 1,
      title: "React Nədir?",
      content: "React, komponent əsaslı frontend kitabxanasıdır...",
      author: "Elvin Məmmədov",
      date: "2024-02-04",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
    },
    {
      id: 2,
      title: "Props Necə İşləyir?",
      content: "Props vasitəsilə komponentlər arasında məlumat ötürülə bilər...",
      author: "Aygün Quliyeva",
      date: "2024-02-03",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
    },
    {
      id: 3,
      title: "Componentlərin Üstünlükləri",
      content: "Componentlər kodun təkrar istifadəsinə və daha asan idarə olunmasına imkan yaradır...",
      author: "Nihad Əhmədov",
      date: "2024-02-02",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
    }
  ];
  return (
    <div className="container">
      <h1 className="header">Mənim Bloqlarım</h1>
      <BlogList blogs={blogs}/>
    </div>
  );
};

export default App;
