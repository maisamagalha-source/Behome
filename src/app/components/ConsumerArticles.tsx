import { BookOpen, ArrowUpRight, ChevronRight } from "lucide-react";

const articles = [
  {
    id: 2,
    title: "Noite das Audaciosas",
    category: "Experiências",
    accent: "#9333ea",
    photo: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=120&h=120&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Festa Black: Uma Noite de Casa Cheia e Muita Energia",
    category: "Festas",
    accent: "#3b82f6",
    photo: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=120&h=120&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Como é uma Tarde Nudista na Spicy?",
    category: "Lifestyle",
    accent: "#f59e0b",
    photo: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=120&h=120&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Segunda noite no evento She Bangs da Spicy",
    category: "Relatos",
    accent: "#ec4899",
    photo: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=120&h=120&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Uma noite no evento Crossdress e Trans da Spicy",
    category: "Relatos",
    accent: "#06b6d4",
    photo: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&h=120&fit=crop&q=80",
  },
  {
    id: 7,
    title: "Conhecendo o She Bangs no Spicy Club",
    category: "Guias",
    accent: "#f97316",
    photo: "https://images.unsplash.com/photo-1545128485-c400ce7b8354?w=120&h=120&fit=crop&q=80",
  },
];

export function ConsumerArticles() {
  return (
    <section className="relative py-16 px-5 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-5xl xl:max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <p className="flex items-center gap-1.5 text-red-500 text-xs font-bold uppercase tracking-widest mb-1.5">
              <BookOpen size={11} />
              Conteúdo do blog
            </p>
            <h2
              className="text-white"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(1.3rem, 3vw, 1.7rem)" }}
            >
              Leituras em destaque
            </h2>
            <p className="text-white/40 text-sm mt-0.5">
              Histórias, dicas e bastidores do nosso blog.
            </p>
          </div>
          <a
            href="#blog"
            className="flex items-center gap-1 text-red-500 hover:text-red-400 text-sm font-semibold transition-colors shrink-0"
          >
            Ver todos os artigos <ChevronRight size={14} />
          </a>
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 lg:gap-5">
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex items-center gap-3 p-3 rounded-xl border border-white/8 bg-white/[0.03] group cursor-pointer transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]"
            >
              {/* Small photo */}
              <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-white/10">
                <img
                  src={article.photo}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <span
                  className="inline-block text-xs font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full mb-1"
                  style={{ background: article.accent + "22", color: article.accent }}
                >
                  {article.category}
                </span>
                <h3
                  className="text-white leading-snug mb-1.5 group-hover:text-white/85 transition-colors line-clamp-2"
                  style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "0.8rem" }}
                >
                  {article.title}
                </h3>
                <a
                  href="#"
                  className="flex items-center gap-0.5 text-xs font-semibold transition-all duration-200 group-hover:gap-1"
                  style={{ color: article.accent }}
                >
                  Ler artigo <ArrowUpRight size={10} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
