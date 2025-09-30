import ecommerce from "./assets/ecommerce.png";
import salary from "./assets/salary.png";
import yolo from "./assets/yolo.png";
import summarizer from "./assets/summarizer.png";

export const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    desc: "A React.js-based responsive e-commerce web app with product listing, cart functionality, and dynamic user interface.",
    img: ecommerce,
    github: "https://github.com/NagaOmSriKosana/E-Commerce",
    live: "#"
  },
  {
    id: 2,
    title: "Employee Salary System",
    desc: "Python project to manage employee salary details.",
    img: salary,
    github: "https://github.com/NagaOmSriKosana/Employee_Salary_System",
    live: "#"
  },
  {
    id: 3,
    title: "YOLO Object Detection",
    desc: "Real-time object detection with YOLOv3 + Flask + OpenCV.",
    img: yolo,
    github: "https://github.com/NagaOmSriKosana/Yolo-Real-Time-Object-Detection",
    live: "#"
  },
  {
    id: 4,
    title: "Text Summarizer",
    desc: "Flask + NLP-based text summarization app.",
    img: summarizer,
    github: "https://github.com/NagaOmSriKosana/Text-Summarization",
    live: "#"
  }
];

export const skills = ["React", "JavaScript", "HTML", "CSS", "Flask", "OpenCV"];
