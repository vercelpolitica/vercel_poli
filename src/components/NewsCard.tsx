import { Clock } from "lucide-react";

interface NewsCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  time: string;
  featured?: boolean;
}

const NewsCard = ({ image, category, title, excerpt, time, featured = false }: NewsCardProps) => {
  if (featured) {
    return (
      <article className="card-news group cursor-pointer">
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-accent text-accent-foreground rounded mb-3">
              {category}
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3 line-clamp-3">
              {title}
            </h3>
            <p className="font-body text-sm text-primary-foreground/80 line-clamp-2 mb-3">
              {excerpt}
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              <Clock className="h-4 w-4" />
              <span>{time}</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="card-news group cursor-pointer">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-accent text-accent-foreground rounded">
          {category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-card-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="font-body text-sm text-muted-foreground line-clamp-2 mb-3">
          {excerpt}
        </p>
        <div className="flex items-center gap-2 text-muted-foreground text-xs">
          <Clock className="h-3 w-3" />
          <span>{time}</span>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
