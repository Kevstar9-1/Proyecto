import Footer from "../components/footer";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-300 text-black min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="report">
          <img src="./ima/informe.png" alt="logo" width="200" style={{ margin: '0 auto' }} />
        </div>
        <br />
        <h1 className="text-5xl font-bold mb-4">Reports</h1>
        <p className="text-xl mb-8">In this section you can enter essential information to identify your report</p>
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 rounded-md"
          placeholder="Enter your code number"
        />
        <button
          className="bg-custom-color hover:bg-custom-color-dark text-white font-bold py-2 px-4 rounded mt-4"
          style={{ backgroundColor: "#3c6e71" }}
        >
          Report
        </button>
        <br />
        <br />
        <div><p className="text-xl mb-8">There you can put your code and receive persobal and available information
          of your package. Billing information, personal or identify information... </p></div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
