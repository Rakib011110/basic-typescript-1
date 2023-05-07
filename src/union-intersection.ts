type NoobDeveloper = {
  name: string;
};

// type JuniorDeveloper = {
//   name: string;
//   expertise: string;
//   exprience: number;
// };

enum Level {
  junior = "junior",
  mid = "mid",
  senior = "senior",
}
type Nextlevel = JuniorDeveloper & {
  leaderShipEXprience: number;
  level: Level;
};

type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  exprience: number;
};

const newDeveloper: JuniorDeveloper = {
  name: "rakib",
  expertise: "javaScript",
  exprience: 1,
};

const deveLoper: Nextlevel = {
  name: "nextBro",
  expertise: "typeScirp",
  exprience: 2,
  leaderShipEXprience: 1,
  level: Level.junior,
};
