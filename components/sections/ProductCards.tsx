import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCard {
  title: string;
  image: string;
  description?: string;
}

interface ProductCardsProps {
  title?: string;
  products?: ProductCard[];
}

export default function ProductCards({
  title = "웹아메리카의 해결 구조",
  products = [
    {
      title: "한국 PM 직접 관리",
      image: "/product-1.jpg",
      description: "한국 감성을 이해하는 PM이 프로젝트 전 과정을 관리합니다",
    },
    {
      title: "글로벌 전문 개발팀",
      image: "/product-2.jpg",
      description: "검증된 글로벌 개발팀과의 체계적인 협업 프로세스",
    },
    {
      title: "전략적 동반 성장",
      image: "/product-3.jpg",
      description: "단순 개발이 아닌, 성장을 함께 고민하는 파트너십",
    },
  ],
}: ProductCardsProps) {
  return (
    <section className="py-20 px-6 lg:px-12 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-text mb-12 text-center">{title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-64 bg-surface">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-50"
                  style={{
                    backgroundImage: product.image ? `url(${product.image})` : undefined,
                  }}
                />
              </div>
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
              </CardHeader>
              {product.description && (
                <CardContent>
                  <p className="text-text2">{product.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

