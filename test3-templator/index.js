const chatsTmpl = new window.Templator(window.chatsTemplate);
const chatsElementTmpl = new window.Templator(window.chatsElementTemplate);

const context = {
  items: [1, 2, 3, 4]
    .map(item => chatsElementTmpl.compile({ name: item }))
    .join("\n\t"),
  className: "chat",
  chat: {
    id: 123
  },
  handleClick: function() {
    console.log(document.querySelector(".chat"));
  }
};

const root = document.querySelector(".root");
root.innerHTML = chatsTmpl.compile(context);