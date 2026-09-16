import type { SkillCategory as SkillCategoryType } from "@/content/types";

type SkillCategoryProps = {
  category: SkillCategoryType;
};

export function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <article className="border border-border p-5">
      <h2 className="text-lg font-semibold">{category.name}</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li key={skill} className="border border-border px-2 py-1 text-sm">
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
