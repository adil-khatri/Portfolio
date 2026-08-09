import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section 
      className="py-32 px-4 md:px-24 border-t border-border-subtle"
      data-section="skills"
    >
      <div className="mb-20">
        <h2 className="font-mono text-sm tracking-widest uppercase text-muted mb-4">
          03 // Capabilities
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
          Technical Arsenal
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="flex flex-col">
            <h4 className="font-mono text-sm text-accent mb-6 uppercase tracking-wider">
              {skillGroup.category}
            </h4>
            <ul className="flex flex-col gap-4">
              {skillGroup.items.map((item) => (
                <li 
                  key={item} 
                  className="text-xl md:text-2xl font-medium tracking-tight hover:text-accent transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
