"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";

const Articles = () => {
  const [articles, setArticles] = useState<any>([]);

  useEffect(() => {
    setArticles([
      {
        id: 1,
        topic: 'CORS',
        content: 'Here is info about Cross-Origin Resource Sharing'
      }
    ])
  }, []);
  return (
    <div>
      {articles.map((article: any) => (
        <ul key={article.id}>
          <li>
            <Link href={`/articles/${article.id}`}>
              {article.topic}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Articles;