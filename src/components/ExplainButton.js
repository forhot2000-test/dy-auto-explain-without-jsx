import * as React from "react";

export const ExplainButton = ({ state, toggle }) => {
  return (
    // <button
    //   id={state ? "index_explainButtonActive_XXXX" : "index_explainButton_XXXX"}
    //   onClick={toggle}
    //   style={{ marginLeft: 5 }}
    // >
    //   {state ? "取消讲解" : "讲解"}
    // </button>
    React.createElement(
      "button",
      {
        id: state
          ? "index_explainButtonActive_XXXX"
          : "index_explainButton_XXXX",
        onClick: toggle,
        style: { marginLeft: 5 }
      },
      state ? "取消讲解" : "讲解"
    )
  );
};
