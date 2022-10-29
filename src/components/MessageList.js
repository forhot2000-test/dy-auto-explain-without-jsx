import * as React from "react";

export function MessageList(props) {
  const [data, setData] = React.useState(["01", "02", "03"]);
  const [message, setMessage] = React.useState("");

  const send = () => {
    setData((prev) => [...prev, message]);
    setMessage("");
    console.log("send:", message);
  };

  return (
    // <div>
    React.createElement(
      "div",
      null,
      // <div>
      React.createElement(
        "div",
        null,
        // {data.map((x, i) => (
        //   ...
        // ))}
        data.map((x, i) =>
          // <div key={i}>{x}</div>
          React.createElement("div", { key: i }, x)
        )
      ),
      // <div className="auxo-sp-input">
      React.createElement(
        "div",
        { className: "auxo-sp-input" },
        // <input value={message} onChange={(e) => setMessage(e.target.value)} />
        React.createElement("input", {
          value: message,
          onChange: (e) => setMessage(e.target.value)
        }),
        // <span className="auxo-input-suffix">
        //   <div onClick={send}>发送</div>
        // </span>
        React.createElement(
          "span",
          { className: "auxo-input-suffix" },
          React.createElement("div", { onClick: send }, "发送")
        )
      )
    )
  );
}
