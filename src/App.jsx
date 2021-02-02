import Button from "./components/button";
import Form from "./components/form";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Tooltip from "./components/tooltip";
import VerticalTabs from "./components/vertical-tabs";
import Table from "./components/table";
import Radio from "./components/radio";
import Checkbox from "./components/checkbox";
import Loading from "./components/loading";
import Modals from "./components/modals";
import IfyDrawer from "./components/drawer";
import InfoIcon from "./icons/info-icon";

function App() {
  return (
    <>
      <Header />
      <main className="Ify-container">
        {/* Button components start */}
        <div className="Ify-p30 Ify-m20 Ify-border">
          <h2 className="Ify-mb5">Isharify buttons</h2>
          <p className="Ify-mb10">Button will be 'Title Case'</p>
          <Button />
          <p className="Ify-mb10 Ify-mt10">Radio button</p>
          <Radio />
          <p className="Ify-mb10 Ify-mt10">Checkbox button</p>
          <Checkbox />
        </div>
        {/* Button components end */}

        {/* Loading component start */}
        <div className="Ify-p30 Ify-m20 Ify-border">
          <Loading />
        </div>
        {/* Loading component end */}

        {/* Button components start */}
        <div className="Ify-p30 Ify-m20 Ify-border">
          <h2 className="Ify-mb5">Isharify tooltip</h2>
          <p className="Ify-mb10">Tooltip will be 'Sentence case'</p>
          <div className="Ify-info Ify-tooltip-parent">
            <InfoIcon />
            <Tooltip />
          </div>
        </div>
        {/* Button components end */}

        {/* Form components start */}
        <div className="Ify-p30 Ify-m20 Ify-border">
          <h2 className="Ify-mb5">Isharify input fields</h2>
          <p className="Ify-mb10">
            Label will be 'Title Case' and placeholder will be 'Sentence case' and no fullstop and required field star
            will take a space.
          </p>
          <div className="Ify-input-group-wrapper">
            <Form />
          </div>

          <p className="Ify-mb10 Ify-mt10">Form two columns</p>
          <div className="Ify-input-group-wrapper Ify-col-2">
            <Form />
          </div>
          <p className="Ify-mb10 Ify-mt10">Form three columns</p>
          <div className="Ify-input-group-wrapper Ify-col-3">
            <Form />
          </div>
        </div>
        {/* Form components end */}

        {/* Vertical tab components start */}
        <div className="Ify-p30 Ify-m20 Ify-border ">
          <h2 className="Ify-mb5">Isharify modal and drawer</h2>
          <div className="Ify-btn-group">
            <Modals />
            <IfyDrawer />
          </div>
        </div>
        {/* Vertical tab components end */}

        {/* Vertical tab components start */}
        <div className="Ify-p30 Ify-m20 Ify-border ">
          <h2 className="Ify-mb5">Isharify vertical tabs</h2>
          <VerticalTabs />
        </div>
        {/* Vertical tab components end */}

        {/* Table components start */}
        <div className="Ify-p30 Ify-m20 Ify-border">
          <h2 className="Ify-mb5">Isharify Table</h2>
          <Table />
        </div>
        {/* Table components end */}
      </main>
      <Footer />
    </>
  );
}

export default App;
