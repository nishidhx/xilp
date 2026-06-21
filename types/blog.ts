export interface BlogFrontmatter {
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  isPublished: boolean;
  slug?: string;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
}

export interface BlogPostPreview {
  slug: string;
  frontmatter: BlogFrontmatter;
}
