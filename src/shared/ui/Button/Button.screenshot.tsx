import React from "react";
import { ReactScreenshotTest } from "react-screenshot-test";
import { Button } from "./Button";
import "./global.css";
import classes from "./Button.module.scss";

describe("screenshots", () => {
  ReactScreenshotTest.create("FancyButton")
    .viewport("Desktop", {
      width: 1024,
      height: 768,
    })
    .viewport("iPhone X", {
      width: 375,
      height: 812,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false,
    })
    .shoot("with label", <Button className={classes.button}>Hello, World!</Button>)

    .shoot("empty label", <Button />)
    .shoot(
      "custom label",
      <Button className={classes.button}> Red label</Button>
    )
    .run();
});