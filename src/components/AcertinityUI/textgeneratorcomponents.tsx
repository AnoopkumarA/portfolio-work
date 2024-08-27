"use client";
import { TextGenerateEffect } from "./textgenerator";

const words = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
` ;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
