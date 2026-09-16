import type { SkillCategory as SkillCategoryType } from "@/content/types";

type SkillCategoryProps = {
  category: SkillCategoryType;
};

export function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <article className="schematic-panel p-5">
      <h2 className="text-lg font-semibold">{category.name}</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li
            key={skill}
            className="border border-border bg-accent-soft/30 px-2 py-1 font-mono text-xs text-accent"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
