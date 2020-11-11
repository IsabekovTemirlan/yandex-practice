window.chatsTemplate = (function() {
  return `
<!-- Можно внутренность {{}} с пробелами, можно без-->
<ul class="{{ className }}" data-chat-id="{{chat.id}}" onClick="{{handleClick}}">
  {{ items }}
</ul>
`;
})();

window.chatsElementTemplate = (function() {
  return `<li>{{name}}</li>`;
})();