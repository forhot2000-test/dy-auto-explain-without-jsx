import * as React from "react";
import { ItemList } from "./components/ItemList";
import { MessageList } from "./components/MessageList";
import "./styles.css";

export default function App() {
  return (
    // <div className="container">
    React.createElement(
      "div",
      { className: "container" },
      // <div className="left">
      React.createElement(
        "div",
        { className: "left" },
        // <MessageList />
        React.createElement(MessageList)
      ),
      // <div className="content">
      React.createElement(
        "div",
        { className: "content" },
        // <ItemList />
        React.createElement(ItemList)
      )
    )
  );
}
