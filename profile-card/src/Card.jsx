const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "bg-blue-500",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "bg-yellow-500",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "bg-green-300",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "bg-orange-600",
  },
  {
    skill: "React",
    level: "advanced",
    color: "bg-blue-400",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "bg-red-600",
  },
];

function CardImage() {
  return (
    <img
      src="./src/assets/1.jpg"
      alt="Programmer"
      className="max-w-full object-contain"
    />
  );
}
function CardDetails() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-mono text-4xl font-semibold">Gracjan Markiewicz</h1>
      <p className="font-mono text-lg font-medium leading-snug">
        Front-end developer. Consumed and fascinated by coding world. When not
        coding I think about things Im working on right now.
      </p>
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div
      key={skillObj.skill}
      className={`${skillObj.color} mb-2 mr-4 inline-block w-max whitespace-nowrap rounded-md px-2 font-mono font-semibold`}
    >
      {skillObj.skill}&nbsp;
      {skillObj.level === "beginner"
        ? "👶"
        : skillObj.level === "intermediate"
        ? "👍"
        : "💪"}
    </div>
  );
}

function Card() {
  // const skillsObj = skills;
  return (
    <div className="m-20 max-w-md border-4 border-black">
      <CardImage />
      <div className="p-8">
        <CardDetails />
        <div className="pt-4">
          {skills.map((skill) => (
            <Skill key={skills.skill} skillObj={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
