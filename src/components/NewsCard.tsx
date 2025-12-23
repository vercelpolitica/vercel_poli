import { Clock, Zap } from "lucide-react";

interface NewsCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  time: string;
  featured?: boolean;
}

const NewsCard = ({ image, category, title, excerpt, time, featured = false }: NewsCardProps) => {
  const isUrgent = category.includes("🔴") || category.includes("URGENTE");

  if (featured) {
    return (
      <article className="card-news group cursor-pointer animate-fadeInUp relative">
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes pulse-border {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
            }
            50% {
              box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out;
          }
          .pulse-urgent {
            animation: pulse-border 2s infinite;
          }
        `}</style>
        <div className={`relative overflow-hidden aspect-[16/10] rounded-lg ${isUrgent ? "pulse-urgent" : ""}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent group-hover:from-primary/95 transition-all duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 ${
                isUrgent 
                  ? "bg-red-600 text-white animate-pulse" 
                  : "bg-accent text-accent-foreground"
              }`}>
                {isUrgent && <Zap className="inline h-3 w-3 mr-1" />}
                {category}
              </span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3 line-clamp-3 group-hover:text-white transition-colors">
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
    <article className="card-news group cursor-pointer animate-fadeInUp hover:shadow-xl transition-shadow duration-300">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
      <div className="relative overflow-hidden aspect-[4/3] rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 transform group-hover:scale-110 ${
          isUrgent 
            ? "bg-red-600 text-white animate-pulse" 
            : "bg-accent text-accent-foreground"
        }`}>
          {isUrgent && <Zap className="inline h-3 w-3 mr-1" />}
          {category}
        </span>
      </div>
      <div className="p-5 bg-card rounded-b-lg">
        <h3 className="font-display text-lg font-bold text-card-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-300">
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
