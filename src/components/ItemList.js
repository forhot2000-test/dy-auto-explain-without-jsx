import * as React from "react";
import { ExplainButton } from "./ExplainButton";
import { useSeq } from "../hooks/useSeq";

const buttonMargin = 20;

function initData(seq) {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push({ id: seq.next(), explaining: false });
  }
  return array;
}

export const ItemList = (props) => {
  const seq = useSeq();
  const [array, setArray] = React.useState(() => initData(seq));

  const toggle = (id) => {
    return () => {
      // delay change state
      setTimeout(() => {
        setArray((prev) => {
          const next = prev.map((x) => {
            if (id === x.id) return { ...x, explaining: !x.explaining };
            if (x.explaining) return { ...x, explaining: false };
            return x;
          });
          return next;
        });
      }, 100);
    };
  };

  const remove = (id) => {
    return () => {
      setArray((prev) => prev.filter((x) => x.id !== id));
    };
  };

  const add = () => {
    setArray((prev) => [...prev, { id: seq.next(), explaining: false }]);
  };

  return (
    // <div className="list">
    React.createElement(
      "div",
      { className: "list" },
      // <div className="inner">
      React.createElement(
        "div",
        { className: "inner" },
        // {array.map((x, i) => (
        //   ...
        // ))}
        array.map((x, i) =>
          // <div
          //   key={x.id}
          //   style={{ marginBottom: buttonMargin }}
          //   data-rbd-draggable-id={x.id}
          // >
          React.createElement(
            "div",
            {
              key: x.id,
              style: { marginBottom: buttonMargin },
              "data-rbd-draggable-id": x.id
            },
            // <span className="index_goodsTitle_XXXX">{`Item ${x.id}`}</span>
            React.createElement(
              "span",
              { className: "index_goodsTitle_XXXX" },
              `Item ${x.id}`
            ),
            // <ExplainButton state={x.explaining} toggle={toggle(x.id)} />
            React.createElement(ExplainButton, {
              state: x.explaining,
              toggle: toggle(x.id)
            }),
            // <button className="btn btn-remove" onClick={remove(x.id)}>
            //   remove
            // </button>
            React.createElement(
              "button",
              { className: "btn btn-remove", onClick: remove(x.id) },
              "remove"
            )
          )
        ),
        // <button className="btn btn-add" onClick={add}>
        //   add
        // </button>
        React.createElement(
          "button",
          { className: "btn btn-add", onClick: add },
          "add"
        )
      )
    )
  );
};
