
import "../../../node_modules/react-grid-layout/css/styles.css";
import "../../../node_modules/react-resizable/css/styles.css";
import GridLayout from "react-grid-layout";

function DescriptionImageGridPreview() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 1, static: true },
    { i: "b", x: 0, y: 1, w: 1, h: 1, static: true },
    { i: "c", x: 1, y: 0, w: 1, h: 2, static: true },
  ];

  const descriptionImageUrls: string[] = [
    "https://images.unsplash.com/photo-1659421908618-16e001c5d818?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    "https://images.unsplash.com/photo-1659428737175-8defc2c99d50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    "https://images.unsplash.com/photo-1659398730848-99dddd3520a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  ];

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={2}
      rowHeight={160}
      width={320}
      autoSize={true}
      margin={[0, 0]}
      containerPadding={[0, 0]}
      isDraggable={false}
      isResizable={false}
      isBounded={false}
    >
      <div key="a">
        <img src={descriptionImageUrls[0]} alt="" className="slideImage" />
      </div>
      <div key="b">
        <img src={descriptionImageUrls[1]} alt="" className="slideImage" />
      </div>
      <div key="c">
        <img src={descriptionImageUrls[2]} alt="" className="slideImage" />
      </div>
    </GridLayout>
  );
}

export default DescriptionImageGridPreview;
