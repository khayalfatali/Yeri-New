import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  index?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  index,
}: Props) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${a}`}>
      <Reveal>
        <div
          className={`flex items-center gap-3 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          {index && (
            <span className="num-mono text-[11px] tracking-[0.18em] text-ink-400">
              {index}
            </span>
          )}
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.06} as="h2">
        <span className="display mt-4 block text-balance text-[36px] font-medium gradient-text sm:text-[48px] lg:text-[60px]">
          {title}
        </span>
      </Reveal>
      {description && (
        <Reveal delay={0.12} as="p">
          <span className="mt-5 block max-w-2xl text-balance text-[16px] leading-relaxed text-ink-200 sm:text-[17px]">
            {description}
          </span>
        </Reveal>
      )}
    </div>
  );
}
