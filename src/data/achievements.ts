export interface Achievement {
  id: string;
  title: string;
  event: string;
  image: string;
}

export const achievements: Achievement[] = [
  {
    id: "01",
    title: "Hackover",
    event: "Hackathon",
    image: "/images/Hackover.PNG"
  },
  {
    id: "02",
    title: "Code Utsava",
    event: "Hackathon",
    image: "/images/CodeUtsava.png"
  },
  {
    id: "03",
    title: "Hacking Heist",
    event: "Hackathon",
    image: "/images/hackingheist.png"
  },
  {
    id: "04",
    title: "Next Step",
    event: "Hackathon",
    image: "/images/Nextstep.png"
  },
  {
    id: "05",
    title: "Unscript 2k22",
    event: "Hackathon",
    image: "/images/Unscript2k22.png"
  },
  {
    id: "06",
    title: "Power to Fly",
    event: "Hackathon",
    image: "/images/powertofly.png"
  }
];
