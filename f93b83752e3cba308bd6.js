"use strict";import"./index.html";import"./style/style.scss";const form=document.querySelector(".todo__form"),todoList=document.querySelector(".todo__list");function toDo(t){t.preventDefault();const e=document.querySelector(".todo__input"),o=e.value.trim();if(""===o)return alert("You wrote empty string");const n=document.createElement("li");n.className="todo__list-item";const d=document.createTextNode(o);n.appendChild(d);const r=document.createElement("button");r.appendChild(document.createTextNode("Delete")),r.className="todo__btn",r.dataset.action="delete",n.appendChild(r),todoList.prepend(n),e.value=""}function itemDelete(t){t.target.hasAttribute("data-action")&&"delete"===t.target.getAttribute("data-action")&&t.target.parentNode.remove()}form.addEventListener("submit",toDo),todoList.addEventListener("click",itemDelete);