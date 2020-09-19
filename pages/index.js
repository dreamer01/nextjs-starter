import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/Layout.js";

function Home() {
  return (
    <Layout>
      <center>
        <h1>Lets Build Stuff</h1>
      </center>
      <br />
      <h2>Configuration 🛠 </h2>
      <li>Please replace "PROJECT_NAME" with your project name.</li>
      <li>Please replace "PROJECT_DESC" with your project description.</li>
      <li>Please update all icons also.</li>
      <br />
      <h2>Theme 💅 </h2>
      <li>
        You can update theme by updating colors in
        <code>./theme/color.js </code>
        file.
      </li>
      <li>
        You can update global styles by updating
        <code>./theme/globalStyles.js</code> file.
      </li>
      <br />
      <h2>Webpack 🧰 </h2>
      <li>
        Webpack configuration has been updated to support to import
        <code> svg, fonts & images.</code>
      </li>
      <br />
      <h2>Dependencies 🌊 </h2>
      <li>
        <code>next-offline</code> Add offline support.
      </li>
      <br />
      <br />
      <h2>Support 💖 </h2>
      <li>
        If you will be using this next.js starter project please give it a star
        on
        <a target="blank" href="https://github.com/dreamer01/nextjs-starter">
          &nbsp; github
        </a>
        .
      </li>
    </Layout>
  );
}

Home.propTypes = {};

export default Home;
