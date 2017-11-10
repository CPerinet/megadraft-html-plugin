/*
 * Copyright (c) 2017, Charles Perinet <charles.perinet@gmail.com>
 *
 * License: MIT
 */

import Button from "./Button";
import Block from "./Block";
import constants from "./constants";


export default {
  title: constants.PLUGIN_NAME,
  type: constants.PLUGIN_TYPE,
  buttonComponent: Button,
  blockComponent: Block,
  options: {
    displayOptions : []
  }
};
