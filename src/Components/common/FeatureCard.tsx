interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

export const FeatureCard = ({
  title,
  description,
  image,
}: FeatureCardProps) => (
  <div className="flex flex-col md:flex-row items-center justify-between w-full h-full gap-4 md:gap-8">
    <div className="flex flex-col gap-2 md:gap-4 flex-1 text-center md:text-left">
      <h2 className="text-2xl md:text-4xl font-bold text-white">{title}</h2>
      <p className="text-white/80 text-sm md:text-lg leading-relaxed">
        {description}
      </p>
    </div>
    <div className="w-full max-w-[280px] md:w-72 h-32 md:h-44 rounded-2xl md:rounded-3xl overflow-hidden border-4 border-white/30 shadow-lg shrink-0">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
  </div>
);
