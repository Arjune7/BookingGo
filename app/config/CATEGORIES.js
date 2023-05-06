import TOURS from "./TOURS";

export default [
  {
    id: 1,
    title: "Sights",
    tours: [...TOURS],
  },
  {
    id: 2,
    title: "Tours",
    tours: [...TOURS, ...TOURS],
  },
  {
    id: 3,
    title: "Adventures",
    tours: [...TOURS, ...TOURS],
  },
];
