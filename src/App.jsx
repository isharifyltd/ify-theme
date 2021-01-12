import Button from "./components/button";
import Form from "./components/form";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Tooltip from "./components/tooltip";

function App() {
  return (
    <>
      <Header />
      <main className="Ify-container">
        {/* Button components start */}
        <div className="Ify-p30 Ify-m20 Ify-border">
          <h2>Isharify buttons</h2>
          <p style={{ marginBottom: "10px" }}>Button will be 'Title Case'</p>
          <Button />
        </div>
        {/* Button components end */}
        {/* Button components start */}
        <div className="Ify-p30 Ify-m20 Ify-border">
          <h2>Isharify tooltip</h2>
          <p style={{ marginBottom: "10px" }}>Tooltip will be 'Sentence case'</p>
          <div className="Ify-tooltip-parent">
            <button className="Ify-btn Ify-btn-cancel">Isharify tooltip parent</button>
            <Tooltip />
          </div>
        </div>
        {/* Button components end */}

        {/* Form components start */}
        <div className="Ify-p30 Ify-m20 Ify-border Ify-border">
          <h2>Isharify input fields</h2>
          <p style={{ marginBottom: "10px" }}>
            Label will be 'Title Case' and placeholder will be 'Sentence case' and no fullstop and required field star
            will take a space.
          </p>
          <Form />
        </div>
        {/* Form components end */}
      </main>
      <Footer />
    </>
  );
}

export default App;
