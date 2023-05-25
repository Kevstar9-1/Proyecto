import Footer from "../components/footer";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-300 text-black min-h-screen flex items-center justify-center">
      <div className="logo">
        <img src="./ima/reporte.png" alt="report" />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;