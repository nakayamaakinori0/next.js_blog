import Image from "next/image";
import { Article } from "@/types";
import Link from "next/link";
import { ReactElement } from "react";
import ArticleCard from "@/app/components/ArticleCard";

export interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList({
  articles,
}: ArticleListProps): ReactElement {
  return (
    <>
      <div>
        {articles.map((article) => (
          <ArticleCard article={article} key={article.id}></ArticleCard>
        ))}
      </div>
    </>
  );
}
