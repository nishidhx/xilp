interface ResourcesSection {
  title: string;
  animationDelay: string;
}

export const ResourcesSection = ({ title, animationDelay }: ResourcesSection) => {
  return (
    <div className="animate-in-up" style={{ animationDelay: animationDelay }}>
      <article>
        <h1 className="text-lg font-semibold">{title}</h1>
      </article>
    </div>
  );
};
