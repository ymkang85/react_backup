// global.d.ts 
declare module "*.png";
declare module "*.jpg";
declare module "*.webp";
declare module "*.svg";

declare module "*.css" {
  const content: { [className: string]: string };
  export = content;
}