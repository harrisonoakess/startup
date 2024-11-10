import React from "react";

export default function MessageInput() {
  return (
    <section id="message-input">
      <form id="enter-text">
        <textarea name="message" id="input" placeholder="Type here" rows="2" cols="50"></textarea>
        <input type="submit" value="Send" />
      </form>
    </section>
  );
}