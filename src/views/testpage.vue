<template>
  <section>
    <!-- Typing effect for text -->
    <div class="typing">
      <div class="typing-effect">Typing effect for text</div>
    </div>
    <!-- Shadow for transparent images -->
    <div class="transparent-shadow">
      <div class="margin-right">
        <div class="margin-bottom align-center">box-shadow</div>

        <img
          class="box-shadow"
          src="https://c6c8j7x5.rocketcdn.me/wp-content/uploads/2022/02/logo.png"
          alt="box-shadow example (transparent)"
        />
      </div>

      <div>
        <div class="margin-bottom align-center">drop-shadow</div>

        <img
          class="drop-shadow"
          src="https://c6c8j7x5.rocketcdn.me/wp-content/uploads/2022/02/logo.png"
          alt="drop-shadow example (transparent)"
        />
      </div>
    </div>
    <!-- Set a custom cursor -->
    <div class="custom-cursor">
      <div class="card">Default</div>

      <div class="card card-image-cursor">Image</div>

      <div class="card card-emoji-cursor">Emoji</div>
    </div>
    <!-- Simple tooltip using attr() -->
    <h1>HTML/CSS tooltip</h1>
    <p>
      Hover <span class="tooltip" tooltip-data="Tooltip Content">Here</span> to see the
      tooltip.
    </p>
    <p>
      You can also hover
      <span class="tooltip" tooltip-data="This is another Tooltip Content">here</span>
      to see another example.
    </p>
    <!-- Checklist in pure CSS -->
    <div class="checklist">
      <h2>Item Checklist with CSS</h2>
      <label>
        <input type="checkbox" name="" id="" />
        <i></i>
        <span>Item #1</span>
      </label>
      <label>
        <input type="checkbox" name="" id="" />
        <i></i>
        <span>Item #2</span>
      </label>
      <label>
        <input type="checkbox" name="" id="" />
        <i></i>
        <span>Item #3</span>
      </label>
    </div>
    <!-- Accordion dropdown using keyframes -->
    <main>
      <details open>
        <summary>Accordion Tab #1</summary>
        <div class="tab-content">
          <p>your text goes here</p>
        </div>
      </details>

      <details>
        <summary>Accordion Tab #2</summary>
        <div class="tab-content">
          <p>your text goes here</p>
        </div>
      </details>
      <details>
        <summary>Accordion Tab #3</summary>
        <div class="tab-content">
          <p>your text goes here</p>
        </div>
      </details>
      <!-- Hover effect sidebar -->
      <div class="css-dynamic-sidebar">
        <nav>
          <a class="" href="#">Menu #1</a>
          <a class="" href="#">Menu #2</a>
          <a class="" href="#">Menu #3</a>
        </nav>

        <div class="site-content">
          <p>Hover over the sidebar</p>
          <p>Also work with Tab selector (for accessibility)</p>
        </div>
      </div>
      <!-- Letter dropcap using first-letter -->
      <div class="content-section">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod doloremque illo
          quo beatae id pariatur, temporibus vero exercitationem harum? Aspernatur sequi
          quaerat, nisi et error aut nemo porro sit deserunt.
        </p>
      </div>
      <!-- Add an icon before buttons using ::before -->
      <div class="card">
        <div class="card-body">
          <a
            href=""
            target="_blank"
            class="wp-block-button btn btn-web btn-primary"
            rel="noopener"
            >Website</a
          >
          <a
            href=""
            target="_blank"
            class="wp-block-button btn btn-docu btn-primary"
            rel="noopener"
            >Documentation</a
          >
          <a
            href=""
            target="_blank"
            class="wp-block-button btn btn-gh btn-primary"
            rel="noopener"
            >GitHub</a
          >
        </div>
      </div>
      <!-- Button border animation -->
      <div class="button-border my-10">
        <button class="button">Submit</button>
      </div>

      <!-- Hover underline animation -->
      <p class="hover-underline-animation my-12">Hover this text to see the effect!</p>
    </main>
  </section>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from "vue";
import { getCustomerSingleProduct } from "Service/apis.js";
import { useToast } from "vue-toastification";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  props: {},
  setup(props, { emit }) {
    const route = useRoute();
    const router = useRouter();

    const toast = useToast();
    const product = ref([]);

    return {};
  },
});
</script>

<style lang="scss" scoped>
// Typing effect for text
.typing {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.typing-effect {
  width: 22ch;
  animation: typing 2s steps(22), effect 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes effect {
  50% {
    border-color: transparent;
  }
}
// Shadow for transparent images
.transparent-shadow {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.margin-right {
  margin-right: 2em;
}

.margin-bottom {
  margin-bottom: 1em;
}

.align-center {
  text-align: center;
}

.box-shadow {
  box-shadow: 2px 4px 8px #3723a1;
}

.drop-shadow {
  filter: drop-shadow(2px 4px 8px #3723a1);
}
// Set a custom cursor
.custom-cursor {
  display: flex;
  height: 80vh;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  padding: 0 10px;
}

.card {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d29a5a;
  margin-right: 10px;
  color: #fff;
  font-size: 1.4em;
  text-align: center;
}

.card-image-cursor {
  background-color: #d11a5a;
  cursor: url(https://stackdiary.com/tools/assets/img/tools/html-beautifier.svg), auto;
}

.card-emoji-cursor {
  background-color: #d29b22;
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='48' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🚀</text></svg>"),
    auto;
}
// Simple tooltip using attr()
.tooltip {
  position: relative;
  border-bottom: 1px dotted black;
}

.tooltip:before {
  content: attr(tooltip-data);
  position: absolute;
  width: 250px;
  background-color: #efba93;
  color: #fff;
  text-align: center;
  padding: 15px;
  line-height: 1.1;
  border-radius: 5px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.5s;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  font-size: 0.7em;
  visibility: hidden;
}

.tooltip:after {
  content: "";
  position: absolute;
  bottom: 75%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  opacity: 0;
  transition: opacity 0.5s;
  border-color: #000 transparent transparent transparent;
  visibility: hidden;
}

.tooltip:hover:before,
.tooltip:hover:after {
  opacity: 1;
  visibility: visible;
}
// Checklist in pure CSS
.checklist {
  padding: 50px;
  position: relative;
  background: #043b3e;
  border-top: 50px solid #03a2f4;
}
.checklist h2 {
  color: #f3f3f3;
  font-size: 25px;
  padding: 10px 0;
  margin-left: 10px;
  display: inline-block;
  border-bottom: 4px solid #f3f3f3;
}
.checklist label {
  position: relative;
  display: block;
  margin: 40px 0;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}
.checklist input[type="checkbox"] {
  -webkit-appearance: none;
}
.checklist i {
  position: absolute;
  top: 2px;
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 2px solid #fff;
}
.checklist input[type="checkbox"]:checked ~ i {
  top: 1px;
  height: 15px;
  width: 25px;
  border-top: none;
  border-right: none;
  transform: rotate(-45deg);
}
.checklist span {
  position: relative;
  left: 40px;
  transition: 0.5s;
}
.checklist span:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: #fff;
  transform: translateY(-50%) scaleX(0);
  transform-origin: left;
  transition: transform 0.5s;
}
.checklist input[type="checkbox"]:checked ~ span:before {
  transform: translateY(-50%) scaleX(1);
  transform-origin: right;
  transition: transform 0.5s;
}
.checklist input[type="checkbox"]:checked ~ span {
  color: #154e6b;
}
// Accordion dropdown using keyframes
/* .tab-content can be styled as you like */
main {
  max-width: 400px;
  margin: 0 auto;
}
p {
  text-align: justify;
  font-family: monospace;
  font-size: 13px;
}
summary {
  font-size: 1rem;
  font-weight: 600;
  background-color: #f3f3f3;
  color: #000;
  padding: 1rem;
  margin-bottom: 1rem;
  outline: none;
  border-radius: 0.25rem;
  cursor: pointer;
  position: relative;
}
details[open] summary ~ * {
  animation: sweep 0.5s ease-in-out;
}
@keyframes sweep {
  0% {
    opacity: 0;
    margin-top: -10px;
  }
  100% {
    opacity: 1;
    margin-top: 0px;
  }
}
details > summary::after {
  position: absolute;
  content: "+";
  right: 20px;
}
details[open] > summary::after {
  position: absolute;
  content: "-";
  right: 20px;
}
details > summary::-webkit-details-marker {
  display: none;
}
// Hover effect sidebar
.css-dynamic-sidebar {
  overflow: hidden;
  position: relative;
  height: 15em;
  max-width: 15em;
  margin: auto;
}

.site-content {
  margin: auto;
}

nav {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 100%;
  padding: 1em;
  background-color: #f3f3f3;
  transform: translateX(1em);
  transition: 0.2s transform;
}

nav:hover,
nav:focus-within {
  transform: translateX(100%);
}

a {
  white-space: pre;
  color: black;
}

p {
  font-size: 2em;
  font-family: monospace;
  text-align: center;
}
// Letter dropcap using first-letter
/* here we target the .content-section wrapper and select the p element. then append first-of-type and target first-letter specifically. you can then reuse the same option in other parts of your design by changing the wrapper variable */

.content-section p:first-of-type::first-letter {
  color: #f3f3f3;
  float: left;
  font-size: 4rem;
  line-height: 4vw;
  padding-right: 8px;
  /* border: 0.25em double; */
}

/* you can also add custom properties like border to create a creative dropcap effect, ideal for book presentations, etc,. */

// Add an icon before buttons using ::before
/* select the global button design and then query the specific button class for which you wish to use the custom icon or image */

// .btn-primary .btn-docu:before {

// }

::v-deep(.btn-primary .btn-docu:before) {
  content: "\0000a0";
  display: inline-flex;
  height: 24px;
  width: 24px;
  line-height: 24px;
  margin: 0px 10px 0px 0px;
  position: relative;
  top: 0px;
  left: 0px;
  background: url(https://stackdiary.com/docu.svg) no-repeat left center transparent;
  background-size: 100% 100%;
}

// Button border animation
.button {
  background-color: #c47135;
  border: none;
  color: #ffffff;
  outline: none;
  padding: 12px 40px 10px;
  position: relative;
}
.button:before,
.button:after {
  border: 0 solid transparent;
  transition: all 0.25s;
  content: "";
  height: 24px;
  position: absolute;
  width: 24px;
}
.button:before {
  border-top: 2px solid #c47135;
  left: 0px;
  top: -5px;
}
.button:after {
  border-bottom: 2px solid #c47135;
  bottom: -5px;
  right: 0px;
}
.button:hover {
  background-color: #c47135;
}
.button:hover:before,
.button:hover:after {
  height: 100%;
  width: 100%;
}
</style>
