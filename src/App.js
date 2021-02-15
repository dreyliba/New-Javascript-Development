import "./App.scss";
import "antd/dist/antd.css";
import { Button } from "antd";

function App() {
  return (
    <div className="main-body">
      <div className="body-1">
        <div className="body-item-1">
          <h1>Hello Wolrd</h1>
          <Button type="primary">Primary Button</Button>
        </div>
      </div>
      <div className="body-2">
        <div className="body-item-2">
          <h1>Hello Universe</h1>
          <Button type="danger">Dashed Button</Button>
        </div>
      </div>
      <div className="body-3">
        <div className="body-item-3">
          <h1>Hello Galaxy</h1>
          <Button type="dashed">Link Button</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
